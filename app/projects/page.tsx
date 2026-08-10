'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const SERIF = "var(--font-serif, 'Titillium Web', serif)"
const SANS  = "var(--font-sans, 'Raleway', sans-serif)"

const projects = [
  {
    name: 'Pearce',
    category: 'Residential',
    location: 'Pearce, ACT',
    desc: 'A stunning modern residential build in the heart of Pearce, designed to maximise natural light and create seamless indoor-outdoor living.',
    image: '/images/image2-homev1.jpg',
    accent: '#00b4ac',
  },
  {
    name: 'Charity House',
    category: 'Residential',
    location: 'Canberra, ACT',
    desc: 'A beautiful charitable residential project showcasing commitment to creating meaningful spaces for the community.',
    image: '/images/image3-home1.jpg',
    accent: '#00b4ac',
  },
  {
    name: "O'Connor",
    category: 'Residential',
    location: "O'Connor, ACT",
    desc: "A carefully crafted home extension and renovation in O'Connor, blending contemporary design with the suburb's established character.",
    image: '/images/grevillia-33.jpg',
    accent: '#00b4ac',
  },
  {
    name: 'Garran',
    category: 'Residential',
    location: 'Garran, ACT',
    desc: 'A premium new build in Garran featuring high-end finishes, open plan living, and expertly crafted spaces for modern family life.',
    image: '/images/garran-35.jpg',
    accent: '#00b4ac',
  },
]

const filters = ['All', 'Residential']
const stats = [
  { n: '4',   l: 'Projects completed' },
  { n: '20+', l: 'Years experience' },
  { n: '3',   l: 'Generations of craft' },
  { n: 'ACT', l: 'Based in Canberra' },
]

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

function CardInner({
  p, i, height, titleSize, hovered, onHover, onLeave,
}: {
  p: typeof projects[0]; i: number; height: number; titleSize: number
  hovered: number | null; onHover: (i: number) => void; onLeave: () => void
}) {
  return (
    <div
      onMouseEnter={() => onHover(i)}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: 16, height, cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.04)',
        transition: 'border-color 0.3s ease',
        ...(hovered === i ? { borderColor: 'rgba(255,255,255,0.12)' } : {}),
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${p.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: hovered === i ? 'scale(1.07)' : 'scale(1)',
        transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}/>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered === i
          ? 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.15) 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
        transition: 'background 0.4s ease',
      }}/>

      {/* Accent top line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.accent }}/>

      {/* Top labels */}
      <div style={{
        position: 'absolute', top: 20, left: 24,
        fontFamily: SERIF, fontSize: 13,
        color: 'rgba(255,255,255,0.3)', letterSpacing: '1px',
      }}>
        {String(i + 1).padStart(2, '0')}
      </div>
      <div style={{
        position: 'absolute', top: 20, right: 22,
        display: 'inline-flex', alignItems: 'center',
        padding: '4px 12px', borderRadius: 20,
        fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        {p.category}
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontFamily: SANS, fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>{p.location}</span>
            </div>
            <h3 style={{
              fontFamily: SERIF, fontSize: titleSize, fontWeight: 700,
              color: '#fff', margin: 0, lineHeight: 1, letterSpacing: '-0.5px',
            }}>
              {p.name}
            </h3>
            <p style={{
              fontFamily: SANS, fontSize: 13, color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.65, margin: 0,
              maxHeight: hovered === i ? '80px' : '0px',
              overflow: 'hidden',
              opacity: hovered === i ? 1 : 0,
              transition: 'max-height 0.5s ease, opacity 0.4s ease',
              marginTop: hovered === i ? 10 : 0,
            }}>
              {p.desc}
            </p>
          </div>
          {/* Arrow */}
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            display: 'grid', placeItems: 'center',
            flexShrink: 0, marginLeft: 16,
            background: hovered === i ? '#00b4ac' : 'transparent',
            border: `1px solid ${hovered === i ? '#00b4ac' : 'rgba(255,255,255,0.2)'}`,
            opacity: hovered === i ? 1 : 0,
            transform: hovered === i ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h8M8 4l3 3-3 3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main style={{ fontFamily: SANS }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', overflow: 'hidden', height: 420,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#1a1a1a',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/mg-1313.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, #1a1a1a, transparent)', zIndex: 2 }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 400, color: '#fff', margin: '0 0 20px', letterSpacing: '-1px', lineHeight: 1.0 }}>Projects</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Link href="/" style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Home</Link>
            <div style={{ display: 'flex', gap: 4 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}/>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}/>
            </div>
            <span style={{ fontFamily: SANS, fontSize: 12, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Projects</span>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ background: '#1a1a1a', padding: '72px 80px 96px' }}>

        {/* Header + filters */}
        <Reveal direction="up">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>[</span>
                <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.28)', letterSpacing: '2px', textTransform: 'uppercase' }}>Portfolio</span>
                <span style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>]</span>
              </div>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>Our work</h2>
            </div>
            <div style={{ display: 'flex', gap: 6, background: 'rgba(255,255,255,0.04)', padding: '5px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)' }}>
              {filters.map(f => (
                <button key={f} onClick={() => setActive(f)} style={{
                  fontFamily: SANS, fontSize: 11, fontWeight: 600,
                  padding: '8px 18px', borderRadius: 7, border: 'none',
                  cursor: 'pointer', letterSpacing: '0.5px',
                  background: active === f ? '#ffffff' : 'transparent',
                  color: active === f ? '#1a1a1a' : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.2s ease',
                }}>
                  {f}{f !== 'All' && <span style={{ marginLeft: 6, opacity: 0.5, fontSize: 10 }}>{projects.filter(p => p.category === f).length}</span>}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Featured card — full width */}
        {filtered.length > 0 && (
          <Reveal direction="up" delay={0.1}>
            <div style={{ marginBottom: 12 }}>
              <CardInner p={filtered[0]} i={0} height={420} titleSize={42} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
            </div>
          </Reveal>
        )}

        {/* 2-column grid for middle cards */}
        {filtered.length > 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <Reveal direction="left" delay={0.1}>
              <CardInner p={filtered[1]} i={1} height={320} titleSize={28} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <CardInner p={filtered[2]} i={2} height={320} titleSize={28} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
            </Reveal>
          </div>
        )}

        {/* Remaining cards — full width banner */}
        {filtered.slice(3).map((p, i) => (
          <Reveal key={p.name} direction="up" delay={0.1}>
            <div style={{ marginBottom: 12 }}>
              <CardInner p={p} i={i + 3} height={280} titleSize={28} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
            </div>
          </Reveal>
        ))}

        {/* Stats bar */}
        <Reveal direction="up" delay={0.15}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12, marginTop: 48, overflow: 'hidden',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center', padding: '24px 20px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 700, color: '#00b4ac', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontFamily: SANS, fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Separator */}
      <div style={{ height: 6, background: 'linear-gradient(to right, #1a1a1a, #00b4ac 40%, #00b4ac 60%, #1a1a1a)' }}/>

      <Footer />
    </main>
  )
}