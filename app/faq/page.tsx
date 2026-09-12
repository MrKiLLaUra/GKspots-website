'use client'

import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'

// Draft copy — the live site has an FAQ nav link but no visible Q&A content to pull from.
// Items marked (confirm) below use safe, generic language and should be checked
// against the friend's actual policy before this page goes live.
const faqs = [
  {
    q: 'Do you shoot outside your base location?',
    a: 'Yes — shoots are available island-wide across Cyprus. An extra fee may apply depending on distance.',
  },
  {
    q: 'How long until I get my photos or videos?',
    a: 'Standard delivery is 5–7 business days. Priority editing (1–2 days) is available for an additional fee.',
  },
  {
    q: 'How does booking and payment work?',
    a: 'A 50% deposit is required upfront to secure your date. (confirm: balance due on delivery or on the shoot day)',
  },
  {
    q: 'How far in advance should I book?',
    a: 'The sooner the better, especially in peak season — send over your preferred date and availability will be confirmed.',
  },
  {
    q: 'Can I use the photos or videos commercially?',
    a: "Usage rights are discussed per project. (confirm: standard usage terms for personal vs. commercial/brand use)",
  },
  {
    q: 'What if I need to reschedule?',
    a: 'Reach out as soon as possible and a new date will be found. (confirm: rescheduling/cancellation policy)',
  },
]

export default function FaqPage() {
  return (
    <section className="section" style={{ paddingTop: '80px' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="eyebrow">FAQ</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>Frequently Asked Questions</h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((f, i) => (
            <motion.div key={f.q} className="card" {...reveal(Math.min(i * 0.05, 0.25))}>
              <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{f.q}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
