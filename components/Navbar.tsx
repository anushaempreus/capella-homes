'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[70px] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,18,35,0.98)' : 'rgba(10,18,35,0.88)',
        borderBottom: '1px solid rgba(77,217,192,0.12)',
        fontFamily: SANS,
      }}
    >
      <Link href="/" className="flex items-center gap-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <polygon points="20,4 36,32 4,32" fill="none" stroke="#4dd9c0" strokeWidth="2.5" strokeLinejoin="round"/>
          <polygon points="20,10 30,28 10,28" fill="rgba(77,217,192,0.15)" stroke="#4dd9c0" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
        <div className="flex flex-col leading-tight">
          <span style={{ fontFamily: SANS, color: '#fff', fontWeight: 600, fontSize: 13, letterSpacing: '2px' }}>CAPELLA</span>
          <span style={{ fontFamily: SANS, color: '#4dd9c0', fontSize: 11, letterSpacing: '2px' }}>HOMES</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {['HOME','ABOUT','SERVICES','PROJECTS','CONTACT'].map((item) => (
          <Link
            key={item}
            href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'PROJECTS' ? '/projects' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
            style={{ fontFamily: SANS, color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: '1.5px', textDecoration: 'none' }}
            className="hover:text-[#4dd9c0] transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white hover:text-[#4dd9c0] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button className="text-white hover:text-[#4dd9c0] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-[#0a1223] border-t border-white/10 py-4 md:hidden">
          {['HOME','ABOUT','SERVICES','PROJECTS','CONTACT'].map((item) => (
            <Link
              key={item}
              href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'PROJECTS' ? '/projects' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
              style={{ fontFamily: SANS, display: 'block', padding: '12px 32px', color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: '1.5px', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}