'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

const cats = [
  { num: '01', name: 'Residential', desc: 'Custom homes, renovations and extensions crafted for growing families across Canberra.', color: '#0a0e1a', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&fit=crop' },
  { num: '02', name: 'Commercial',  desc: 'Thriving spaces for businesses and communities built to last and inspire.',              color: '#111827', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&fit=crop' },
  { num: '03', name: 'Unique',      desc: 'Creative solutions — granny flats, passive homes, studios and more.',                   color: '#0d1520', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&fit=crop' },
]

export default function Categories() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ background: '#0a0e1a' }}>

      {/* Header */}
      <Reveal direction="up">
        <div style={{ padding: '64px 80px 40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 28, height: 1, background: '#4dd9c0' }}/>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#4dd9c0' }}>What we build</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>
              Three categories of<br/><span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>construction excellence</span>
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Horizontal list — no images, pure type + colour */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {cats.map((c, i) => (
          <Reveal key={i} direction="up" delay={i * 0.12}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '56px 48px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                cursor: 'default',
                transition: 'background 0.3s ease',
                background: hovered === i ? 'rgba(77,217,192,0.04)' : 'transparent',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Very light background image */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: hovered === i ? 0.12 : 0.06, transition: 'opacity 0.5s ease' }}/>

              {/* Ghost number background */}
              <div style={{ position: 'absolute', right: -10, bottom: -30, fontFamily: SERIF, fontSize: 140, fontWeight: 700, color: '#fff', opacity: hovered === i ? 0.05 : 0.025, lineHeight: 1, userSelect: 'none', transition: 'opacity 0.4s', pointerEvents: 'none' }}>
                {c.num}
              </div>

              {/* Teal top accent */}
              <div style={{ width: hovered === i ? '100%' : 40, height: 2, background: '#4dd9c0', marginBottom: 32, transition: 'width 0.5s ease', borderRadius: 1 }}/>

              <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4dd9c0', marginBottom: 16, opacity: 0.8 }}>{c.num}</div>
              <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, color: '#fff', margin: '0 0 16px', lineHeight: 1.05, transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)', transition: 'transform 0.35s ease' }}>{c.name}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, margin: 0, maxWidth: 280 }}>{c.desc}</p>

              <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 10, opacity: hovered === i ? 1 : 0, transform: hovered === i ? 'translateX(0)' : 'translateX(-10px)', transition: 'all 0.35s ease' }}>
                <div style={{ width: 28, height: 1, background: '#4dd9c0' }}/>
                <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4dd9c0' }}>View projects</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}