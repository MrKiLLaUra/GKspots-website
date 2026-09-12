'use client'

import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import { EMAIL } from '@/lib/contact'

const packages = [
  {
    name: 'Basic',
    photos: '10 photographs',
    lines: [
      { label: 'Photos only', price: '€100' },
      { label: 'Photos + Video', price: '€140' },
    ],
  },
  {
    name: 'Standard',
    photos: '20 photographs',
    popular: true,
    lines: [
      { label: 'Photos only', price: '€160' },
      { label: 'Photos + Video', price: '€200' },
    ],
  },
  {
    name: 'Premium',
    photos: '30 photographs',
    lines: [
      { label: 'Photos only', price: '€200' },
      { label: 'Photos + 2 Videos', price: '€280' },
    ],
  },
]

export default function PackagesPage() {
  return (
    <section className="section" style={{ paddingTop: '80px' }}>
      <div className="container">
        <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="eyebrow">Packages</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '12px' }}>Choose the package<br />that fits your needs.</h1>
        </motion.div>

        <div className="pricing-grid">
          {packages.map((p, i) => (
            <motion.div key={p.name} className="price-card" data-popular={p.popular} {...reveal(i * 0.08)}>
              {p.popular && <span className="popular-badge">Most Popular</span>}
              <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{p.name}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '24px' }}>{p.photos}</p>
              {p.lines.map((line) => (
                <div key={line.label} className="price-line">
                  <span>{line.label}</span>
                  <strong>{line.price}</strong>
                </div>
              ))}
              <a href="/contact" className={p.popular ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%', marginTop: '12px' }}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...reveal(0.2)}
          className="card"
          style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}
        >
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Custom Package</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Need something different? Email me your idea and we&apos;ll build a package around it.</p>
          </div>
          <a href={`mailto:${EMAIL}`} className="btn btn-outline">✉ Email Me</a>
        </motion.div>

        <motion.p {...reveal(0.25)} style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '32px' }}>
          * 50% deposit required upfront. Prices may vary depending on location — see the{' '}
          <a href="/process" style={{ color: 'var(--text-muted)' }}>process page</a> for details.
        </motion.p>
      </div>
    </section>
  )
}
