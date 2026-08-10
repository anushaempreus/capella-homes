'use client'
import { useEffect, useRef, useState, CSSProperties } from 'react'

interface CounterProps {
  value: string
  duration?: number
  style?: CSSProperties
  className?: string
}

export default function Counter({ value, duration = 1400, style, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState<string>(value.replace(/[0-9]/g, '0'))
  const started = useRef(false)

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    const el = ref.current
    if (!el || target === null) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(eased * target) + suffix)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {target === null ? value : display}
    </span>
  )
}
