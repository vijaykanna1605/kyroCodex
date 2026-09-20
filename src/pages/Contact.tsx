import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { values } from '../data/content'

type FormState = {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

const empty: FormState = {
  name: '',
  email: '',
  company: '',
  budget: '10k-25k',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const nextErrors: Partial<FormState> = {}
    if (!form.name.trim()) nextErrors.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Use a valid email.'
    if (form.message.trim().length < 12) nextErrors.message = 'Tell us a little more about the project.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSent(true)
  }

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
                Tell us what you want to <span className="gradient-text">launch</span>
              </h1>
              <p>
                Share a short brief. We reply within two business days with questions, a suggested
                approach, and a ballpark timeline.
              </p>
              <p>
                Email:{' '}
                <a className="contact-email" href="mailto:hello@kyrocodex.com">
                  hello@kyrocodex.com
                </a>
              </p>
              <div className="hero-actions">
                <Link className="btn btn-link" to="/services">
                  View Our Services
                  <span className="btn-circle" aria-hidden="true">→</span>
                </Link>
              </div>
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

          {sent ? (
            <Reveal from="right" delay={100} className="notice goal-card">
              <p className="kicker">Message received</p>
              <h3>Thanks — we have the brief.</h3>
              <p>
                This demo form stays on the page. In production, connect it to your inbox, HubSpot,
                or a serverless function.
              </p>
              <Link className="btn btn-primary" to="/" style={{ marginTop: 18 }}>
                Back to Home →
              </Link>
            </Reveal>
          ) : (
            <Reveal from="right" delay={100}>
              <form className="form contact-form" onSubmit={submit} noValidate>
                <p className="kicker">Project brief</p>
                <h3>Start Your Project</h3>
                <label>
                  Name
                  <input
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                  />
                  {errors.name ? <span className="error">{errors.name}</span> : null}
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@company.com"
                  />
                  {errors.email ? <span className="error">{errors.email}</span> : null}
                </label>
                <label>
                  Company
                  <input
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    placeholder="Company name"
                  />
                </label>
                <label>
                  Budget
                  <select value={form.budget} onChange={(e) => update('budget', e.target.value)}>
                    <option value="under-10k">Under $10k</option>
                    <option value="10k-25k">$10k – $25k</option>
                    <option value="25k-50k">$25k – $50k</option>
                    <option value="50k-plus">$50k+</option>
                  </select>
                </label>
                <label>
                  Project
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="What are you building, and when do you need it?"
                  />
                  {errors.message ? <span className="error">{errors.message}</span> : null}
                </label>
                <button className="btn btn-primary" type="submit">
                  Send brief →
                </button>
              </form>
            </Reveal>
          )}
        </div>

        <div className="wrap">
          <p className="hero-tagline">— Your Idea + Our Expertise = Real Results —</p>
        </div>
      </section>
    </main>
  )
}
