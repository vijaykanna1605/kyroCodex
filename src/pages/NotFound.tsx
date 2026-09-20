import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

export function NotFound() {
  return (
    <main className="section inner-hero">
      <div className="wrap">
        <Reveal from="left">
          <p className="kicker">404</p>
          <h1>This page is not in the build</h1>
          <p>The link is missing or out of date. Head back to the homepage or browse our services.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost" to="/services">
              Services
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
