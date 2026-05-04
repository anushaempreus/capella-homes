import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}