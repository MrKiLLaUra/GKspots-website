import { INSTAGRAM_URL } from '@/lib/contact'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.78rem', marginBottom: '20px' }}>
          * 50% of the total price is required upfront before the shoot. Prices may vary depending on the location.
        </p>
        <div className="site-footer-inner">
          <span>© 2026 Gkspots. All rights reserved.</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
