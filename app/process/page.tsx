'use client'

import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import { processSteps, goodToKnow } from '@/lib/process-data'
import StepItem from '@/components/StepItem'

export default function ProcessPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow">Process</div>
            <h1 className="display-2" style={{ marginBottom: '12px' }}>How It Works</h1>
            <p style={{ color: 'var(--text-muted)' }}>A simple four-step process from idea to delivery</p>
          </motion.div>

          <div className="steps-grid">
            {processSteps.map((s, i) => (
              <motion.div key={s.title} {...reveal(i * 0.08)}>
                <StepItem step={s} index={i} variant="card" />
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
