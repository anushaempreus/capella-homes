'use client'
import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

type Direction = 'up' | 'left' | 'right' | 'fade'

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  style?: CSSProperties
  className?: string
  threshold?: number
}

const initial: Record<Direction, string> = {
  up:    'translateY(40px)',
  left:  'translateX(-40px)',
  right: 'translateX(40px)',
  fade:  'translateY(0px)',
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  style,
  className,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0) translateX(0)'
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initial[direction],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}