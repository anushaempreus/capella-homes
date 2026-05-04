const projs = [
  { name: 'Pearce',        loc: 'Pearce, ACT',   accent: '#c49a45' },
  { name: 'Charity House', loc: 'Canberra, ACT', accent: '#35997a' },
  { name: "O'Connor",      loc: "O'Connor, ACT", accent: '#AFA9EC' },
  { name: 'Garran',        loc: 'Garran, ACT',   accent: '#EF9F27' },
]

export default function Projects() {
  return (
    <section id="projects" className="px-14 py-24" style={{ background: '#1c2130' }}>
      <p className="text-xs font-bold tracking-[2.5px] uppercase mb-2" style={{ color: '#c49a45' }}>
        Portfolio
      </p>
      <h2
        className="text-4xl font-bold mb-10"
        style={{ fontFamily: 'Playfair Display, serif', color: '#fff', letterSpacing: '-0.5px' }}
      >
        Recent <em style={{ color: '#c49a45' }}>projects</em>
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {projs.map(p => (
          <div
            key={p.name}
            className="rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer"
            style={{ background: '#252c3d', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="relative h-52" style={{ background: '#1a2035' }}>
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: p.accent }}
              />
              <div
                className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#1c2130', letterSpacing: '0.5px' }}
              >
                Residential
              </div>
            </div>
            <div className="px-5 py-4">
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {p.name}
              </h3>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.loc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}