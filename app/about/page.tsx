'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'

export default function AboutPage() {
  return (
    <section className="section" style={{ paddingTop: '80px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '680px' }}>
        <motion.div {...reveal()}>
          <div className="eyebrow">About</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '20px' }}>About</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '48px' }}>
            Passionate photographer and videographer based in Cyprus. Every shoot is a chance to
            capture the beauty, power, and detail that makes each subject unique.
          </p>
        </motion.div>

        <div className="stats-row" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '48px' }}>
          <motion.div {...reveal(0.1)}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>Trusted Around the Island</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Reputation</p>
          </motion.div>
          <motion.div {...reveal(0.16)}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>30+ Happy Customers</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Clients</p>
          </motion.div>
        </div>

        <motion.div {...reveal(0.22)}>
          <Link href="/gallery" className="btn btn-primary">See the work →</Link>
        </motion.div>
      </div>
    </section>
  )
}
