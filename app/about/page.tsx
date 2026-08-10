'use client'
import { useEffect, useRef } from 'react'
import * as React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const SERIF = "var(--font-serif, 'Titillium Web', serif)"
const SANS  = "var(--font-sans, 'Raleway', sans-serif)"

const philosophy = [
  { tag: 'Mission', title: 'Building for the future', text: 'Built on principles and foundations from the past, newly inspired beautiful, healthy spaces and environments are an enduring legacy for the future.', image: '/images/dji-0034.jpg' },
  { tag: 'Vision',  title: 'Inspired by the past',   text: 'We exist to solve construction and development problems for people and create beautiful outcomes in the local Canberra area.',                    image: '/images/untitled2.jpg' },
  { tag: 'Values',  title: 'Trust, quality, honesty', text: 'Everything we do is guided by trust, quality and honesty — values passed down through three generations of building excellence.',              image: '/images/grevillia-33.jpg' },
]

const testimonials = [
  { quote: 'Lincoln from Capella Homes was professional and honest throughout the entire building process. He communicated regularly and provided professional advice throughout all phases of construction.', name: 'Robert' },
  { quote: "Can honestly say I couldn't find a better team of guys to do our bathroom reno then Capella homes! From start to finish no stone was left unturned and communication was consistent. This down to earth family are one of a kind!", name: 'Chantelle and Luke' },
  { quote: 'Capella Homes built a couple of houses for my family over the past 10 years. Lincoln assisted with the design and provided suggestions that suited our budget. He completed the project on time and within the budget.', name: 'Connie' },
  { quote: "Working with Lincoln from Capella Homes was an absolute pleasure. His unwavering trustworthiness, guidance, transparent communication and refreshing out-of-the-box thinking made every step of our project a breeze.", name: 'Kathryn and Peter' },
]

function TestimonialsSlider({ testimonials }: { testimonials: { quote: string; name: string }[] }) {
  const [active, setActive] = React.useState(0)
  const [animDir, setAnimDir] = React.useState<'left' | 'right'>('right')
  const [visible, setVisible] = React.useState(true)

  const go = React.useCallback((dir: 'left' | 'right') => {
    setAnimDir(dir)
    setVisible(false)
    setTimeout(() => {
      setActive(prev => dir === 'right' ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length)
      setVisible(true)
    }, 300)
  }, [testimonials.length])

  useEffect(() => {
    const t = setInterval(() => go('right'), 6000)
    return () => clearInterval(t)
  }, [go])

  const t = testimonials[active]

  return (
    <section style={{ background: '#f2f2f2', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}>
        {[320, 480, 640].map((r, i) => (
          <div key={i} style={{ position: 'absolute', width: r, height: r, borderRadius: '50%', border: '1px solid rgba(26,26,26,0.04)', top: -r/2, left: -r/2 }}/>
        ))}
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
        <Reveal direction="up">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
            <span style={{ fontFamily: SANS, fontSize: 12, color: '#8a8f9e' }}>[</span>
            <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#8a8f9e', letterSpacing: '2px', textTransform: 'uppercase' }}>Testimonials</span>
            <span style={{ fontFamily: SANS, fontSize: 12, color: '#8a8f9e' }}>]</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: '#1a1a1a', textAlign: 'center', margin: '0 0 56px', letterSpacing: '-0.5px' }}>What people say</h2>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <div style={{ background: '#fff', borderRadius: 20, padding: '52px 56px', border: '1px solid rgba(26,26,26,0.07)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 24, left: 40, fontFamily: SERIF, fontSize: 120, color: 'rgba(0,180,172,0.12)', lineHeight: 1, userSelect: 'none' }}>&ldquo;</div>
            <div style={{ position: 'relative', zIndex: 1, minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{
                fontFamily: SERIF, fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 400, color: '#1a1a1a', lineHeight: 1.7, margin: '0 0 32px', fontStyle: 'italic',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : `translateX(${animDir === 'right' ? '-30px' : '30px'})`,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease 0.1s' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,180,172,0.15)', display: 'grid', placeItems: 'center', border: '1px solid rgba(0,180,172,0.3)' }}>
                    <span style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 700, color: '#00b4ac' }}>{t.name[0]}</span>
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{t.name}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: SANS, fontSize: 12, color: '#8a8f9e' }}>{String(active + 1).padStart(2,'0')} / {String(testimonials.length).padStart(2,'0')}</span>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {testimonials.map((_, i) => (
                      <div key={i} onClick={() => { setAnimDir(i > active ? 'right' : 'left'); setVisible(false); setTimeout(() => { setActive(i); setVisible(true) }, 300) }} style={{ height: 6, width: i === active ? 24 : 6, borderRadius: 3, background: i === active ? '#00b4ac' : 'rgba(26,26,26,0.15)', transition: 'all 0.3s', cursor: 'pointer' }}/>
                    ))}
                  </div>
                  <button onClick={() => go('left')} style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(26,26,26,0.15)', background: 'transparent', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 7H3M6 10L3 7l3-3"/></svg>
                  </button>
                  <button onClick={() => go('right')} style={{ width: 38, height: 38, borderRadius: '50%', border: 'none', background: '#00b4ac', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const philRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = philRef.current?.querySelectorAll('.phil-card')
    if (!cards) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1'
          ;(e.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.15 })
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <main style={{ fontFamily: SANS }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '90vh', minHeight: 600, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/mg-1313.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)' }}/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: 'linear-gradient(to top, #ffffff, transparent)', zIndex: 2 }}/>
        <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, zIndex: 3, padding: '0 80px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Link href="/" style={{ fontFamily: SANS, fontSize: 11, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Home</Link>
              <div style={{ display: 'flex', gap: 3 }}>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }}/>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }}/>
              </div>
              <span style={{ fontFamily: SANS, fontSize: 11, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>About</span>
            </div>
            <h1 style={{ fontFamily: SERIF, fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 400, color: '#fff', margin: 0, letterSpacing: '-2px', lineHeight: 0.95 }}>
              Quality Custom<br/>
              <span style={{ fontWeight: 700 }}>Construction</span>
            </h1>
          </div>
          <p style={{ fontFamily: SANS, fontSize: 14, color: 'rgba(255,255,255,0.55)', maxWidth: 280, lineHeight: 1.7, textAlign: 'right', marginBottom: 8 }}>
            Three generations of building excellence in Canberra and the surrounds.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ background: '#ffffff' }}>
        <div style={{ height: 3, background: 'linear-gradient(to right, #00b4ac 30%, rgba(0,180,172,0.1))' }}/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 580 }}>

          {/* Left — clipped image */}
          <Reveal direction="left">
            <div style={{ position: 'relative', background: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px', height: '100%' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 420, aspectRatio: '4/5' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/image2-homev1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', clipPath: 'polygon(0 0, 100% 4%, 100% 96%, 0 100%)' }}/>
                <div style={{ position: 'absolute', inset: 0, border: '2px solid #00b4ac', clipPath: 'polygon(0 0, 100% 4%, 100% 96%, 0 100%)', pointerEvents: 'none', opacity: 0.4 }}/>
              </div>
              <div style={{ position: 'absolute', top: 32, left: 32 }}>
                <svg viewBox="0 0 120 120" width="90" height="90">
                  <defs>
                    <path id="circle-text-about" d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"/>
                  </defs>
                  <circle cx="60" cy="60" r="42" fill="rgba(0,0,0,0.85)" stroke="rgba(0,180,172,0.3)" strokeWidth="1"/>
                  <polygon points="60,45 70,60 50,60" fill="#00b4ac" opacity="0.9"/>
                  <text
                    fill="rgba(255,255,255,0.6)"
                    style={{ fontSize: '7.5px', fontFamily: 'Raleway, sans-serif', fontWeight: 600, letterSpacing: '2.5px' }}
                  >
                    <textPath href="#circle-text-about">CAPELLA HOMES • SINCE 2003 • </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </Reveal>

          {/* Right — content */}
          <Reveal direction="right" delay={0.1}>
            <div style={{ padding: '80px 72px 80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: SANS, fontSize: 12, color: '#8a8f9e' }}>[</span>
                <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: '#8a8f9e', letterSpacing: '2px', textTransform: 'uppercase' }}>About</span>
                <span style={{ fontFamily: SANS, fontSize: 12, color: '#8a8f9e' }}>]</span>
              </div>
              <div>
                <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3vw, 46px)', fontWeight: 400, color: 'rgba(26,26,26,0.5)', margin: 0, lineHeight: 1.1, letterSpacing: '-0.5px' }}>From Your Dreams</h2>
                <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3vw, 46px)', fontWeight: 700, color: '#1a1a1a', margin: 0, lineHeight: 1.1, letterSpacing: '-0.5px' }}>to Your Reality</h2>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: '#1a1a1a', opacity: 0.18 }}/>
                ))}
              </div>
              <p style={{ fontFamily: SANS, fontSize: 17, color: '#5a5f72', lineHeight: 1.9, margin: 0 }}>
                Construction is in our blood — there is nothing else we would choose to do. We come from a family of builders spanning three generations, with over 20 years of experience in the industry as Capella Homes. We do development, custom construction, renovation and extension projects unique to each customer&apos;s needs.
              </p>
              <a href="/projects" style={{ fontFamily: SANS, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#1a1a1a', color: '#fff', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', width: 'fit-content' }}>
                View Projects
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{ background: '#1a1a1a', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ fontFamily: SERIF, fontSize: 'clamp(100px, 18vw, 220px)', fontWeight: 700, color: 'rgba(255,255,255,0.02)', lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap' }}>Philosophy</div>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Reveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, justifyContent: 'center' }}>
                <span style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>[</span>
                <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>Capella Homes</span>
                <span style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>]</span>
              </div>
              <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 700, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.5px' }}>Philosophy</h2>
              <p style={{ fontFamily: SANS, fontSize: 15, color: 'rgba(255,255,255,0.4)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>
                We exist to solve construction and development problems for people and create beautiful outcomes in the local Canberra area.
              </p>
            </div>
          </Reveal>

          <div ref={philRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
            {philosophy.map((p, i) => (
              <div
                key={i}
                className="phil-card"
                style={{ opacity: 0, transform: 'translateY(40px)', transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}
              >
                <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                  <div className="phil-img" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s ease' }}/>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.55) 55%, rgba(26,26,26,0.15) 100%)' }}/>
                  <div className="phil-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#00b4ac', width: '30%', transition: 'width 0.4s ease' }}/>
                  <div style={{ position: 'absolute', inset: 0, padding: '32px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#00b4ac', marginBottom: 10 }}>{p.tag}</div>
                    <h3 style={{ fontFamily: SERIF, fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2 }}>{p.title}</h3>
                  </div>
                </div>
                <div style={{ background: '#2a2a2a', padding: '24px 32px' }}>
                  <p style={{ fontFamily: SANS, fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.phil-card:hover .phil-img { transform: scale(1.06); } .phil-card:hover .phil-line { width: 100% !important; }`}</style>
      </section>

      <TestimonialsSlider testimonials={testimonials} />

      <Footer />
    </main>
  )
}