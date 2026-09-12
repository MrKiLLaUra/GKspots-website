'use client'

import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import { EMAIL, INSTAGRAM_URL } from '@/lib/contact'

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: '80px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '560px' }}>
        <motion.div {...reveal()}>
          <div className="eyebrow">Contact</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '12px' }}>Get in Touch</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '36px' }}>DM me on Instagram or send me an email</p>
        </motion.div>

        <motion.div {...reveal(0.1)} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            📷 DM on Instagram
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-outline">
            ✉ {EMAIL}
          </a>
        </motion.div>

        <motion.p {...reveal(0.2)} style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '48px' }}>
          * 50% of the total price is required upfront before the shoot. Prices may vary depending on the location.
        </motion.p>
      </div>
    </section>
  )
}
