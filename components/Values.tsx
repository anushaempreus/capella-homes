'use client'
import Reveal from './Reveal'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

const values = [
  { num: '01', title: 'Experience', desc: 'Development & construction expertise across three generations.' },
  { num: '02', title: 'Problem Solving', desc: 'Extraordinary solutions to complex construction challenges.' },
  { num: '03', title: 'Craftsmanship', desc: 'Commitment to beautifully crafted spaces and outcomes.' },
  { num: '04', title: 'Communication', desc: 'Listening, clarity and trust throughout every project.' },
  { num: '05', title: 'Relationships', desc: 'Trusted network of quality contractors and suppliers.' },
]

export default function Values() {
  return (
    <section id="values" style={{ background: '#f9f7f4', position: 'relative', overflow: 'hidden' }}>

      {/* Top rule */}
      <div style={{ height: 1, background: 'rgba(28,33,48,0.08)', margin: '0 80px' }}/>

      <div style={{ padding: '80px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

        {/* LEFT — sticky-style heading */}
        <Reveal direction="left">
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ fontFamily: SERIF, fontSize: 'clamp(80px, 12vw, 130px)', fontWeight: 700, color: 'rgba(28,33,48,0.05)', lineHeight: 0.85, letterSpacing: '-4px', userSelect: 'none', marginBottom: -16 }}>
              Values
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 28, height: 2, background: '#4dd9c0', borderRadius: 1 }}/>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#4dd9c0' }}>Our values</span>
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, color: '#1c2130', margin: '0 0 20px', lineHeight: 1.1 }}>
              What Capella<br/>Homes brings<br/>
              <span style={{ fontWeight: 300, color: 'rgba(28,33,48,0.4)' }}>to you</span>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 14, color: '#8a8f9e', lineHeight: 1.75, margin: 0 }}>
              The principles that guide every build, every decision, and every relationship we form.
            </p>

            {/* Circle image */}
            <div style={{ marginTop: 40, width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 16px 48px rgba(28,33,48,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — numbered list, editorial style */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 40 }}>
          {values.map((v, i) => (
            <Reveal key={i} direction="right" delay={i * 0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, padding: '28px 0', borderBottom: '1px solid rgba(28,33,48,0.08)', alignItems: 'start' }}>
                {/* Large number */}
                <div style={{ fontFamily: SERIF, fontSize: 48, fontWeight: 700, color: '#4dd9c0', lineHeight: 1, opacity: 0.5 }}>{v.num}</div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, color: '#1c2130', margin: '0 0 8px', lineHeight: 1.1 }}>{v.title}</h3>
                  <p style={{ fontFamily: SANS, fontSize: 14, color: '#8a8f9e', margin: 0, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}