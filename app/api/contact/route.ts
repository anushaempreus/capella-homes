import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

function clientIp(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 }
function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: 'Too many requests — please try again later.' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Honeypot — bots that fill this out are silently accepted, not sent
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const name = clean(body.name, LIMITS.name)
  const email = clean(body.email, LIMITS.email)
  const subject = clean(body.subject, LIMITS.subject)
  const message = clean(body.message, LIMITS.message)

  if (!name || !EMAIL_RE.test(email) || !subject) {
    return NextResponse.json({ error: 'Please fill in your name, email, and subject.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY not set — enquiry not emailed:', { name, email, subject })
    return NextResponse.json({ ok: true, delivered: false })
  }

  const resend = new Resend(apiKey)
  const from = process.env.CONTACT_FROM ?? 'Capella Homes Website <onboarding@resend.dev>'
  const to = process.env.CONTACT_RECIPIENT ?? 'info@capellahomes.com.au'

  const html = `<h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    <p><strong>Subject:</strong> ${esc(subject)}</p>
    ${message ? `<p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, '<br/>')}</p>` : ''}`

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry — ${subject} (${name})`,
      html,
    })

    if (error) {
      console.error('[contact] resend rejected send:', error)
      return NextResponse.json({ error: 'We could not send your message — please call 0419 989 799.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[contact] send failed:', err)
    return NextResponse.json({ error: 'We could not send your message — please call 0419 989 799.' }, { status: 500 })
  }
}
