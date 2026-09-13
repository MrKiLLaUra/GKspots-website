import type { ProcessStep } from '@/lib/process-data'

type Variant = 'row' | 'card'

export default function StepItem({ step, index, variant }: { step: ProcessStep; index: number; variant: Variant }) {
  if (variant === 'card') {
    return (
      <div className="card">
        <div className="step-num">{index + 1}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '4px' }}>{step.step}</div>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{step.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
      </div>
    )
  }

  return (
    <div className="step-row">
      <div className="step-row-num">{String(index + 1).padStart(2, '0')}</div>
      <div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>{step.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
      </div>
    </div>
  )
}
