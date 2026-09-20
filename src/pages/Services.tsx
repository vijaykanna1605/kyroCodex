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
              Ideas → Design → Develop → Launch
            </p>
            <h1>
              What we can take off <span className="gradient-text">your plate</span>
            </h1>
            <p>
              Pick a single workstream or a full build. Every engagement includes a written scope,
              weekly updates, and a launch checklist.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Start Your Project →
              </Link>
              <Link className="btn btn-link" to="/about">
                About KyroCodeX
                <span className="btn-circle" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal from="up" delay={80} className="service-rail service-rail-page">
            {services.map((service) => (
              <article className="service-rail-item" key={service.slug}>
                <div className={`icon icon-${service.icon}`}>
                  <Icon name={service.icon as 'code' | 'layers' | 'pen' | 'cloud'} />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>

        <div className="wrap" style={{ marginTop: 56 }}>
          <Reveal from="left" className="section-head">
            <div>
              <p className="kicker">What you get</p>
              <h2>Services built for real delivery</h2>
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
                <p>{service.details}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="wrap" style={{ marginTop: 72 }}>
          <Reveal from="right" className="section-head">
            <div>
              <p className="kicker">How we work</p>
              <h2>A path from brief to production</h2>
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
          <p className="hero-tagline">— Your Idea + Our Expertise = Real Results —</p>
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
