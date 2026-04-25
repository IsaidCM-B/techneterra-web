type CaseStudyProps = {
  dict: {
    caseStudy: {
      title: string
      client: string
      desc: string
      metrics: Array<{ value: string; label: string }>
    }
  }
}

export default function CaseStudy({ dict }: CaseStudyProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-sky-brand/5 to-green-brand/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {dict.caseStudy.title}
          </h2>
          <p className="text-lg text-sky-brand font-semibold">
            {dict.caseStudy.client}
          </p>
          <p className="text-slate-600 mt-2 max-w-xl mx-auto">
            {dict.caseStudy.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.caseStudy.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 lg:p-8 text-center shadow-sm border border-slate-100"
            >
              <div className="text-3xl lg:text-4xl font-black text-sky-brand mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
