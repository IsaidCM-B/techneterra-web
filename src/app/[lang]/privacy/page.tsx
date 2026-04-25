import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const p = dict.privacy

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-neutral-900 mb-2">{p.title}</h1>
        <p className="text-sm text-neutral-500 mb-10">
          {lang === 'es' ? 'Actualizado' : 'Updated'}: {p.updated}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            className="inline-flex justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
            href="/legal/Privacy_Notice_TDPSA_Techneterra.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {lang === 'es' ? 'Descargar aviso oficial (PDF)' : 'Download official notice (PDF)'}
          </a>
          <a
            className="inline-flex justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
            href="/legal/Guia_de_aplicacion_de_marca_TechneTerra.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {lang === 'es' ? 'Guía de marca (PDF)' : 'Brand guide (PDF)'}
          </a>
        </div>
        <div className="prose prose-neutral max-w-none space-y-6">
          {p.blocks.map((para, i) => (
            <p key={i} className="text-neutral-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
