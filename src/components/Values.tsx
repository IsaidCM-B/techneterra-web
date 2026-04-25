const icons = [
  // Precision — target crosshair
  <svg key="precision" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="1.5" strokeWidth={1.5} />
    <line x1="12" y1="3" x2="12" y2="7" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="3" y1="12" x2="7" y2="12" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="17" y1="12" x2="21" y2="12" strokeWidth={1.5} strokeLinecap="round" />
  </svg>,
  // Sustainability — leaf
  <svg key="sustainability" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c5.523 0 10 4.477 10 10M12 12c0-5.523 4.477-10 10-10M12 12c5.523 0 10 4.477 10 10" />
  </svg>,
  // Efficiency — lightning bolt
  <svg key="efficiency" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Investment — trending up
  <svg key="investment" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
]

const iconColors = ['#1a6eb5', '#75a74d', '#1a6eb5', '#75a74d']
const iconBg = [
  'rgba(26,110,181,0.10)',
  'rgba(117,167,77,0.12)',
  'rgba(26,110,181,0.10)',
  'rgba(117,167,77,0.12)',
]

type ValuesProps = {
  dict: {
    values: {
      title: string
      items: Array<{ title: string; desc: string }>
    }
  }
}

export default function Values({ dict }: ValuesProps) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* Illustration column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {dict.values.title}
            </h2>
            <p className="text-slate-500 text-base">
              Purpose-built for specialty crops — berries, citrus, tree nuts, vegetables, and more.
            </p>
            {/* Spray coverage card on vegetation — shows electrostatic effect */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/figma/628cc49f6532_1240x1550.png"
              alt="Electrostatic spray coverage on crop canopy"
              className="w-full h-auto rounded-2xl shadow-md border border-slate-100 object-cover"
              style={{ maxHeight: 340, objectPosition: 'center' }}
              loading="lazy"
            />
          </div>

          {/* Values grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dict.values.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: iconBg[i], color: iconColors[i], width: 52, height: 52 }}
                >
                  {icons[i]}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
