export interface Review {
  id: string
  name: string
  role: string
  quote: string
  rating: number
}

// DEMO / PLACEHOLDER DATA — written for the redesign, not real client feedback.
// Replace with real reviews once collected; the shape below is stable, so
// swapping in real content requires no component changes.
export const reviews: Review[] = [
  {
    id: 'andreas-k',
    name: 'Andreas K.',
    role: 'Porsche 911 · Limassol',
    quote:
      "Booked the Standard package for a marina shoot and the photos came back better than I imagined. Delivery was even faster than the 5-7 days quoted.",
    rating: 5,
  },
  {
    id: 'elena-p',
    name: 'Elena P.',
    role: 'BMW M3 · Nicosia',
    quote:
      'Booking over Instagram DM was so easy, and the 50% deposit process was explained clearly upfront. No surprises the whole way through.',
    rating: 5,
  },
  {
    id: 'christos-m',
    name: 'Christos M.',
    role: 'Sales Manager · Auto Trade Cyprus',
    quote:
      'We used the Premium package for our showroom inventory. Clean, consistent shots we could drop straight into listings and social posts.',
    rating: 5,
  },
  {
    id: 'maria-s',
    name: 'Maria S.',
    role: 'Jeep Wrangler · Paphos',
    quote:
      'Went with a custom package for something more lifestyle-focused. Loved the creative direction — genuinely different from a standard car shoot.',
    rating: 4,
  },
  {
    id: 'yiannis-d',
    name: 'Yiannis D.',
    role: 'Car Club Organizer · Larnaca',
    quote:
      'Traveled out for our meet without any hassle. Great to know shoots are available island-wide, not just around one city.',
    rating: 5,
  },
  {
    id: 'despina-l',
    name: 'Despina L.',
    role: 'Marketing Lead, local apparel brand',
    quote:
      'Needed content fast for a launch and the priority editing option delivered in under 2 days. Saved our timeline.',
    rating: 4,
  },
  {
    id: 'andri-t',
    name: 'Andri T.',
    role: 'Audi RS3 · Nicosia',
    quote:
      'The color grading on the delivered video was next level. You can tell a lot of care goes into the edit, not just the shoot itself.',
    rating: 5,
  },
  {
    id: 'kyriacos-n',
    name: 'Kyriacos N.',
    role: 'Mercedes-AMG · Limassol',
    quote:
      'Started with the Basic package just to try it out — great value, and the photos were delivered in 5 days as promised. Booking again soon.',
    rating: 5,
  },
]
