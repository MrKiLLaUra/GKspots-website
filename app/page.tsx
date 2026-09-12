'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import { featuredPhotos } from '@/lib/gallery-data'
import GalleryTile from '@/components/GalleryTile'

const packagesTeaser = [
  { name: 'Basic', photos: '10 photographs', from: '€100' },
  { name: 'Standard', photos: '20 photographs', from: '€160', popular: true },
  { name: 'Premium', photos: '30 photographs', from: '€200' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ textAlign: 'center', paddingTop: '120px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <span className="badge">📍 Based in Cyprus</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', marginBottom: '24px' }}
          >
            Photography
            <br />
            &amp; Videography
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 24px' }}
          >
            Showcasing my passion through photography and videography
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="tag-row" style={{ marginBottom: '40px' }}>
            <span>Automotive</span><span className="dot">|</span>
            <span>Brands</span><span className="dot">|</span>
            <span>Lifestyle</span><span className="dot">|</span>
            <span>Custom</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/packages" className="btn btn-primary">Book a Shoot</Link>
            <Link href="/contact" className="btn btn-outline">Contact Me</Link>
          </motion.div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <motion.div {...reveal()}>
              <div className="eyebrow">Recent Work</div>
              <h2 style={{ fontSize: '1.8rem' }}>A few favorites.</h2>
            </motion.div>
            <motion.div {...reveal(0.1)}>
              <Link href="/gallery" className="btn btn-outline">View full gallery →</Link>
            </motion.div>
          </div>

          <div className="gallery-grid">
            {featuredPhotos.map((photo, i) => (
              <motion.div key={photo.id} {...reveal(i * 0.05)}>
                <GalleryTile photo={photo} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages teaser */}
      <section className="section-sm">
        <div className="container">
          <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="eyebrow">Packages</div>
            <h2 style={{ fontSize: '1.8rem' }}>Simple, upfront pricing.</h2>
          </motion.div>

          <div className="pricing-grid">
            {packagesTeaser.map((p, i) => (
              <motion.div key={p.name} className="price-card" data-popular={p.popular} {...reveal(i * 0.08)}>
                {p.popular && <span className="popular-badge">Most Popular</span>}
                <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '20px' }}>{p.photos}</p>
                <p style={{ fontSize: '2rem', fontFamily: 'var(--font-space-grotesk)' }}>{p.from}</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>photos only, starting at</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal(0.2)} style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/packages" className="btn btn-primary">See all packages →</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
