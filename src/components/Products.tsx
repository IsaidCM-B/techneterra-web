import Link from 'next/link'

type ProductsProps = {
  dict: {
    products: {
      title: string
      subtitle: string
      ttr300: {
        name: string
        tagline: string
        desc: string
        specs: Record<string, string>
      }
      ttr500e: {
        name: string
        tagline: string
        desc: string
        specs: Record<string, string>
      }
      agristatic: {
        name: string
        tagline: string
        desc: string
      }
      cta: string
      learnMore: string
    }
  }
  lang: string
}

export default function Products({ dict, lang }: ProductsProps) {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {dict.products.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {dict.products.subtitle}
          </p>
        </div>

        {/* Flagship TTR-500E — wide card */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0d1e3c] to-[#1a3a6a] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: copy */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-[#8ec96a] text-xs font-bold tracking-widest uppercase mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ec96a] animate-pulse" />
                Flagship · 28 kW Full Electric
              </span>
              <h3 className="text-3xl lg:text-4xl font-black mb-2 text-white">
                {dict.products.ttr500e.name}
              </h3>
              <p className="text-[#5ba3d1] font-semibold mb-4">
                {dict.products.ttr500e.tagline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {dict.products.ttr500e.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {Object.entries(dict.products.ttr500e.specs).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-[#75a74d] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${lang}/contact`}
                  className="font-bold px-6 py-3 rounded-lg text-sm transition-colors text-center"
                  style={{ background: '#1a6eb5', color: '#fff' }}
                >
                  {dict.products.cta}
                </Link>
                <Link
                  href={`/${lang}/products`}
                  className="border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors text-center"
                >
                  {dict.products.learnMore}
                </Link>
              </div>
            </div>

            {/* Right: TTR robot illustration */}
            <div className="relative min-h-[280px] md:min-h-0 flex items-center justify-center bg-gradient-to-br from-[#0a1628]/60 to-[#1a3a6a]/40 p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/38e73dd1f72e_324x225.png"
                alt="TTR autonomous robot"
                className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 3-column grid: TTR-300E · AgriStatic · AGIOT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* TTR-300E */}
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-slate-50 flex flex-col">
            {/* Figma illustration: green tractor in field */}
            <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-[#e8f0e0] to-[#d4e8c8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/3cb3bd602d08_324x225.png"
                alt="TTR-300E in the field"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-black mb-1">{dict.products.ttr300.name}</h3>
              <p className="text-[#3b8dc0] font-semibold text-sm mb-3">{dict.products.ttr300.tagline}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{dict.products.ttr300.desc}</p>
              <Link
                href={`/${lang}/contact`}
                className="text-[#3b8dc0] hover:text-[#2a6d99] font-semibold text-sm mt-auto"
              >
                {dict.products.learnMore} →
              </Link>
            </div>
          </div>

          {/* AgriStatic™ */}
          <div className="rounded-2xl overflow-hidden border border-[#75a74d]/20 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            {/* Figma: spray coverage card in vegetation */}
            <div className="w-full h-48 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/d3ec0198abbe_310x388.png"
                alt="Electrostatic spray coverage"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/64608da82037_3734x787.png"
                alt="AgriStatic™"
                className="h-7 w-auto mb-2"
                loading="lazy"
              />
              <p className="text-[#75a74d] font-semibold text-sm mb-3">{dict.products.agristatic.tagline}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{dict.products.agristatic.desc}</p>
              <Link
                href={`/${lang}/contact`}
                className="text-[#75a74d] hover:text-[#5d8a3b] font-semibold text-sm mt-auto"
              >
                {dict.products.learnMore} →
              </Link>
            </div>
          </div>

          {/* AGIOT Digital Farming */}
          <div className="rounded-2xl overflow-hidden border border-[#3b8dc0]/20 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            {/* Figma: field scene with wind turbines */}
            <div className="w-full h-48 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/1a4a9c3e2d8e_438x338.png"
                alt="AGIOT connected farming"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/9b4d396545f3_2072x837.png"
                alt="AGIOT Digital Farming"
                className="h-7 w-auto mb-2"
                loading="lazy"
              />
              <p className="text-[#3b8dc0] font-semibold text-sm mb-3">Digital Farming Platform</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                IoT sensors, fleet telemetry, and AI-powered agronomic insights — connected farm management from a single dashboard.
              </p>
              <Link
                href={`/${lang}/technology`}
                className="text-[#3b8dc0] hover:text-[#2a6d99] font-semibold text-sm mt-auto"
              >
                {dict.products.learnMore} →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <p className="text-center mt-12">
          <Link
            href={`/${lang}/products`}
            className="inline-flex bg-[#1a6eb5] hover:bg-[#2a6d99] text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            {dict.products.learnMore} — Full Product Line
          </Link>
        </p>
      </div>
    </section>
  )
}
