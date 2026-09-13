import { categoryLabels, type GalleryPhoto } from '@/lib/gallery-data'

type TileSize = 'default' | 'hero' | 'wide' | 'square'

export default function GalleryTile({ photo, size = 'default' }: { photo: GalleryPhoto; size?: TileSize }) {
  return (
    <div className="gallery-tile" data-size={size}>
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo.src} alt={photo.alt} />
      ) : (
        <svg className="gallery-tile-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      )}
      <span className="gallery-tile-label">{categoryLabels[photo.category]}</span>
      <span className="corner-mark tl" aria-hidden="true" />
      <span className="corner-mark tr" aria-hidden="true" />
      <span className="corner-mark bl" aria-hidden="true" />
      <span className="corner-mark br" aria-hidden="true" />
    </div>
  )
}
