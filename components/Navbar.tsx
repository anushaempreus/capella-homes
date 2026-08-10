'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SANS = "var(--font-sans, 'Raleway', sans-serif)"

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
        background: scrolled ? 'rgba(26,26,26,0.98)' : 'rgba(26,26,26,0.88)',
        borderBottom: '1px solid rgba(0,180,172,0.12)',
        fontFamily: SANS,
      }}
    >
      <Link href="/" className="flex items-center nav-logo" style={{ transition: 'transform 0.3s ease' }}>
        <Image src="/brand/logo-white.png" alt="Capella Homes" width={126} height={34} priority style={{ height: 34, width: 126 }} />
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {['HOME','ABOUT','SERVICES','PROJECTS','CONTACT'].map((item) => (
          <Link
            key={item}
            href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'PROJECTS' ? '/projects' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
            style={{ fontFamily: SANS, color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: '1.5px', textDecoration: 'none' }}
            className="nav-link hover:text-[#00b4ac] transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white hover:text-[#00b4ac] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button aria-label="Menu" className="text-white hover:text-[#00b4ac] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" style={{ transformOrigin: 'center', transition: 'transform 0.3s ease, opacity 0.3s ease', transform: menuOpen ? 'translate(0, 6px) rotate(45deg)' : 'none' }}/>
            <line x1="3" y1="12" x2="21" y2="12" style={{ transition: 'opacity 0.2s ease', opacity: menuOpen ? 0 : 1 }}/>
            <line x1="3" y1="18" x2="21" y2="18" style={{ transformOrigin: 'center', transition: 'transform 0.3s ease, opacity 0.3s ease', transform: menuOpen ? 'translate(0, -6px) rotate(-45deg)' : 'none' }}/>
          </svg>
        </button>
      </div>

      <div
        className="absolute top-[70px] left-0 right-0 bg-[#1a1a1a] border-t border-white/10 md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? 320 : 0,
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
        }}
      >
        <div className="py-4">
          {['HOME','ABOUT','SERVICES','PROJECTS','CONTACT'].map((item, i) => (
            <Link
              key={item}
              href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : item === 'SERVICES' ? '/services' : item === 'PROJECTS' ? '/projects' : item === 'CONTACT' ? '/contact' : `#${item.toLowerCase()}`}
              style={{
                fontFamily: SANS, display: 'block', padding: '12px 32px', color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: '1.5px', textDecoration: 'none',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-12px)',
                transition: `opacity 0.35s ease ${i * 0.05}s, transform 0.35s ease ${i * 0.05}s`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}