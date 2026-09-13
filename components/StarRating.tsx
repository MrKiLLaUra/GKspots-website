export default function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="star-row" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={i < Math.round(rating) ? 'var(--text)' : 'none'}
          stroke={i < Math.round(rating) ? 'var(--text)' : 'var(--text-dim)'}
          strokeWidth="1.4"
        >
          <path d="M12 2.5l2.9 6.2 6.7.7-5 4.7 1.4 6.7-6-3.5-6 3.5 1.4-6.7-5-4.7 6.7-.7z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  )
}
