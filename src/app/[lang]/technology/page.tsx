import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const t = dict.technology

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-neutral-900 mb-4">{t.title}</h1>
        <p className="text-lg text-neutral-600 mb-12">{t.subtitle}</p>
        <div className="space-y-10">
          {t.items.map((item, i) => (
            <section key={i} className="border-l-4 border-[#75a74d] pl-6">
              <h2 className="text-xl font-bold text-[#3b8dc0] mb-2">{item.title}</h2>
              <p className="text-neutral-700 leading-relaxed">{item.desc}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
