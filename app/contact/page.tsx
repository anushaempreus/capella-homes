'use client'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0)'
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({
  children,
  direction = 'up',
  delay = 0,
  style = {},
}: {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'fade'
  delay?: number
  style?: React.CSSProperties
}) {
  const ref = useReveal()
  const initial =
    direction === 'up'    ? 'translateY(40px)' :
    direction === 'left'  ? 'translateX(-40px)' :
    direction === 'right' ? 'translateX(40px)' :
    'translateY(0)'

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: initial,
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main style={{ fontFamily: SANS }}>
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section style={{ position: 'relative', overflow: 'hidden', height: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#050810' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,7,18,0.68)' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, #ffffff, transparent)', zIndex: 2 }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 400, color: '#fff', margin: '0 0 20px', letterSpacing: '-1px', lineHeight: 1.0 }}>Contact Us</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <a href="/" style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Home</a>
            <div style={{ display: 'flex', gap: 4 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}/>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}/>
            </div>
            <span style={{ fontFamily: SANS, fontSize: 12, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Contact Us</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: '#ffffff', padding: '96px 100px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'flex-start' }}>

          {/* LEFT — Form */}
          <Reveal direction="left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 1.5, background: '#4dd9c0', borderRadius: 1 }}/>
                  <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4dd9c0' }}>Get in touch</span>
                </div>
                <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(30px, 3vw, 48px)', fontWeight: 700, color: '#1c2130', margin: '0 0 12px', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
                  Let&apos;s start a<br/><span style={{ fontWeight: 300, color: 'rgba(28,33,48,0.5)' }}>conversation.</span>
                </h2>
                <p style={{ fontFamily: SANS, fontSize: 14, color: '#8a8f9e', margin: 0, lineHeight: 1.7 }}>
                  We endeavour to answer all enquiries within 24 hours on business days.
                </p>
              </div>

              {sent ? (
                <div style={{ background: 'rgba(77,217,192,0.08)', border: '1px solid rgba(77,217,192,0.25)', borderRadius: 14, padding: '36px 32px', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(77,217,192,0.12)', border: '1.5px solid #4dd9c0', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 700, color: '#1c2130', margin: '0 0 8px' }}>Message sent!</h3>
                  <p style={{ fontFamily: SANS, fontSize: 14, color: '#8a8f9e', margin: 0 }}>We&apos;ll be in touch within 24 hours on business days.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#5a5f72', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Your name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Lincoln Dal Cortivo"
                        style={{ fontFamily: SANS, fontSize: 14, color: '#1c2130', background: '#f9f7f4', border: '1.5px solid rgba(28,33,48,0.1)', borderRadius: 10, padding: '13px 16px', outline: 'none', transition: 'border-color 0.2s' }}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#5a5f72', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Your email</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@example.com"
                        style={{ fontFamily: SANS, fontSize: 14, color: '#1c2130', background: '#f9f7f4', border: '1.5px solid rgba(28,33,48,0.1)', borderRadius: 10, padding: '13px 16px', outline: 'none', transition: 'border-color 0.2s' }}/>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#5a5f72', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handle} required placeholder="New home build enquiry"
                      style={{ fontFamily: SANS, fontSize: 14, color: '#1c2130', background: '#f9f7f4', border: '1.5px solid rgba(28,33,48,0.1)', borderRadius: 10, padding: '13px 16px', outline: 'none', transition: 'border-color 0.2s' }}/>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#5a5f72', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Your message <span style={{ opacity: 0.4, fontWeight: 400 }}>(optional)</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your project..." rows={5}
                      style={{ fontFamily: SANS, fontSize: 14, color: '#1c2130', background: '#f9f7f4', border: '1.5px solid rgba(28,33,48,0.1)', borderRadius: 10, padding: '13px 16px', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}/>
                  </div>

                  <button type="submit" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#1c2130', color: '#fff', padding: '15px 32px', borderRadius: 10, fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'all 0.2s', marginTop: 8 }}>
                    Send message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* RIGHT — Contact details */}
          <Reveal direction="right" delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: '#8a8f9e' }}>[</span>
                <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#8a8f9e', letterSpacing: '2px', textTransform: 'uppercase' }}>Contact details</span>
                <span style={{ fontSize: 12, color: '#8a8f9e' }}>]</span>
              </div>

              <div>
                <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(26px, 2.5vw, 38px)', fontWeight: 700, color: '#1c2130', margin: '0 0 12px', letterSpacing: '-0.3px', lineHeight: 1.1 }}>
                  Let&apos;s Start a Project
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 15, color: '#5a5f72', lineHeight: 1.8, margin: 0 }}>
                  Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: '#1c2130', opacity: 0.18 }}/>
                ))}
              </div>

              {/* Contact cards — each staggered */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  {
                    label: 'Email',
                    value: 'info@capellahomes.com.au',
                    href: 'mailto:info@capellahomes.com.au',
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  },
                  {
                    label: 'Phone',
                    value: '0419 989 799',
                    href: 'tel:+61419989799',
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.2 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>,
                  },
                  {
                    label: 'Location',
                    value: 'Canberra, ACT & surrounds',
                    href: '#',
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  },
                ].map((c, i) => (
                  <Reveal key={i} direction="right" delay={0.2 + i * 0.1}>
                    <a href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', background: '#f9f7f4', borderRadius: 12, border: '1px solid rgba(28,33,48,0.07)', textDecoration: 'none', transition: 'all 0.2s', borderLeft: '3px solid #4dd9c0' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(77,217,192,0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        {c.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8a8f9e', marginBottom: 3 }}>{c.label}</div>
                        <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, color: '#1c2130' }}>{c.value}</div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Social */}
              <Reveal direction="up" delay={0.5}>
                <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}>
                  {[
                    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61550950030102', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                    { label: 'Instagram', href: 'https://www.instagram.com/capellahomesact/', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ width: 42, height: 42, borderRadius: 10, background: '#1c2130', border: '1px solid #1c2130', display: 'grid', placeItems: 'center', color: '#fff', textDecoration: 'none', transition: 'background 0.2s' }}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Separator */}
      <div style={{ height: 6, background: 'linear-gradient(to right, #ffffff, #4dd9c0 40%, #4dd9c0 60%, #0a0e1a)' }}/>

      <Footer />
    </main>
  )
}