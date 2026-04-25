type MissionProps = {
  dict: {
    mission: {
      title: string
      text: string
      vision: string
      stat1: { value: string; label: string }
      stat2: { value: string; label: string }
      stat3: { value: string; label: string }
      stat4: { value: string; label: string }
    }
  }
}

export default function Mission({ dict }: MissionProps) {
  const stats = [
    dict.mission.stat1,
    dict.mission.stat2,
    dict.mission.stat3,
    dict.mission.stat4,
  ]

  return (
    <section id="mission" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text + stats */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {dict.mission.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {dict.mission.text}
            </p>
            <p className="text-base text-slate-500 leading-relaxed italic border-l-4 border-[#75a74d] pl-4 mb-8">
              {dict.mission.vision}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center border"
                  style={{
                    background: i % 2 === 0 ? 'rgba(26,110,181,0.06)' : 'rgba(117,167,77,0.08)',
                    borderColor: i % 2 === 0 ? 'rgba(26,110,181,0.15)' : 'rgba(117,167,77,0.2)',
                  }}
                >
                  <div
                    className="text-2xl lg:text-3xl font-black mb-1 tabular-nums"
                    style={{ color: i % 2 === 0 ? '#1a6eb5' : '#5d8a3b' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* World map + caption */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/figma/48207bf189f6_1274x1024.png"
              alt="Techneterra global reach — Made in Mexico, built for the world"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
            <div
              className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 text-center shadow"
            >
              <p className="text-sm font-bold text-[#1a6eb5]">Made in Mexico · Built for the World</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Targeting berry, citrus, tree-nut, and specialty crop markets worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
