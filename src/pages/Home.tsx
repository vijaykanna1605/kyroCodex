import { Link } from 'react-router-dom'
import { HeroDevices } from '../components/HeroDevices'
import { Icon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { services, stats, values } from '../data/content'

export function Home() {
  return (
    <main className="home-landing">
      <section className="section inner-hero">
        <div className="wrap hero-grid">
          <Reveal from="left" className="hero-copy page-intro">
            <p className="process-pill">
              <span className="process-spark" aria-hidden="true" />
              Web apps • Websites • Cloud • UX
            </p>
            <h1>
              Design and build the <span className="gradient-text">digital product</span> your brand
              deserves.
            </h1>
            <p>
              KyroCodeX creates premium websites, web apps, UI/UX systems, and cloud-powered
              experiences for businesses that want better performance, sharper design, and stronger
              growth.
            </p>
            <p>
              We combine strategy, product thinking, interface design, and technical delivery to help
              teams launch faster and support what they build long after go-live.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Start Your Project →
              </Link>
              <Link className="btn btn-link" to="/services">
                Explore Services
                <span className="btn-circle" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <HeroDevices />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal from="left">
              <p className="kicker">Why teams choose us</p>
              <h2>
                Built for <span className="gradient-text">clarity, speed, and momentum</span>.
              </h2>
              <p>
                Whether you need a sharper website, a high-performance web app, or a partner to
                support your operational stack, we blend design and engineering to create digital
                experiences that feel premium and work hard.
              </p>
            </Reveal>
            <ul className="checklist">
              {values.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal from="right" delay={140} className="card goal-card">
            <p className="kicker">Built for growth</p>
            <h3>
              Strategy, design, and <span className="gradient-text">support</span> in one partner.
            </h3>
            <p>
              We help businesses turn ambition into useful digital experiences that look great,
              feel intuitive, and scale without friction.
            </p>
            <Link className="btn btn-primary" to="/contact" style={{ marginTop: 18 }}>
              Book a discovery call →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal from="up" className="section-head">
            <div>
              <p className="kicker">Core capabilities</p>
              <h2>Everything you need to ship better experiences.</h2>
            </div>
          </Reveal>
          <div className="cards-4">
            {services.map((service, index) => (
              <Reveal
                as="article"
                className="card service-card"
                key={service.slug}
                from={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 100}
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
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal from="up" className="section-head stats-head">
            <div>
              <p className="kicker">Performance at a glance</p>
              <h2>Design. Code. Precision.</h2>
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal from="up" className="cta">
            <p className="kicker">Let’s build what’s next</p>
            <h2>Strong design. Reliable build. Lifelong support.</h2>
            <p>
              Whether you’re launching a new website, building a web app, or upgrading your digital
              presence, we can help you move faster with less friction.
            </p>
            <Link className="btn btn-primary" to="/contact">
              Start Your Project →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
