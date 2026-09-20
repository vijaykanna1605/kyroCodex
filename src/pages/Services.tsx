import { Link } from 'react-router-dom'
import { Icon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { processSteps, services } from '../data/content'

export function Services() {
  return (
    <main className="page-landing">
      <section className="section inner-hero">
        <div className="wrap">
          <Reveal from="left" className="page-intro">
            <p className="process-pill">
              <span className="process-spark" aria-hidden="true" />
              Strategy • Design • Build • Support
            </p>
            <h1>
              We help teams <span className="gradient-text">launch and scale</span> better digital
              experiences.
            </h1>
            <p>
              From websites and product interfaces to cloud-ready web apps and ongoing support,
              we build systems that look sharp, work smoothly, and stay reliable after launch.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Start Your Project →
              </Link>
              <Link className="btn btn-link" to="/about">
                Learn more
                <span className="btn-circle" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

        </div>

        <div className="wrap" style={{ marginTop: 56 }}>
          <Reveal from="left" className="section-head">
            <div>
              <p className="kicker">What we deliver</p>
              <h2>Sharp execution across design, product, and infrastructure.</h2>
            </div>
          </Reveal>
          <div className="cards-4">
            {services.map((service, index) => (
              <Reveal
                as="article"
                className="card service-card"
                key={service.slug}
                from={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 90}
              >
                <div className={`icon icon-${service.icon}`}>
                  <Icon name={service.icon as 'code' | 'layers' | 'pen' | 'cloud'} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="wrap" style={{ marginTop: 72 }}>
          <Reveal from="right" className="section-head">
            <div>
              <p className="kicker">How we work</p>
              <h2>A process built to move from idea to launch with less friction.</h2>
            </div>
          </Reveal>
          <div className="cards-4">
            {processSteps.map((step, index) => (
              <Reveal
                as="article"
                className="card process-card"
                key={step.title}
                from={index % 2 === 0 ? 'up' : 'down'}
                delay={index * 90}
              >
                <p className="process-step">0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="hero-tagline">— Driven by clarity, designed for growth —</p>
          <Reveal from="up" delay={80} style={{ marginTop: 28, textAlign: 'center' }}>
            <Link className="btn btn-primary" to="/contact">
              Request a proposal →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
