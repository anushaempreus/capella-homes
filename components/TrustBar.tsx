'use client'
import Counter from './Counter'

const SANS = "var(--font-sans, 'Raleway', sans-serif)"
const SERIF = "var(--font-serif, 'Titillium Web', serif)"

const stats = [
  { n: '20+', l: 'Years experience' },
  { n: '3', l: 'Generations of builders' },
  { n: '4', l: 'Signature projects' },
  { n: '100', l: '% Canberra owned', suffix: '%' },
]

export default function TrustBar() {
  return (
    <section style={{ background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '30px 16px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
          >
            <div style={{ fontFamily: SERIF, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#00b4ac', lineHeight: 1 }}>
              <Counter value={s.n} />
            </div>
            <div style={{ fontFamily: SANS, fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 8, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
