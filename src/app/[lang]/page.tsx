import Hero from '@/components/Hero'
import Values from '@/components/Values'
import Products from '@/components/Products'
import Platform from '@/components/Platform'
import Mission from '@/components/Mission'
import CaseStudyTeaser from '@/components/CaseStudyTeaser'
import ContactSection from '@/components/ContactSection'
import PhotoGallery from '@/components/PhotoGallery'
import Link from 'next/link'
import { getDictionary, hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero dict={dict} lang={lang} />

      {/* Stats strip */}
      <div className="bg-[#0d1e3c] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: dict.mission.stat1.value, label: dict.mission.stat1.label },
              { value: dict.mission.stat2.value, label: dict.mission.stat2.label },
              { value: dict.mission.stat3.value, label: dict.mission.stat3.label },
              { value: dict.mission.stat4.value, label: dict.mission.stat4.label },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-black text-[#8ec96a] mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Values dict={dict} />
      <Products dict={dict} lang={lang} />

      {/* Full-width illustrated field scene */}
      <section className="relative overflow-hidden bg-[#0a1628]" style={{ minHeight: 440 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/figma/1996c884aafb_2400x1364.png"
          alt="Smart autonomous farming"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minHeight: 440 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,22,40,0.90) 0%, rgba(10,22,40,0.60) 50%, rgba(10,22,40,0.25) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex items-center">
          <div className="max-w-xl text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/figma/9b4d396545f3_2072x837.png"
              alt="AGIOT Digital Farming"
              className="h-10 w-auto mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Smart Farming at Scale
            </h2>
            <p className="text-white/85 leading-relaxed mb-8 text-lg">
              One operator supervises a fleet of autonomous robots via WiFi — real-time telemetry, adaptive spray rates, and geofenced navigation all from a tablet.
            </p>
            <Link
              href={`/${lang}/technology`}
              className="inline-flex items-center gap-2 bg-[#75a74d] hover:bg-[#5d8a3b] text-white font-bold px-7 py-3 rounded-lg text-sm transition-colors"
            >
              {dict.products.learnMore} →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology preview with spray coverage visualization */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{dict.technology.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{dict.technology.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: tech points */}
            <div className="space-y-8">
              {dict.technology.items.slice(0, 2).map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: i === 0 ? '#75a74d' : '#1a6eb5' }}
                  >
                    {i === 0 ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                        <line x1="12" y1="2" x2="12" y2="5" strokeWidth={1.5} />
                        <line x1="12" y1="19" x2="12" y2="22" strokeWidth={1.5} />
                        <line x1="2" y1="12" x2="5" y2="12" strokeWidth={1.5} />
                        <line x1="19" y1="12" x2="22" y2="12" strokeWidth={1.5} />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#1a6eb5]">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Hand with spray card */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/figma/39dff64326f7_1024x1024.png"
                  alt="Electrostatic spray coverage test"
                  className="w-full h-52 object-cover object-center"
                />
                <div className="bg-white px-5 py-3">
                  <p className="text-xs text-slate-500 text-center font-medium">
                    Water-sensitive card showing electrostatic droplet coverage
                  </p>
                </div>
              </div>
            </div>

            {/* Right: spray comparison */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/cc3e7e331649_920x593.png"
                alt="Spray coverage comparison"
                className="w-full h-auto"
              />
              <div className="px-6 py-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 text-center font-medium">
                  Electrostatic coverage levels — from low charge to maximum penetration
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-12">
            <Link
              href={`/${lang}/technology`}
              className="inline-flex bg-[#1a6eb5] hover:bg-[#2a6d99] text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              {dict.products.learnMore}
            </Link>
          </p>
        </div>
      </section>

      <Platform dict={dict} />
      <Mission dict={dict} />
      <PhotoGallery title="Field Operations" subtitle="TTR robots working at scale — real field data, real results." />
      <CaseStudyTeaser dict={dict} lang={lang} />
      <ContactSection dict={dict} lang={lang} />
    </>
  )
}
