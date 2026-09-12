'use client'

import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'

const steps = [
  { step: 'Step 1', title: 'Book', desc: 'Send me your idea, date, and location via Instagram DM or email.' },
  { step: 'Step 2', title: 'Shoot', desc: 'We plan the details and capture everything on location.' },
  { step: 'Step 3', title: 'Edit', desc: 'Photos and videos are professionally edited and graded.' },
  { step: 'Step 4', title: 'Deliver', desc: 'Receive your final content ready to post or publish.' },
]

const goodToKnow = [
  { title: 'Island-wide', desc: 'Shooting across Cyprus. Extra fee may apply based on location.' },
  { title: 'Turnaround', desc: 'Delivery in 5–7 business days. Priority editing: 1–2 days for an additional fee.' },
  { title: 'Booking', desc: '50% deposit upfront to secure your date.' },
]

export default function ProcessPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow">Process</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '12px' }}>How It Works</h1>
            <p style={{ color: 'var(--text-muted)' }}>A simple four-step process from idea to delivery</p>
          </motion.div>

          <div className="steps-grid">
            {steps.map((s, i) => (
              <motion.div key={s.title} className="card" {...reveal(i * 0.08)}>
                <div className="step-num">{i + 1}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '4px' }}>{s.step}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.8rem' }}>Good to know</h2>
          </motion.div>

          <div className="steps-grid-3">
            {goodToKnow.map((g, i) => (
              <motion.div key={g.title} className="card" style={{ textAlign: 'center' }} {...reveal(i * 0.08)}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '10px' }}>{g.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
