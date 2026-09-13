import { motion } from 'framer-motion'
import { reveal } from '@/lib/animations'
import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  heading,
  action,
  align = 'left',
}: {
  eyebrow: string
  heading: ReactNode
  action?: ReactNode
  align?: 'left' | 'center'
}) {
  if (action) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
        <motion.div {...reveal()}>
          <div className="eyebrow">{eyebrow}</div>
          <h2 style={{ fontSize: '1.8rem' }}>{heading}</h2>
        </motion.div>
        <motion.div {...reveal(0.1)}>{action}</motion.div>
      </div>
    )
  }

  return (
    <motion.div {...reveal()} style={{ textAlign: align === 'center' ? 'center' : 'left', marginBottom: '32px' }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 style={{ fontSize: '1.8rem' }}>{heading}</h2>
    </motion.div>
  )
}
