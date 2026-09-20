import { Link } from 'react-router-dom'
import { HeroDevices } from '../components/HeroDevices'
import { Icon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { services, values } from '../data/content'

export function Home() {
  return (
    <main className="home-landing">
      <section className="hero hero-landing">
        <div className="wrap hero-grid">
          <Reveal from="left" className="hero-copy">
            <p className="process-pill">
              <span className="process-spark" aria-hidden="true" />
              Ideas → Design → Develop → Launch
            </p>
            <h1>
              We turn ideas into <span className="gradient-text">digital products</span>
            </h1>
            <p>
              KyroCodeX is a software development company focused on building modern websites,
              applications, and digital products for businesses.
            </p>
            <p>
              We combine UI/UX design, web development, application development, and cloud
              solutions to turn ideas into reliable, scalable, and easy-to-use digital experiences.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Start Your Project →
              </Link>
              <Link className="btn btn-link" to="/services">
                View Our Services
                <span className="btn-circle" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <HeroDevices />
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal from="up" delay={80} className="service-rail">
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
          <p className="hero-tagline">— Your Idea + Our Expertise = Real Results —</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal from="left">
              <p className="process-pill">
                <span className="process-spark" aria-hidden="true" />
                Why KyroCodeX
              </p>
              <h2>
                More than just code. We build{' '}
                <span className="gradient-text">partnerships</span>.
              </h2>
              <p>
                From a business website to a custom web or mobile application, we work closely with
                our clients to understand their goals, design the right experience, develop the
                product, and help bring it to life.
              </p>
            </Reveal>
            <ul className="checklist">
              {values.map((item) => (
                <li key={item}>
                  <span className="live-spark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal from="right" delay={140} className="card goal-card">
            <h3>
              Our goal is <span className="gradient-text">simple</span>
            </h3>
            <p>
              Build technology that looks great, works smoothly, scales with your business, and
              creates real value for your customers.
            </p>
            <Link className="btn btn-primary" to="/contact" style={{ marginTop: 18 }}>
              Start Your Project →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal from="up" className="cta">
            <p className="kicker">Let’s create something useful</p>
            <h2>Got an idea? Let’s build it.</h2>
            <p>A website, an app, or a full product — tell us what you need to ship next.</p>
            <Link className="btn btn-primary" to="/contact">
              Start Your Project →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
