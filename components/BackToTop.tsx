'use client'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop || document.body.scrollTop
      const scrollHeight = h.scrollHeight - h.clientHeight
      setVisible(scrollTop > 480)
      setPct(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const r = 21
  const circumference = 2 * Math.PI * r

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`back-to-top${visible ? ' show' : ''}`}
      style={{
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0,180,172,0.3)',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      }}
    >
      <svg width="52" height="52" viewBox="0 0 52 52" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
        <circle cx="26" cy="26" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        <circle
          cx="26" cy="26" r={r} fill="none" stroke="#00b4ac" strokeWidth="2" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (pct / 100) * circumference}
          style={{ transition: 'stroke-dashoffset 0.15s linear' }}
        />
      </svg>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b4ac" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
