import type { Review } from '@/lib/reviews-data'
import StarRating from '@/components/StarRating'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="review-card">
      <span className="review-quote-mark" aria-hidden="true">&ldquo;</span>
      <StarRating rating={review.rating} />
      <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
      <div className="review-footer">
        <span className="avatar-initials" aria-hidden="true">{initials(review.name)}</span>
        <div>
          <div className="review-name">{review.name}</div>
          <div className="review-role">{review.role}</div>
        </div>
      </div>
    </div>
  )
}
