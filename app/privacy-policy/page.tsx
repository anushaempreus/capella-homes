import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const SERIF = "var(--font-serif, 'Titillium Web', serif)"
const SANS  = "var(--font-sans, 'Raleway', sans-serif)"

const sections = [
  {
    title: 'Information we collect',
    body: 'When you submit our contact form, we collect the information you provide: your name, email address, subject, and any message you write. We do not require an account and do not collect payment information through this website.',
  },
  {
    title: 'How we use your information',
    body: 'We use the details you submit solely to respond to your enquiry, for example to discuss a potential home build, renovation, or extension project. We do not sell, rent, or share your information with third parties for marketing purposes.',
  },
  {
    title: 'Third-party services',
    body: 'Contact form submissions are delivered to us using Resend, an email delivery service. This website is hosted on Vercel. Both providers may process your data solely to deliver our service and are bound by their own privacy and security obligations.',
  },
  {
    title: 'Data storage and security',
    body: 'Enquiry details are transmitted securely and used only for the purpose of responding to you. We take reasonable steps to protect information submitted through this site from misuse, loss, and unauthorised access.',
  },
  {
    title: 'Your rights',
    body: 'You can ask us at any time what information we hold about you, request a correction, or ask us to delete it. To do so, contact us using the details below.',
  },
  {
    title: 'Cookies',
    body: "This website does not use analytics or advertising cookies. Our hosting provider may use minimal functional cookies required to operate the site; these do not track you across other websites.",
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this policy from time to time to reflect changes to our website or legal requirements. The current version will always be available on this page.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main style={{ fontFamily: SANS }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', height: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to top, #ffffff, transparent)', zIndex: 2 }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, color: '#fff', margin: '0 0 16px', letterSpacing: '-1px', lineHeight: 1.0 }}>Privacy Policy</h1>
          <p style={{ fontFamily: SANS, fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Last updated {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: '#ffffff', padding: '80px 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: SANS, fontSize: 15, color: '#5a5f72', lineHeight: 1.9, marginBottom: 48 }}>
            Capella Homes (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect through this website, how we use it, and your rights in relation to it.
          </p>

          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px', letterSpacing: '-0.3px' }}>{s.title}</h2>
              <p style={{ fontFamily: SANS, fontSize: 15, color: '#5a5f72', lineHeight: 1.85, margin: 0 }}>{s.body}</p>
            </div>
          ))}

          <div style={{ borderTop: '1px solid rgba(26,26,26,0.08)', paddingTop: 32, marginTop: 8 }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px', letterSpacing: '-0.3px' }}>Contact us</h2>
            <p style={{ fontFamily: SANS, fontSize: 15, color: '#5a5f72', lineHeight: 1.85, margin: 0 }}>
              If you have any questions about this privacy policy or how we handle your information, please contact us at{' '}
              <a href="mailto:info@capellahomes.com.au" style={{ color: '#00b4ac', textDecoration: 'none' }}>info@capellahomes.com.au</a>{' '}
              or call{' '}
              <a href="tel:+61419989799" style={{ color: '#00b4ac', textDecoration: 'none' }}>0419 989 799</a>.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: 6, background: 'linear-gradient(to right, #ffffff, #00b4ac 40%, #00b4ac 60%, #1a1a1a)' }}/>
      <Footer />
    </main>
  )
}
