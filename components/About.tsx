'use client'
import Reveal from './Reveal'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

export default function About() {
  return (
    <>
      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spinReverse { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
      `}</style>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: '#4dd9c0', overflow: 'hidden', padding: '14px 0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', gap: 0, animation: 'marquee 28s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#050810', paddingRight: 60 }}>
              Custom Homes &nbsp;·&nbsp; Renovations &nbsp;·&nbsp; Extensions &nbsp;·&nbsp; Canberra ACT &nbsp;·&nbsp; 20+ Years &nbsp;·&nbsp;
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ── QUOTE STRIP ── */}
      <section style={{ background: '#0a0e1a', position: 'relative', overflow: 'hidden', minHeight: 400 }}>
        {/* Vertical label */}
        <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, display: 'flex', alignItems: 'center', zIndex: 2 }}>
          <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
            Since 2003 · Canberra
          </span>
        </div>

        <div style={{ padding: '80px 80px 80px 80px', position: 'relative', zIndex: 1 }}>
          <Reveal direction="up">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

              {/* Left — quote */}
              <div>
                <div style={{ fontFamily: SERIF, fontSize: 80, fontWeight: 300, color: '#4dd9c0', lineHeight: 0.8, marginBottom: 20, opacity: 0.4 }}>&ldquo;</div>
                <blockquote style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 3vw, 42px)', fontWeight: 300, color: '#fff', lineHeight: 1.35, margin: '0 0 40px' }}>
                  We solve problems for people and create{' '}
                  <em style={{ color: '#4dd9c0', fontStyle: 'italic', fontWeight: 600 }}>beautiful outcomes.</em>
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(77,217,192,0.1)', border: '1px solid rgba(77,217,192,0.3)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: '#4dd9c0' }}>LD</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: '#fff' }}>Lincoln Dal Cortivo</div>
                    <div style={{ fontFamily: SANS, fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 3, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Founder, Capella Homes</div>
                  </div>
                </div>
              </div>

              {/* Right — orbital logo */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 300 }}>
                <div style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px solid rgba(77,217,192,0.1)', animation: 'spin 22s linear infinite' }}/>
                <div style={{ position: 'absolute', width: 190, height: 190, borderRadius: '50%', border: '1px dashed rgba(77,217,192,0.12)', animation: 'spinReverse 14s linear infinite' }}/>
                <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', border: '1px solid rgba(77,217,192,0.15)', animation: 'spin 8s linear infinite' }}/>
                <div style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', animation: 'spin 22s linear infinite' }}>
                  <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#4dd9c0', opacity: 0.6 }}/>
                </div>
                <div style={{ position: 'relative', zIndex: 2, width: 80, height: 80, borderRadius: '50%', background: 'rgba(77,217,192,0.08)', border: '1.5px solid rgba(77,217,192,0.3)', display: 'grid', placeItems: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <polygon points="20,4 36,32 4,32" fill="none" stroke="#4dd9c0" strokeWidth="2" strokeLinejoin="round"/>
                    <polygon points="20,10 30,28 10,28" fill="rgba(77,217,192,0.2)" stroke="#4dd9c0" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 80, right: 80, height: 1, background: 'rgba(77,217,192,0.12)' }}/>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 620 }}>

          {/* LEFT — image */}
          <Reveal direction="left" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%)' }}/>
            <div style={{ position: 'absolute', top: 40, left: 40, background: 'rgba(10,14,26,0.85)', backdropFilter: 'blur(8px)', padding: '14px 20px', borderRadius: 6, zIndex: 2 }}>
              <div style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 700, color: '#4dd9c0', lineHeight: 1 }}>2003</div>
              <div style={{ fontFamily: SANS, fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: 3 }}>Est. Canberra</div>
            </div>
          </Reveal>

          {/* RIGHT — content */}
          <Reveal direction="right" delay={0.1} style={{ padding: '80px 80px 80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
            <div style={{ fontFamily: SERIF, fontSize: 'clamp(80px, 14vw, 140px)', fontWeight: 700, color: 'rgba(28,33,48,0.04)', lineHeight: 0.85, letterSpacing: '-4px', userSelect: 'none', marginBottom: -16 }}>About</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 2, background: '#4dd9c0', borderRadius: 1 }}/>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#4dd9c0' }}>Who we are</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: '#1c2130', margin: '0 0 24px', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
              From Your Dreams<br/><span style={{ fontWeight: 300, color: 'rgba(28,33,48,0.45)' }}>to Your Reality</span>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 15, color: '#5a5f72', lineHeight: 1.85, margin: '0 0 36px', maxWidth: 400 }}>
              If your dreams require construction for your growing family, business or community, or extending the life of your buildings while creating healthier environments for the people who live or work in them, then Capella Homes is the company for you.
            </p>
            <div style={{ display: 'flex', gap: 0, marginBottom: 40, borderTop: '1px solid rgba(28,33,48,0.08)', paddingTop: 32 }}>
              {[['20+', 'Years'], ['3', 'Generations'], ['ACT', 'Based']].map(([n, l], i) => (
                <div key={i} style={{ flex: 1, paddingRight: 24, borderRight: i < 2 ? '1px solid rgba(28,33,48,0.08)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                  <div style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 700, color: '#1c2130', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: SANS, fontSize: 11, color: '#8a8f9e', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="/about" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 12, color: '#1c2130', fontSize: 12, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #1c2130', display: 'grid', placeItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
              </div>
              Learn more
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}