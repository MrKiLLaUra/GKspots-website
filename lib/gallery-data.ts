export type GalleryCategory = 'automotive' | 'brands' | 'lifestyle' | 'custom'

export interface GalleryPhoto {
  id: string
  category: GalleryCategory
  alt: string
  // Drop a real file path here once available, e.g. '/gallery/automotive-01.jpg',
  // and place the matching file in /public/gallery/. Leave null for a placeholder tile.
  src: string | null
}

export const categoryLabels: Record<GalleryCategory, string> = {
  automotive: 'Automotive',
  brands: 'Brands',
  lifestyle: 'Lifestyle',
  custom: 'Custom',
}

export const filterOptions: { value: GalleryCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'brands', label: 'Brands' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'custom', label: 'Custom' },
]

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'automotive-01', category: 'automotive', alt: 'Automotive shoot', src: null },
  { id: 'automotive-02', category: 'automotive', alt: 'Automotive shoot', src: null },
  { id: 'automotive-03', category: 'automotive', alt: 'Automotive shoot', src: null },
  { id: 'brands-01', category: 'brands', alt: 'Brand shoot', src: null },
  { id: 'brands-02', category: 'brands', alt: 'Brand shoot', src: null },
  { id: 'brands-03', category: 'brands', alt: 'Brand shoot', src: null },
  { id: 'lifestyle-01', category: 'lifestyle', alt: 'Lifestyle shoot', src: null },
  { id: 'lifestyle-02', category: 'lifestyle', alt: 'Lifestyle shoot', src: null },
  { id: 'lifestyle-03', category: 'lifestyle', alt: 'Lifestyle shoot', src: null },
  { id: 'custom-01', category: 'custom', alt: 'Custom shoot', src: null },
  { id: 'custom-02', category: 'custom', alt: 'Custom shoot', src: null },
  { id: 'custom-03', category: 'custom', alt: 'Custom shoot', src: null },
]

export const featuredPhotos = galleryPhotos.slice(0, 6)

export const heroPhoto: GalleryPhoto = {
  id: 'hero-automotive',
  category: 'automotive',
  alt: 'Featured automotive shoot',
  src: null,
}
