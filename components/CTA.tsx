'use client'
import Reveal from './Reveal'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

export default function CTA() {
  return (
    <section id="contact" style={{ background: '#0a0e1a', position: 'relative', overflow: 'hidden' }}>

      {/* Large teal top border */}
      <div style={{ height: 3, background: 'linear-gradient(to right, #4dd9c0, rgba(77,217,192,0.2))' }}/>

      {/* Ghost typography */}
      <div style={{ position: 'absolute', bottom: -40, right: -20, fontFamily: SERIF, fontSize: 'clamp(120px, 18vw, 220px)', fontWeight: 700, color: 'rgba(255,255,255,0.025)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-4px', whiteSpace: 'nowrap' }}>
        Let&apos;s build.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360, padding: '80px 80px', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Left */}
        <Reveal direction="left">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1.5, background: '#4dd9c0', borderRadius: 1 }}/>
            <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#4dd9c0' }}>Get started</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 700, color: '#fff', margin: '0 0 20px', letterSpacing: '-1px', lineHeight: 1.05 }}>
            Ready to bring<br/>your project<br/><span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>to life?</span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, margin: 0, maxWidth: 400 }}>
            Whether you are at the very beginning with just a concept, or you already have plans — we can jump right in with you.
          </p>
        </Reveal>

        {/* Right */}
        <Reveal direction="right" delay={0.1} style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
          {/* Contact block */}
          <div style={{ borderLeft: '2px solid rgba(77,217,192,0.3)', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+61419989799" style={{ fontFamily: SERIF, fontSize: 36, fontWeight: 700, color: '#fff', textDecoration: 'none', lineHeight: 1 }}>0419 989 799</a>
            <a href="mailto:info@capellahomes.com.au" style={{ fontFamily: SANS, fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>info@capellahomes.com.au</a>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <a href="/contact" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#4dd9c0', color: '#050810', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>
              Let&apos;s chat
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
            </a>
            <a href="/projects" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'rgba(255,255,255,0.5)', padding: '14px 24px', borderRadius: 8, fontWeight: 600, fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
              View projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}