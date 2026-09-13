'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import { featuredPhotos, heroPhoto } from '@/lib/gallery-data'
import { processSteps, goodToKnow } from '@/lib/process-data'
import { reviews as demoReviews, type Review } from '@/lib/reviews-data'
import { supabase } from '@/lib/supabase'
import GalleryTile from '@/components/GalleryTile'
import StepItem from '@/components/StepItem'
import ReviewCard from '@/components/ReviewCard'
import ReviewForm from '@/components/ReviewForm'
import Marquee from '@/components/Marquee'
import SectionHeading from '@/components/SectionHeading'

const packagesTeaser = [
  { name: 'Basic', photos: '10 photographs', from: '€100' },
  { name: 'Standard', photos: '20 photographs', from: '€160', popular: true },
  { name: 'Premium', photos: '30 photographs', from: '€200' },
]

const stats = [
  { num: '30+', label: 'Happy Customers' },
  { num: '5–7', label: 'Day Turnaround' },
  { num: 'Cyprus', label: 'Island-Wide Coverage' },
  { num: '50%', label: 'Deposit to Book' },
]

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>(demoReviews)

  useEffect(() => {
    if (!supabase) return

    supabase
      .from('reviews')
      .select('id, name, role, quote, rating')
      .eq('approved', true)
      .order('created_at', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) setReviews(data)
      })
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container-wide">
          <div className="hero-split">
            <div>
              <motion.div {...reveal()} style={{ marginBottom: '32px' }}>
                <span className="badge">📍 Based in Cyprus</span>
              </motion.div>

              <motion.h1 {...reveal(0.1)} className="display-1" style={{ marginBottom: '24px' }}>
                Photography
                <br />
                <span className="display-1-ghost">&amp; Videography</span>
              </motion.h1>

              <motion.p
                {...reveal(0.2)}
                style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '480px', marginBottom: '32px' }}
              >
                Showcasing my passion through photography and videography
              </motion.p>

              <motion.div {...reveal(0.3)} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/packages" className="btn btn-primary">Book a Shoot</Link>
                <Link href="/contact" className="btn btn-outline">Contact Me</Link>
              </motion.div>
            </div>

            <motion.div {...reveal(0.2)} className="hero-visual">
              <GalleryTile photo={heroPhoto} size="hero" />
              <div className="hero-meta">
                <span>Featured — Automotive</span>
                <span>Cyprus</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bleed section-band">
        <Marquee items={['Automotive', 'Brands', 'Lifestyle', 'Custom', 'Island-Wide · Cyprus']} />
      </div>

      {/* Featured work */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Recent Work"
            heading="A few favorites."
            action={<Link href="/gallery" className="btn btn-outline">View full gallery →</Link>}
          />

          <div className="editorial-gallery-grid">
            {featuredPhotos.map((photo, i) => (
              <motion.div key={photo.id} {...reveal(i * 0.05)}>
                <GalleryTile photo={photo} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="bleed section-band">
        <div className="section-sm">
          <div className="container">
            <div className="stats-band-grid">
              {stats.map((s, i) => (
                <motion.div key={s.label} className="stat-item" {...reveal(i * 0.06)}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How it works (condensed) */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            heading="How it works."
            action={<Link href="/process" className="btn btn-outline">Full details →</Link>}
          />

          <div>
            {processSteps.map((s, i) => (
              <StepItem key={s.title} step={s} index={i} variant="row" />
            ))}
          </div>

          <motion.h3 {...reveal()} style={{ fontSize: '1.2rem', marginTop: '56px', marginBottom: '24px' }}>
            Good to know
          </motion.h3>

          <div className="steps-grid-3">
            {goodToKnow.map((g, i) => (
              <motion.div key={g.title} className="card" {...reveal(i * 0.08)}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '10px' }}>{g.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading eyebrow="Testimonials" heading="What clients say." />

          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <motion.div key={r.id} {...reveal(i * 0.05)}>
                <ReviewCard review={r} />
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal(0.1)} className="card" style={{ marginTop: '24px', maxWidth: '640px' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '4px' }}>Had a shoot with us?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Leave a review — it&apos;ll appear here once approved.
            </p>
            <ReviewForm />
          </motion.div>
        </div>
      </section>

      {/* Packages teaser */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Packages" heading="Simple, upfront pricing." align="center" />

          <div className="pricing-grid">
            {packagesTeaser.map((p, i) => (
              <motion.div key={p.name} className="price-card" data-popular={p.popular} {...reveal(i * 0.08)}>
                {p.popular && <span className="popular-badge">Most Popular</span>}
                <div className="price-index">{String(i + 1).padStart(2, '0')} / 03</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '20px' }}>{p.photos}</p>
                <p className="price-num">{p.from}</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>photos only, starting at</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal(0.2)} style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/packages" className="btn btn-primary">See all packages →</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <div className="bleed section-band">
        <div className="section">
          <div className="container">
            <motion.div {...reveal()} className="cta-band">
              <div>
                <h2 className="display-2" style={{ marginBottom: '8px' }}>Let&apos;s create something bold.</h2>
                <p style={{ color: 'var(--text-muted)' }}>Tell me your idea and let&apos;s get it booked.</p>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/packages" className="btn btn-primary">Book a Shoot</Link>
                <Link href="/contact" className="btn btn-outline">Contact Me</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
