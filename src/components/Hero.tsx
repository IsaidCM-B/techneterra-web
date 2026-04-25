'use client'

import Link from 'next/link'

type HeroProps = {
  dict: {
    hero: {
      tagline: string
      headline: string
      subtitle: string
      cta: string
      ctaSecondary: string
    }
  }
  lang: string
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Panoramic panning background */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden
        style={{
          backgroundImage: "url('/brand/landscape-panorama.png')",
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '0% center',
          animation: 'heroPan 40s linear infinite',
        }}
      />

      {/* Dark gradient overlay — strong on left for text, fade right */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,25,55,0.88) 0%, rgba(0,25,55,0.72) 50%, rgba(0,25,55,0.50) 100%)',
        }}
        aria-hidden
      />

      {/* Bottom white fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to top, white, transparent)' }}
        aria-hidden
      />

      {/* Pan animation keyframes */}
      <style>{`
        @keyframes heroPan {
          0%   { background-position: 0% center; }
          100% { background-position: -4050px center; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Tagline badge */}
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-bold text-white mb-8">
            <span className="h-2 w-2 rounded-full bg-[#75a74d] animate-pulse" aria-hidden />
            {dict.hero.tagline}
          </p>

          {/* Logo — white version over dark background */}
          <div className="mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/FF_TECHNTERRA_Horizontal.svg"
              alt="TechneTerra"
              className="h-14 lg:h-20 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          <p className="text-xl sm:text-2xl font-semibold mb-6 tracking-wide" style={{ color: '#8ec96a' }}>
            {dict.hero.headline}
          </p>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
            {dict.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}/contact`}
              className="font-bold px-8 py-4 rounded-lg text-lg transition-all text-center shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              style={{ background: '#1a6eb5', color: '#fff' }}
            >
              {dict.hero.cta}
            </Link>
            <Link
              href={`/${lang}/products`}
              className="border-2 border-white/70 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
