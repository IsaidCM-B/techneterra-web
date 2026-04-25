const techIcons = [
  // Electrostatic
  <svg key="electrostatic" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  // Navigation
  <svg key="navigation" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
  // Safety
  <svg key="safety" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  // Adaptive
  <svg key="adaptive" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
]

const steps: Record<string, string[]> = {
  en: ['Map Your Fields', 'Configure Sprayers', 'Assign Routes', 'Monitor & Optimize'],
  es: ['Mapea tus Campos', 'Configura Pulverizadores', 'Asigna Rutas', 'Monitorea y Optimiza'],
}

type TechnologyProps = {
  dict: {
    technology: {
      title: string
      subtitle: string
      items: Array<{ title: string; desc: string }>
    }
  }
  lang: string
}

export default function Technology({ dict, lang }: TechnologyProps) {
  const langSteps = steps[lang] || steps.en

  return (
    <section id="technology" className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {dict.technology.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {dict.technology.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.technology.items.map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-sky-brand/30 transition-colors"
            >
              <div className="w-14 h-14 bg-sky-brand/20 text-sky-light rounded-xl flex items-center justify-center mb-5">
                {techIcons[i]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {langSteps.map((title, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-sky-brand/30 mb-2">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="text-sm font-semibold text-slate-300">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
