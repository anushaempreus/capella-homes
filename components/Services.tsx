'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

const svcs = [
  { num: '01', title: 'New Construction', subtitle: 'Build from the ground up', desc: 'Custom building with uniquely beautiful outcomes. From concept through to handover, every detail is crafted around how you live.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&fit=crop', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { num: '02', title: 'Renovation',       subtitle: 'Restore, revive, renew',    desc: 'Love where you live again. We restore, revive, and renew your existing space without the upheaval of moving.',                    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&fit=crop', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { num: '03', title: 'Extension',        subtitle: 'Grow without moving',       desc: 'Transform and grow your space without having to move. Add the room, storey, or layout your growing family needs.',                  image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80&fit=crop', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg> },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" style={{ background: '#0a0e1a', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 620 }}>
      {/* LEFT — image panel */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {svcs.map((s, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: active === i ? 1 : 0, transition: 'opacity 0.7s ease' }}/>
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(4,7,18,0.3) 0%, rgba(4,7,18,0.1) 100%)', zIndex: 1 }}/>
        <div style={{ position: 'absolute', bottom: 36, left: 36, zIndex: 2 }}>
          <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#4dd9c0', marginBottom: 6 }}>{svcs[active].num}</div>
          <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: '#fff' }}>{svcs[active].subtitle}</div>
        </div>
        <div style={{ position: 'absolute', top: 28, left: 28, zIndex: 2 }}>
          <div style={{ width: 24, height: 2, background: '#4dd9c0', opacity: 0.6 }}/>
          <div style={{ width: 2, height: 24, background: '#4dd9c0', opacity: 0.6 }}/>
        </div>
      </div>

      {/* RIGHT — service list */}
      <Reveal direction="right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 56px', gap: 8, background: '#0a0e1a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
          <div style={{ width: 28, height: 1, background: '#4dd9c0' }}/>
          <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4dd9c0' }}>Services</span>
        </div>
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(30px, 3vw, 46px)', fontWeight: 300, color: 'rgba(255,255,255,0.6)', letterSpacing: '0px', lineHeight: 1.1, margin: 0 }}>What Capella</h2>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(30px, 3vw, 46px)', fontWeight: 700, color: '#fff', letterSpacing: '0px', lineHeight: 1.1, margin: 0 }}>Homes offers</h2>
        </div>
        {svcs.map((s, i) => (
          <div key={i} onClick={() => setActive(i)} style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '22px 24px', borderRadius: 12, cursor: 'pointer', background: active === i ? 'rgba(77,217,192,0.07)' : 'transparent', border: `1px solid ${active === i ? 'rgba(77,217,192,0.2)' : 'rgba(255,255,255,0.05)'}`, borderLeft: `3px solid ${active === i ? '#4dd9c0' : 'transparent'}`, transition: 'all 0.3s ease' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: active === i ? 'rgba(77,217,192,0.15)' : 'rgba(255,255,255,0.05)', display: 'grid', placeItems: 'center', color: active === i ? '#4dd9c0' : 'rgba(255,255,255,0.35)', flexShrink: 0, transition: 'all 0.3s ease' }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: active === i ? 600 : 400, color: active === i ? '#fff' : 'rgba(255,255,255,0.5)', margin: 0, transition: 'color 0.3s ease' }}>{s.title}</h3>
                <span style={{ fontFamily: SANS, fontSize: 11, color: active === i ? '#4dd9c0' : 'rgba(255,255,255,0.2)', fontWeight: 600, letterSpacing: '1px', transition: 'color 0.3s ease' }}>{s.num}</span>
              </div>
              <p style={{ fontFamily: SANS, fontSize: 13, color: active === i ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.28)', margin: 0, lineHeight: 1.65, transition: 'color 0.3s ease' }}>{s.desc}</p>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 24 }}>
          <a href="/projects" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#4dd9c0', color: '#050810', padding: '13px 28px', borderRadius: 10, fontWeight: 600, fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>
            View all projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
          </a>
        </div>
      </Reveal>
    </section>
  )
}