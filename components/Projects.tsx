'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

const SERIF = "var(--font-serif, 'Titillium Web', serif)"
const SANS  = "var(--font-sans, 'Raleway', sans-serif)"

const projs = [
  { name: 'Pearce',        loc: 'Pearce, ACT',    accent: '#00b4ac', image: '/images/image2-homev1.jpg' },
  { name: 'Charity House', loc: 'Canberra, ACT',  accent: '#00b4ac', image: '/images/image3-home1.jpg' },
  { name: "O'Connor",      loc: "O'Connor, ACT",  accent: '#00b4ac', image: '/images/grevillia-33.jpg' },
  { name: 'Garran',        loc: 'Garran, ACT',    accent: '#00b4ac', image: '/images/garran-35.jpg' },
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" style={{ background: '#1a1a1a', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: -30, left: -10, fontFamily: SERIF, fontSize: 'clamp(100px, 16vw, 200px)', fontWeight: 700, color: 'rgba(255,255,255,0.02)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-4px', whiteSpace: 'nowrap' }}>
        Portfolio
      </div>

      <Reveal direction="up">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 1, background: '#00b4ac' }}/>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#00b4ac' }}>Portfolio</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>
              Recent <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>projects</em>
            </h2>
          </div>
          <Magnetic strength={0.25}>
            <a href="/projects" className="shine" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#fff', padding: '13px 26px', borderRadius: 8, fontWeight: 600, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              View all projects
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
            </a>
          </Magnetic>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ position: 'relative', zIndex: 1 }}>
        {projs.map((p, i) => (
          <Reveal key={p.name} direction="up" delay={i * 0.1}>
            <a
              href="/projects"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'block', position: 'relative', overflow: 'hidden', borderRadius: 16, height: 300,
                textDecoration: 'none', border: `1px solid ${hovered === i ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)'}`,
                transition: 'border-color 0.3s ease',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0, backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
                transform: hovered === i ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
              }}/>
              <div style={{
                position: 'absolute', inset: 0,
                background: hovered === i
                  ? 'linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 100%)'
                  : 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)',
                transition: 'background 0.4s ease',
              }}/>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.accent }}/>
              <div style={{ position: 'absolute', top: 20, right: 22, fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '4px 12px' }}>
                Residential
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span style={{ fontFamily: SANS, fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>{p.loc}</span>
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1, letterSpacing: '-0.5px' }}>{p.name}</h3>
                </div>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0,
                  background: hovered === i ? p.accent : 'transparent', border: `1px solid ${hovered === i ? p.accent : 'rgba(255,255,255,0.2)'}`,
                  opacity: hovered === i ? 1 : 0, transform: hovered === i ? 'translateY(0)' : 'translateY(8px)', transition: 'all 0.3s ease',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
