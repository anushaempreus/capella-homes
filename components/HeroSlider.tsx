'use client'
import { useState, useEffect, useCallback, useRef, CSSProperties, MouseEvent as ReactMouseEvent } from 'react'
import Magnetic from './Magnetic'
import Counter from './Counter'

const SERIF = "var(--font-serif, 'Titillium Web', serif)"
const SANS  = "var(--font-sans, 'Raleway', sans-serif)"
const ACCENT  = '#ffffff'
const ACCENT2 = '#c4c4c4'
const BTN     = '#00b4ac'
const DARK    = '#1a1a1a'

const slides = [
  {
    id: 0, bgWord: 'QUALITY', eyebrow: 'Residential',
    heading: ['Highest', 'Quality'],
    body: 'For you and your family, we create construction solutions for growing families including building new homes, extending and expanding. Our focus is producing beautiful results that improve your living conditions and enhance your lifestyle.',
    cta: 'View Residential Projects', ctaHref: '#projects',
    image: '/images/hp1.gif',
  },
  {
    id: 1, bgWord: 'HIGHEND', eyebrow: 'Commercial',
    heading: ['Business', 'Solutions'],
    body: 'We provide construction solutions to growing communities and businesses including extending the life of buildings, expanding layouts, and creating thriving, healthy environments that enhance businesses and communities.',
    cta: 'View Commercial Projects', ctaHref: '#projects',
    image: '/images/hp2.gif',
  },
  {
    id: 2, bgWord: 'UNIQUE', eyebrow: 'Custom Builds',
    heading: ['Out of the', 'Ordinary'],
    body: 'Want to build something beyond the standard? We provide unique and creative solutions including granny flats, passive houses, sheds of all sizes, studios, and temporary transportable dwellings.',
    cta: 'View Custom Projects', ctaHref: '#projects',
    image: '/images/hp3.gif',
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  const onMouseMove = useCallback((e: ReactMouseEvent<HTMLElement>) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--px', px.toFixed(4))
    el.style.setProperty('--py', py.toFixed(4))
  }, [])

  const goTo = useCallback((idx: number) => {
    if (animating || idx === active) return
    setAnimating(true)
    setTimeout(() => { setActive(idx); setAnimating(false) }, 700)
  }, [active, animating])

  const prev = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo])
  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo])

  useEffect(() => { const t = setInterval(next, 8000); return () => clearInterval(t) }, [next])

  useEffect(() => {
    slides.forEach((s, i) => {
      const img = new window.Image()
      img.src = s.image
      img.onload = () => setLoaded(p => { const n = [...p]; n[i] = true; return n })
    })
  }, [])

  const slide = slides[active]

  return (
    <section ref={sectionRef} onMouseMove={onMouseMove} className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 700, background: DARK, '--px': 0, '--py': 0 } as CSSProperties}>

      {slides.map((s, i) => (
        <div key={s.id} className="absolute inset-0 z-0" style={{
          opacity: i === active ? (animating ? 0 : 1) : 0,
          backgroundImage: loaded[i] ? `url(${s.image})` : 'none',
          backgroundSize: 'cover', backgroundPosition: 'center',
          transform: i === active ? 'scale(1.08) translate(calc(var(--px) * -22px), calc(var(--py) * -22px))' : 'scale(1)',
          transition: 'opacity 0.8s ease, transform 10s ease',
        }}/>
      ))}

      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.12) 100%)' }}/>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-48" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}/>
      <div className="absolute top-0 left-0 right-0 z-10 h-32" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)' }}/>
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '100px 100px', transform: 'translate(calc(var(--px) * 14px), calc(var(--py) * 14px))', transition: 'transform 0.3s ease-out' }}/>

      <div className="absolute top-0 bottom-0 z-20 pointer-events-none" style={{ left: 88, width: 1, background: `linear-gradient(to bottom, transparent, ${ACCENT2} 30%, ${ACCENT2} 70%, transparent)`, opacity: 0.35 }}/>

      {/* Social sidebar */}
      <div className="absolute left-0 top-0 bottom-0 z-30 flex flex-col" style={{ width: 64 }}>
        <a href="https://www.facebook.com/profile.php?id=61550950030102" target="_blank" rel="noopener noreferrer"
          className="social-sidebar flex items-center justify-center font-bold tracking-[2px] transition-all hover:brightness-125"
          style={{ background: 'rgba(0,0,0,0.75)', borderRight: '1px solid rgba(255,255,255,0.1)', flex: 1, fontSize: 10, color: '#fff', backdropFilter: 'blur(8px)', fontFamily: SANS }}>
          FACEBOOK
        </a>
        <div style={{ height: 1, background: 'rgba(0,180,172,0.4)' }}/>
        <a href="https://www.instagram.com/capellahomesact/" target="_blank" rel="noopener noreferrer"
          className="social-sidebar flex items-center justify-center font-bold tracking-[2px] transition-all hover:brightness-125"
          style={{ background: 'rgba(0,0,0,0.75)', borderRight: '1px solid rgba(255,255,255,0.1)', flex: 1, fontSize: 10, color: '#fff', backdropFilter: 'blur(8px)', fontFamily: SANS }}>
          INSTAGRAM
        </a>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center"
        style={{ paddingLeft: 130, paddingRight: 80, paddingBottom: 80, opacity: animating ? 0 : 1, transition: 'opacity 0.6s ease' }}>

        <div className="flex items-center gap-4 mb-8">
          <div style={{ width: 40, height: 1, background: ACCENT }}/>
          <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: ACCENT }}>{slide.eyebrow}</span>
          <div style={{ width: 20, height: 1, background: 'rgba(255,255,255,0.15)' }}/>
        </div>

        <h1 className="mb-8" style={{ maxWidth: 700, margin: '0 0 32px', fontWeight: 'inherit' }}>
          <span style={{ display: 'block', fontFamily: SERIF, fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 300, color: 'rgba(255,255,255,0.85)', letterSpacing: '-1px', lineHeight: 1.0 }}>
            {slide.heading[0]}
          </span>
          <span style={{ display: 'block', fontFamily: SERIF, fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 700, color: '#fff', letterSpacing: '-1px', lineHeight: 1.0 }}>
            {slide.heading[1]}
          </span>
        </h1>

        <div className="flex items-center gap-3 mb-7">
          <div style={{ width: 48, height: 1.5, background: ACCENT, borderRadius: 1, opacity: 0.7 }}/>
          <div style={{ width: 6, height: 6, borderRadius: '50%', border: `1px solid ${ACCENT}`, opacity: 0.5 }}/>
        </div>

        <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', maxWidth: 480, marginBottom: 44 }}>
          {slide.body}
        </p>

        <div className="flex items-center gap-7">
          <Magnetic strength={0.25}>
            <a href={slide.ctaHref}
              className="shine inline-flex items-center gap-3 transition-all duration-300 hover:brightness-110 hover:gap-5"
              style={{ fontFamily: SANS, background: BTN, color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 600, fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}>
              {slide.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
            </a>
          </Magnetic>
          <a href="#about" className="inline-flex items-center gap-2 transition-all group"
            style={{ fontFamily: SANS, fontSize: 12, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
            <span className="inline-block h-px transition-all duration-300 group-hover:w-8 group-hover:opacity-100" style={{ width: 20, background: 'currentColor', opacity: 0.5 }}/>
            <span className="group-hover:text-white transition-colors">Discover more</span>
          </a>
        </div>
      </div>

      {/* Feature cards */}
      <div className="absolute right-14 top-1/2 z-30 hidden lg:flex flex-col gap-3"
        style={{ opacity: animating ? 0 : 1, transform: 'translateY(calc(-50% + var(--py) * -16px)) translateX(calc(var(--px) * -10px))', transition: 'opacity 0.6s ease, transform 0.3s ease-out' }}>
        {[{ num: '20+', label: 'Years Experience' }, { num: '3', label: 'Generations' }, { num: 'ACT', label: 'Canberra Based' }].map((item, i) => (
          <div key={i} className="hero-feature-card" style={{ width: 110, height: 100, background: 'rgba(0,0,0,0.55)', border: `1px solid rgba(255,255,255,${i === 0 ? '0.35' : '0.12'})`, borderTop: i === 0 ? `2px solid ${ACCENT}` : `1px solid rgba(255,255,255,0.12)`, borderRadius: 14, backdropFilter: 'blur(14px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
            <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 700, color: ACCENT, lineHeight: 1 }}><Counter value={item.num} /></div>
            <div style={{ fontFamily: SANS, fontSize: 10, color: ACCENT2, marginTop: 6, letterSpacing: '0.5px', lineHeight: 1.4, opacity: 0.7 }}>{item.label}</div>
          </div>
        ))}
      </div>
      <style>{`.hero-feature-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.5) !important; }`}</style>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-40 flex items-center justify-between"
        style={{ padding: '16px 28px 16px 130px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-5">
          <span style={{ fontFamily: SERIF, fontSize: 22, color: ACCENT, fontWeight: 700 }}>0{active + 1}</span>
          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{ width: i === active ? 32 : 8, height: 3, borderRadius: 2, background: i === active ? ACCENT : 'rgba(255,255,255,0.18)', transition: 'all 0.4s ease', border: 'none', cursor: 'pointer', padding: 0 }} aria-label={`Slide ${i + 1}`}/>
            ))}
          </div>
          <span style={{ fontFamily: SERIF, fontSize: 22, color: 'rgba(255,255,255,0.18)', fontWeight: 400 }}>0{slides.length}</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ fontFamily: SANS, color: i === active ? ACCENT : 'rgba(255,255,255,0.22)', background: 'none', border: 'none', borderBottom: i === active ? `1px solid ${ACCENT}` : '1px solid transparent', cursor: 'pointer', padding: '0 0 3px', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', transition: 'all 0.3s' }}>{s.eyebrow}</button>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'all 0.2s' }} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={next} style={{ width: 42, height: 42, borderRadius: 10, background: BTN, border: `1px solid ${BTN}`, color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'all 0.2s' }} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="absolute z-40 flex flex-col items-center gap-2" style={{ bottom: 90, left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, transparent, ${ACCENT2})`, opacity: 0.5 }}/>
        <span style={{ fontFamily: SANS, fontSize: 9, letterSpacing: '2.5px', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>Scroll</span>
      </div>
    </section>
  )
}