import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState<'down' | 'up'>('down')

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const { scrollY, innerHeight } = window
      const maxScroll = Math.max(document.documentElement.scrollHeight - innerHeight, 1)
      const nextProgress = (scrollY / maxScroll) * 100

      setDirection(scrollY >= lastY ? 'down' : 'up')
      lastY = scrollY
      setProgress(Math.min(Math.max(nextProgress, 0), 100))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page">
      <div className={`scroll-indicator ${direction}`} aria-hidden="true">
        <span className="scroll-indicator-bar" style={{ width: `${progress}%` }} />
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <Logo />
            KyroCodeX
          </Link>
          <nav className={`nav ${open ? 'open' : ''}`}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link className="header-cta" to="/contact">
            Book a strategy call →
          </Link>
          <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)}>
            Menu
          </button>
        </div>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="brand">
            <Logo />
            KyroCodeX
          </div>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="wrap">
          <p>© {new Date().getFullYear()} KyroCodeX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
