type PlatformProps = {
  dict: {
    platform: {
      title: string
      subtitle: string
      items: Array<{
        badge: string
        title: string
        desc: string
        detail: string
      }>
    }
  }
}

const icons = [
  // Blockchain oracle — chain links
  <svg key="oracle" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
  // Software integration — code brackets
  <svg key="software" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // IoT / energy — wifi + bolt
  <svg key="iot" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>,
  // Green bonds — leaf + trending up
  <svg key="greenbonds" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 3c-4.97 0-9 3.185-9 7.115C3 14.245 7.03 17 12 17s9-2.755 9-6.885C21 6.185 16.97 3 12 3zM12 3v14M12 17v4m-4-4h8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17c0 2.21 1.343 4 3 4s3-1.79 3-4" />
  </svg>,
]

const accentColors = ['#1a6eb5', '#75a74d', '#3b8dc0', '#2e9e6b']
// Lighter versions for text readability on the dark Platform background
const textColors = ['#7ab5e0', '#a3d46a', '#7ab5e0', '#5dc99a']
const badgeColors: Record<string, string> = {
  Live: '#2e9e6b',
  'En vivo': '#2e9e6b',
  'Coming Soon': '#1a6eb5',
  Proximamente: '#1a6eb5',
}
const badgeTextColors: Record<string, string> = {
  Live: '#5dc99a',
  'En vivo': '#5dc99a',
  'Coming Soon': '#7ab5e0',
  Proximamente: '#7ab5e0',
}

export default function Platform({ dict }: PlatformProps) {
  return (
    <section
      id="platform"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #05101f 0%, #0d2240 50%, #0a1a10 100%)' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AGIOT logo + header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/figma/9b4d396545f3_2072x837.png"
              alt="AGIOT Digital Farming"
              className="h-9 w-auto"
              style={{ filter: 'brightness(0) invert(1) opacity(0.85)' }}
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4" style={{ color: '#e2eaf5' }}>
            {dict.platform.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#94b4d4' }}>
            {dict.platform.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.platform.items.map((item, i) => {
            const isComingSoon = item.badge === 'Coming Soon' || item.badge === 'Proximamente'
            const badgeColor = badgeColors[item.badge] ?? '#1a6eb5'
            const badgeText = badgeTextColors[item.badge] ?? '#7ab5e0'
            const accent = accentColors[i]
            const textColor = textColors[i]

            return (
              <div
                key={i}
                className="relative rounded-2xl p-7 border transition-all duration-300 hover:border-opacity-60 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: `${accent}30`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Badge */}
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1 mb-5"
                  style={{ background: `${badgeColor}22`, color: badgeText, border: `1px solid ${badgeColor}44` }}
                >
                  {!isComingSoon && (
                    <span
                      className="h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{ background: badgeColor }}
                    />
                  )}
                  {item.badge}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${accent}18`, color: accent }}
                >
                  {icons[i]}
                </div>

                <h3 className="text-xl font-black mb-3" style={{ color: textColor }}>{item.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-5">{item.desc}</p>

                {/* Detail line */}
                <p
                  className="text-xs font-mono px-3 py-2 rounded-lg"
                  style={{
                    background: `${accent}12`,
                    color: textColor,
                    border: `1px solid ${accent}22`,
                  }}
                >
                  {item.detail}
                </p>

                {/* Coming soon overlay indicator */}
                {isComingSoon && (
                  <div
                    className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: '#1a6eb522', color: '#5ba3d1' }}
                  >
                    Q4 2026
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom connector — world map */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-[#a3d46a] text-xs font-bold tracking-widest uppercase mb-3">
                All-in-One Infrastructure
              </p>
              <h3 className="text-2xl font-black text-white mb-4">
                One platform. Every touchpoint.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                From the first autonomous spray pass to the green bond audit report — every data point flows through a single verified chain. No silos, no manual reconciliation, no greenwashing risk.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Spray Records', 'GPS Tracks', 'Energy Use', 'Input Volumes', 'Certifications', 'Carbon Credits'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: 'rgba(117,167,77,0.15)', color: '#8ec96a', border: '1px solid rgba(117,167,77,0.2)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[220px] flex items-center justify-center p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/figma/f4d5c3ab56a1_1536x1024.png"
                alt="Global reach map"
                className="w-full h-auto opacity-70"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
