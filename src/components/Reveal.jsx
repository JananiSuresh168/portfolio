import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/** No observer, no transition — show the element as-is. */
const skipMotion = () =>
  typeof window === 'undefined' ||
  typeof window.matchMedia !== 'function' ||
  typeof IntersectionObserver === 'undefined' ||
  window.matchMedia(REDUCED_MOTION).matches

/**
 * Fades its content up ~20px when it first scrolls into view, then stops
 * observing — the reveal happens once per element, never on every pass.
 */
function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(skipMotion)

  useEffect(() => {
    const el = ref.current
    if (!el || skipMotion()) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
