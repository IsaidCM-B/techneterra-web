import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const a = dict.about

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-neutral-900 mb-6">{a.title}</h1>
        <p className="text-lg text-neutral-700 mb-10 leading-relaxed">{a.intro}</p>
        <h2 className="text-xl font-bold text-[#3b8dc0] mb-4">{a.workstreamsTitle}</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          {a.workstreams.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
