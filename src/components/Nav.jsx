import { useEffect, useRef, useState } from 'react'
import { profile } from '../content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
]

/** Above this the links sit inline and the toggle is gone — keep in step with
 *  the 40em breakpoint in App.css. */
const INLINE_LINKS = '(min-width: 40em)'

const MENU_ID = 'nav-menu'

function Nav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const close = () => setOpen(false)

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      close()
      toggleRef.current?.focus()
    }

    // A tap anywhere else dismisses the panel, the way any dropdown should.
    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) close()
    }

    // Rotating to landscape can cross the breakpoint while the panel is open;
    // without this the links reflow inline but `is-open` lingers behind them.
    const query = window.matchMedia(INLINE_LINKS)
    const onBreakpoint = (event) => {
      if (event.matches) close()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    query.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      query.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  return (
    <nav ref={navRef} className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
      <div className="shell nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={MENU_ID}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>

        <div className="nav-panel" id={MENU_ID}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
