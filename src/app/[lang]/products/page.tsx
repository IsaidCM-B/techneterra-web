import Link from 'next/link'
import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

const PRODUCT_KEYS = ['ttr300', 'ttr500e', 'ttr1000h', 'ttr2000h', 'agristatic'] as const

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const p = dict.products

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-neutral-900 mb-4">{p.title}</h1>
        <p className="text-lg text-neutral-600 mb-12 max-w-3xl">{p.subtitle}</p>
        <div className="grid gap-10 md:grid-cols-2">
          {PRODUCT_KEYS.map((key) => {
            const item = p[key as keyof typeof p]
            if (!item || typeof item !== 'object' || !('name' in item)) return null
            const card = item as {
              name: string
              tagline: string
              desc: string
              specs?: Record<string, string>
            }
            return (
              <article
                key={key}
                className="rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-md transition-shadow bg-neutral-50/50"
              >
                <h2 className="text-2xl font-bold text-[#3b8dc0] mb-1">{card.name}</h2>
                <p className="text-sm font-semibold text-[#75a74d] mb-4">{card.tagline}</p>
                <p className="text-neutral-700 mb-6">{card.desc}</p>
                {card.specs && (
                  <ul className="space-y-2 text-sm text-neutral-600 border-t border-neutral-200 pt-4">
                    {Object.entries(card.specs).map(([k, v]) => (
                      <li key={k}>
                        <span className="font-medium text-neutral-800 capitalize">{k}:</span> {v}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
        <p className="mt-12 text-sm text-neutral-500">
          {lang === 'es'
            ? 'Los precios no se publican en el sitio web — disponibles bajo solicitud en brochure PDF.'
            : 'Pricing is not published on the public website — available on request via PDF brochure.'}
        </p>
        <p className="mt-6">
          <Link href={`/${lang}/contact`} className="inline-flex bg-[#3b8dc0] text-white font-bold px-6 py-3 rounded-lg">
            {p.cta}
          </Link>
        </p>
      </div>
    </div>
  )
}
