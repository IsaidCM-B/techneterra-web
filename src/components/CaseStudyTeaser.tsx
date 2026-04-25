import Link from 'next/link'

type Props = {
  dict: {
    caseStudy: {
      title: string
      client: string
      desc: string
      metrics: Array<{ value: string; label: string }>
      cta: string
    }
  }
  lang: string
}

export default function CaseStudyTeaser({ dict, lang }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-[#3b8dc0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{dict.caseStudy.title}</h2>
        <p className="text-white/90 text-lg mb-2 font-semibold">{dict.caseStudy.client}</p>
        <p className="text-white/80 max-w-2xl mb-10">{dict.caseStudy.desc}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {dict.caseStudy.metrics.map((m, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-black mb-1">{m.value}</div>
              <div className="text-sm text-white/85">{m.label}</div>
            </div>
          ))}
        </div>
        <Link
          href={`/${lang}/case-studies`}
          className="inline-flex items-center font-bold text-white border-b-2 border-white hover:border-white/70 transition-colors"
        >
          {dict.caseStudy.cta}
        </Link>
      </div>
    </section>
  )
}
