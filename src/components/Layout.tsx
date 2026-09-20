import { useState } from 'react'
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

  return (
    <div className="page">
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
            Let’s Build Together →
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
