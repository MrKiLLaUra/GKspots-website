'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import { galleryPhotos, filterOptions, type GalleryCategory } from '@/lib/gallery-data'
import GalleryTile from '@/components/GalleryTile'

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all')

  const photos = active === 'all' ? galleryPhotos : galleryPhotos.filter((p) => p.category === active)

  return (
    <section className="section" style={{ paddingTop: '80px' }}>
      <div className="container">
        <motion.div {...reveal()} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="eyebrow">Gallery</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '12px' }}>The work.</h1>
          <p style={{ color: 'var(--text-muted)' }}>Automotive, brand, lifestyle, and custom shoots from across Cyprus.</p>
        </motion.div>

        <motion.div {...reveal(0.1)} style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {filterOptions.map((f) => (
            <button
              key={f.value}
              className="filter-pill"
              data-active={active === f.value}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <motion.div key={photo.id} {...reveal(Math.min(i * 0.04, 0.3))}>
              <GalleryTile photo={photo} />
            </motion.div>
          ))}
        </div>

        {photos.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginTop: '32px' }}>No photos in this category yet.</p>
        )}
      </div>
    </section>
  )
}
