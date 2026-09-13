'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0)

  return (
    <div className="star-picker" role="radiogroup" aria-label="Rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const n = i + 1
        const filled = n <= (hover || value)
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill={filled ? 'var(--text)' : 'none'} stroke={filled ? 'var(--text)' : 'var(--text-dim)'} strokeWidth="1.4">
              <path d="M12 2.5l2.9 6.2 6.7.7-5 4.7 1.4 6.7-6-3.5-6 3.5 1.4-6.7-5-4.7 6.7-.7z" strokeLinejoin="round" />
            </svg>
          </button>
        )
      })}
    </div>
  )
}

export default function ReviewForm() {
  const [name, setName] = useState('')
  const [quote, setQuote] = useState('')
  const [rating, setRating] = useState(0)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!quote.trim() || rating === 0) {
      setError('Please write a review and pick a rating.')
      return
    }

    if (!supabase) {
      setStatus('error')
      setError('Reviews are temporarily unavailable — please try again later.')
      return
    }

    setStatus('submitting')
    setError('')

    const { error: submitError } = await supabase.from('reviews').insert({
      name: name.trim() || null,
      quote: quote.trim(),
      rating,
      approved: false,
    })

    if (submitError) {
      setStatus('error')
      setError('Something went wrong — please try again.')
      return
    }

    setStatus('success')
    setName('')
    setQuote('')
    setRating(0)
  }

  if (status === 'success') {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Thanks for the review!</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          It&apos;s been submitted and will appear on the site once approved.
        </p>
      </div>
    )
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="review-name">Name (optional — leave blank to post anonymously)</label>
        <input
          id="review-name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          placeholder="Andreas K."
        />
      </div>

      <div className="form-field">
        <label htmlFor="review-quote">Your review</label>
        <textarea
          id="review-quote"
          className="form-textarea"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          maxLength={600}
          placeholder="Tell us about your shoot..."
        />
      </div>

      <div className="form-field">
        <label>Rating</label>
        <StarPicker value={rating} onChange={setRating} />
      </div>

      {error && <p style={{ color: '#f5a5a5', fontSize: '0.85rem' }}>{error}</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ alignSelf: 'flex-start' }}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Review'}
      </button>
    </form>
  )
}
