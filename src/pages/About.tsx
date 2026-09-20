import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { stats, values } from '../data/content'

export function About() {
  return (
    <main className="page-landing">
      <section className="section inner-hero">
        <div className="wrap">
          <Reveal from="left" className="page-intro">
            <p className="process-pill">
              <span className="process-spark" aria-hidden="true" />
              Strategy • Product • Design • Delivery
            </p>
            <h1>
              We build digital experiences that feel <span className="gradient-text">clear</span>,
              useful, and built to last.
            </h1>
            <p>
              KyroCodeX helps founders, businesses, and growing teams turn ideas into websites,
              product interfaces, and cloud-backed web apps that are easier to use and easier to
              trust.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Start Your Project →
              </Link>
              <Link className="btn btn-link" to="/services">
                View services
                <span className="btn-circle" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="wrap" style={{ marginTop: 56 }}>
          <Reveal from="left" className="section-head">
            <div>
              <p className="kicker">What we value</p>
              <h2>We focus on the full product journey from strategy to support.</h2>
            </div>
          </Reveal>

          <ul className="checklist">
            {values.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="wrap" style={{ marginTop: 72 }}>
          <Reveal from="up" className="section-head">
            <div>
              <p className="kicker">Performance at a glance</p>
              <h2>Built for momentum, reliability, and long-term growth.</h2>
            </div>
          </Reveal>
          <div className="stats">
            {stats.map((stat, index) => {
              const directions = ['up', 'down', 'left', 'right'] as const
              return (
                <Reveal
                  className="stat"
                  key={stat.label}
                  from={directions[index % directions.length]}
                  delay={index * 120}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </Reveal>
              )
            })}
          </div>
          <p className="hero-tagline">— Built to look premium and perform with purpose —</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal from="up" className="cta">
            <p className="kicker">Let’s build what’s next</p>
            <h2>Have a product, website, or growth idea in motion?</h2>
            <p>We can help shape the experience, build it cleanly, and support it after launch.</p>
            <Link className="btn btn-primary" to="/contact">
              Start Your Project →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
