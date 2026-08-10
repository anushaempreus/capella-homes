'use client'
import { useRef, ReactNode, CSSProperties, MouseEvent as ReactMouseEvent } from 'react'

export default function Spotlight({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: ReactMouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sy', `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`spotlight-wrap ${className ?? ''}`.trim()} style={style}>
      {children}
    </div>
  )
}
