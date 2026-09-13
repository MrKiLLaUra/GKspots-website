export interface ProcessStep {
  step: string
  title: string
  desc: string
}

export const processSteps: ProcessStep[] = [
  { step: 'Step 1', title: 'Book', desc: 'Send me your idea, date, and location via Instagram DM or email.' },
  { step: 'Step 2', title: 'Shoot', desc: 'We plan the details and capture everything on location.' },
  { step: 'Step 3', title: 'Edit', desc: 'Photos and videos are professionally edited and graded.' },
  { step: 'Step 4', title: 'Deliver', desc: 'Receive your final content ready to post or publish.' },
]

export interface GoodToKnowItem {
  title: string
  desc: string
}

export const goodToKnow: GoodToKnowItem[] = [
  { title: 'Island-wide', desc: 'Shooting across Cyprus. Extra fee may apply based on location.' },
  { title: 'Turnaround', desc: 'Delivery in 5–7 business days. Priority editing: 1–2 days for an additional fee.' },
  { title: 'Booking', desc: '50% deposit upfront to secure your date.' },
]
