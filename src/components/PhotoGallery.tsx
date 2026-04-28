/**
 * PhotoGallery — Field Operations Gallery
 * =========================================
 * Displays photos from /public/images/gallery/
 * To add new photos: drop .jpg/.png files into /public/images/gallery/
 * and add their filenames to the PHOTOS array below.
 *
 * Updated: 2026-04-28
 */

// ── Photo manifest — add new images here when uploaded ───────────────────────
const PHOTOS: { src: string; alt: string; caption?: string }[] = [
  { src: '/images/ttr500e-field.jpg', alt: 'TTR-500E field operation', caption: 'TTR-500E operating at Driscoll\'s farm, Baja California' },
  { src: '/images/ttr500e-render.jpg', alt: 'TTR-500E engineering render', caption: 'TTR-500E — 28 kW full electric sprayer' },
  { src: '/images/team-robot.jpg', alt: 'Iñaki team with TTR robot', caption: 'Engineering team — field validation' },
  { src: '/images/landscape-banner.jpg', alt: 'Agricultural field panoramic', caption: 'Autonomous spray coverage — Baja California Norte' },
  // ── DROP NEW PHOTOS HERE ──────────────────────────────────────────────────
  // { src: '/images/YOUR_NEW_PHOTO.jpg', alt: 'Description', caption: 'Optional caption' },
]

type Props = {
  title?: string
  subtitle?: string
}

export default function PhotoGallery({
  title = 'Field Operations',
  subtitle = 'TTR robots working at scale — real field data, real results.',
}: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#75a74d] text-xs font-bold tracking-widest uppercase mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#75a74d] animate-pulse" aria-hidden />
            Live Field Evidence
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#0d1e3c]">{title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              {/* Overlay with caption */}
              {photo.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e3c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium leading-snug">{photo.caption}</p>
                </div>
              )}
              {/* Featured badge on first photo */}
              {i === 0 && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#75a74d] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                    Field Test Active
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center mt-10 text-sm text-slate-500">
          Field validation ongoing — Baja California Norte · Sinaloa · Sonora
        </p>
      </div>
    </section>
  )
}
