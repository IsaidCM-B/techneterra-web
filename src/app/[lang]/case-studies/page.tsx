import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const c = dict.caseStudy

  return (
    <div className="pt-24 pb-20 bg-neutral-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-neutral-900 mb-4">{c.title}</h1>
        <p className="text-xl font-semibold text-[#3b8dc0] mb-2">{c.client}</p>
        <p className="text-neutral-700 mb-10">{c.desc}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {c.metrics.map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center border border-neutral-200 shadow-sm">
              <div className="text-3xl font-black text-[#3b8dc0]">{m.value}</div>
              <div className="text-sm text-neutral-600 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-500">
          {lang === 'es'
            ? 'Métricas según Layout Brief / caso Golden Valley Berries — validar copy final con AgenciaAgro.'
            : 'Metrics per Layout Brief / Golden Valley Berries case — validate final copy with AgenciaAgro.'}
        </p>
      </div>
    </div>
  )
}
