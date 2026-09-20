import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { stats, values } from '../data/content'

export function About() {
  return (
    <main className="page-landing">
      <section className="section inner-hero">
        <div className="wrap split">
          <div>
            <Reveal from="left">
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
              Talk with the team →
            </Link>
          </Reveal>
        </div>

        <div className="wrap">
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
          <p className="hero-tagline">— Your Idea + Our Expertise = Real Results —</p>
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
