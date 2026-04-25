import Image from 'next/image'
import Link from 'next/link'

type FooterProps = {
  dict: {
    footer: {
      tagline: string
      desc: string
      links: Record<string, string>
      copyright: string
      parent: string
    }
  }
  lang: string
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Techneterra"
              width={160}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {dict.footer.desc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              {lang === 'es' ? 'Enlaces' : 'Links'}
            </h4>
            <nav className="space-y-3">
              {Object.entries(dict.footer.links).map(([key, label]) => (
                <Link
                  key={key}
                  href={key === 'home' ? `/${lang}` : key === 'privacy' ? `/${lang}/privacy` : `/${lang}#${key}`}
                  className="block text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold mb-2">{dict.footer.tagline}</h4>
            <p className="text-slate-400 text-sm mb-6">{dict.footer.desc}</p>
            <Link
              href={`/${lang}#contact`}
              className="inline-block bg-cta hover:bg-cta-hover text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              {lang === 'es' ? 'Solicitar Demo' : 'Request a Demo'}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {dict.footer.copyright}
          </p>
          <p className="text-xs text-slate-500">
            {dict.footer.parent}
          </p>
        </div>
      </div>
    </footer>
  )
}
