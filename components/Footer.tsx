const SERIF = "var(--font-serif, 'Cormorant Garamond', serif)"
const SANS  = "var(--font-sans, 'DM Sans', sans-serif)"

export default function Footer() {
  return (
    <footer style={{ background: '#0a0e1a', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: SANS }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, padding: '72px 300px 56px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <polygon points="20,4 36,32 4,32" fill="none" stroke="#4dd9c0" strokeWidth="2.5" strokeLinejoin="round"/>
              <polygon points="20,10 30,28 10,28" fill="rgba(77,217,192,0.15)" stroke="#4dd9c0" strokeWidth="1" strokeLinejoin="round"/>
            </svg>
            <div>
              <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '2px' }}>CAPELLA</div>
              <div style={{ fontFamily: SANS, fontSize: 11, color: '#4dd9c0', letterSpacing: '2px' }}>HOMES</div>
            </div>
          </div>
          <p style={{ fontFamily: SANS, fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, maxWidth: 380, margin: 0 }}>
            Capella Homes, with a 20-year legacy across three generations, specialises in custom homes, renovations, and extensions in Canberra and the surrounds, ensuring unmatched excellence and integrity in every project.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { href: 'https://www.facebook.com/profile.php?id=61550950030102', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
              { href: 'https://www.instagram.com/capellahomesact/',              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h4 style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#4dd9c0', margin: '0 0 20px' }}>Contacts</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { href: 'mailto:info@capellahomes.com.au', text: 'info@capellahomes.com.au', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              { href: 'tel:+61419989799',                text: '0419 989 799',             icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4dd9c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.2 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg> },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {c.icon}
                <a href={c.href} style={{ fontFamily: SANS, fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{c.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 80px' }}>
        <p style={{ fontFamily: SANS, fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
          Copyright © 2024 Capella Homes | Managed by{' '}
          <a href="https://www.empreus.com.au" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Empreus IT Support</a>
          . All Rights Reserved.{' '}
          <a href="#" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy Policy</a>
        </p>
        <a href="#" style={{ fontFamily: SANS, display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </a>
      </div>
    </footer>
  )
}