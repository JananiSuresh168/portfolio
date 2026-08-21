import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/** No observer, no transition — show the element as-is. */
const skipMotion = () =>
  typeof window === 'undefined' ||
  typeof window.matchMedia !== 'function' ||
  typeof IntersectionObserver === 'undefined' ||
  window.matchMedia(REDUCED_MOTION).matches

/* ── Shared observer ───────────────────────────────────────────────────────
   Every Reveal on the page shares one IntersectionObserver. There are several
   dozen of them, they all want identical options, and one observer is
   meaningfully less work for a phone than one per element.                   */

/** Elements still waiting to be revealed, mapped to their reveal callback. */
const pending = new Map()

let observer = null
let sweepQueued = false

/** @param instant true when the element is already behind the reader. */
function reveal(el, instant) {
  const onReveal = pending.get(el)
  if (!onReveal) return

  pending.delete(el)
  observer.unobserve(el)
  if (pending.size === 0) window.removeEventListener('scroll', onScroll)

  onReveal(instant)
}

/* A fast flick can carry an element from below the fold to above it between
   two observer samples, so it never reports as intersecting and would sit at
   opacity 0 forever. Sweep for anything the viewport has already passed and
   show it outright — no fade, since the reader is looking further down. */
function sweep() {
  sweepQueued = false
  for (const el of [...pending.keys()]) {
    if (el.getBoundingClientRect().bottom < 0) reveal(el, true)
  }
}

function onScroll() {
  if (sweepQueued) return
  sweepQueued = true
  requestAnimationFrame(sweep)
}

function getObserver() {
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        // Partly scrolled past already: skip the animation rather than fade in
        // something the reader has moved beyond.
        reveal(entry.target, entry.boundingClientRect.top < 0)
      }
    },
    /* A ratio threshold makes tall blocks — a five-bullet role, say — wait
       until a good chunk of them is on screen, which is exactly what reads as
       lag on a small viewport. Fire on the first sliver instead, held back a
       little by the bottom inset so nothing pops in mid-fade. */
    { threshold: 0, rootMargin: '0px 0px -8% 0px' },
  )

  return observer
}

function observe(el, onReveal) {
  if (pending.size === 0) window.addEventListener('scroll', onScroll, { passive: true })

  pending.set(el, onReveal)
  getObserver().observe(el)

  return () => {
    if (!pending.has(el)) return
    pending.delete(el)
    observer.unobserve(el)
    if (pending.size === 0) window.removeEventListener('scroll', onScroll)
  }
}

/**
 * Fades its content up as it first scrolls into view, then stops observing —
 * the reveal happens once per element, never on every pass. `delay` is handed
 * to CSS as a custom property so the stylesheet can scale the stagger down on
 * small screens instead of hard-coding it here.
 */
function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...props }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(() =>
    skipMotion() ? { visible: true, instant: true } : { visible: false, instant: false },
  )

  useEffect(() => {
    const el = ref.current
    if (!el || shown.visible) return

    return observe(el, (instant) => setShown({ visible: true, instant }))
  }, [shown.visible])

  const classes = `reveal${shown.visible ? ' is-visible' : ''}${
    shown.instant ? ' is-instant' : ''
  }${className ? ` ${className}` : ''}`

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
