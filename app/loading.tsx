import Image from 'next/image'

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
      }}
    >
      <div style={{ animation: 'loaderPulse 1.6s ease-in-out infinite' }}>
        <Image src="/brand/logo-white.png" alt="Capella Homes" width={148} height={40} style={{ height: 40, width: 148 }} priority />
      </div>
      <div style={{ width: 140, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: '40%', height: '100%', background: '#00b4ac', animation: 'loaderBar 1.2s ease-in-out infinite' }} />
      </div>
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.97); }
        }
        @keyframes loaderBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  )
}
