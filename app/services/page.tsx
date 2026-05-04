'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

const pillars = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Professionalism', sub: 'Dedicated precision' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: 'Experience & Skills', sub: 'Mastery & expertise' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: 'Customer Focus', sub: 'Satisfaction first' },
]

const services = [
  { num: '01', title: 'New Construction', desc: 'Custom building with a uniquely beautiful outcome. From the very first conversation through to handover, we craft every detail around how you want to live.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&fit=crop', features: ['Custom design & build', 'Full project management', 'Concept to completion'] },
  { num: '02', title: 'Renovation', desc: 'Restore, revive or renew your space. We breathe new life into your home without the upheaval of moving — transforming existing spaces beautifully.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&fit=crop', features: ['Kitchen & bathroom', 'Full home renovation', 'Structural changes'] },
  { num: '03', title: 'Extension', desc: 'Transform and grow your space without having to move. Add the room, storey, or layout your growing family needs, seamlessly integrated into your existing home.', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80&fit=crop', features: ['Upper storey additions', 'Granny flats & studios', 'Ground floor extensions'] },
]

export default function ServicesPage() {
  return (
    <main style={{ fontFamily: SANS }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', height: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#050810' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,7,18,0.65)' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, #ffffff, transparent)', zIndex: 2 }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 400, color: '#fff', margin: '0 0 20px', letterSpacing: '-1px', lineHeight: 1.0 }}>Services</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <a href="/" style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Home</a>
            <div style={{ display: 'flex', gap: 4 }}><div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}/><div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}/></div>
            <span style={{ fontFamily: SANS, fontSize: 12, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Services</span>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ background: '#ffffff', padding: '80px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', maxWidth: 1300, margin: '0 auto' }}>
        <Reveal direction="left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, color: '#8a8f9e' }}>[</span>
              <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#8a8f9e', letterSpacing: '2px', textTransform: 'uppercase' }}>Services</span>
              <span style={{ fontSize: 13, color: '#8a8f9e' }}>]</span>
            </div>
            <div>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 3.5vw, 50px)', fontWeight: 400, color: 'rgba(28,33,48,0.5)', margin: 0, letterSpacing: '-0.5px', lineHeight: 1.1 }}>From Your Dreams</h2>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 3.5vw, 50px)', fontWeight: 700, color: '#1c2130', margin: 0, letterSpacing: '-0.5px', lineHeight: 1.1 }}>to Your Reality</h2>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: 12 }).map((_, i) => <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: '#1c2130', opacity: 0.18 }}/>)}
            </div>
            <p style={{ fontFamily: SANS, fontSize: 15, color: '#5a5f72', lineHeight: 1.9, margin: 0 }}>
              At Capella Homes, we specialise in creating uniquely exquisite solutions, ensuring first rate quality from the initial discussion to the final execution. Collaborating closely with clients, engineers, and architects, we uphold integrity in every detail. Whether involved from the outset or brought in during any phase, our trusted network of skilled subcontractors guarantees seamless project delivery.
            </p>
            <a href="/projects" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#1c2130', color: '#fff', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', width: 'fit-content', marginTop: 4 }}>
              View Projects
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
            </a>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '20px 24px', borderRadius: 12, background: '#f9f7f4', border: '1px solid rgba(28,33,48,0.07)', borderLeft: '3px solid #4dd9c0' }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: 'rgba(77,217,192,0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 700, color: '#1c2130', lineHeight: 1.1 }}>{p.title}</div>
                  <div style={{ fontFamily: SANS, fontSize: 11, color: '#8a8f9e', marginTop: 3, letterSpacing: '0.5px' }}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── QUICK CTA STRIP ── */}
      <Reveal direction="up">
        <section style={{ background: '#4dd9c0', padding: '32px 100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div style={{ fontFamily: SERIF, fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 700, color: '#050810', lineHeight: 1.2 }}>Ready to get started?</div>
            <div style={{ fontFamily: SANS, fontSize: 13, color: 'rgba(5,8,16,0.6)', marginTop: 4 }}>Call us on 0419 989 799 — we respond within 24 hours on business days.</div>
          </div>
          <a href="/contact" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#050810', color: '#fff', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Contact us
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
          </a>
        </section>
      </Reveal>

      {/* ── WHAT WE OFFER ── */}
      <section style={{ background: '#0a0e1a', padding: '80px 80px' }}>
        <Reveal direction="up">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
            <span style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>[</span>
            <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>Services</span>
            <span style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>]</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: '0 0 60px', letterSpacing: '-0.5px' }}>
            What can we offer
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
          {services.map((s, i) => (
            <Reveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', direction: i % 2 !== 0 ? 'rtl' as const : 'ltr' as const, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(77,217,192,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: 320, direction: 'ltr' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,7,18,0.28)' }}/>
                  <div style={{ position: 'absolute', bottom: -8, right: -8, fontFamily: SERIF, fontSize: 110, fontWeight: 700, color: '#fff', opacity: 0.07, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{s.num}</div>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#4dd9c0' }}/>
                </div>
                <div style={{ background: '#111827', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16, direction: 'ltr' }}>
                  <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#4dd9c0' }}>{s.num}</div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.3px', lineHeight: 1.1 }}>{s.title}</h3>
                  <div style={{ width: 36, height: 2, background: '#4dd9c0', borderRadius: 1 }}/>
                  <p style={{ fontFamily: SANS, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 4 }}>
                    {s.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4dd9c0', flexShrink: 0 }}/>
                        <span style={{ fontFamily: SANS, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/contact" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#4dd9c0', color: '#050810', padding: '11px 22px', borderRadius: 8, fontWeight: 600, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', width: 'fit-content', marginTop: 6 }}>
                    Get started
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div style={{ height: 6, background: 'linear-gradient(to right, #0a0e1a, #4dd9c0 40%, #4dd9c0 60%, #0a0e1a)' }}/>
      <Footer />
    </main>
  )
}