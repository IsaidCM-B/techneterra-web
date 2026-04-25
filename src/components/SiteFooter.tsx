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

export default function SiteFooter({ dict, lang }: FooterProps) {
  const links = [
    { key: 'home', href: `/${lang}` },
    { key: 'about', href: `/${lang}/about` },
    { key: 'products', href: `/${lang}/products` },
    { key: 'technology', href: `/${lang}/technology` },
    { key: 'caseStudies', href: `/${lang}/case-studies` },
    { key: 'contact', href: `/${lang}/contact` },
    { key: 'privacy', href: `/${lang}/privacy` },
  ] as const

  return (
    <footer className="bg-neutral-900 text-neutral-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo/FF_TECHNTERRA_copia_white.png"
              alt="Techneterra"
              width={220}
              height={48}
              className="h-10 w-auto object-contain object-left mb-4"
            />
            <p className="text-white font-bold text-lg mb-2">{dict.footer.tagline}</p>
            <p className="text-sm text-slate-400 max-w-md">{dict.footer.desc}</p>
            <p className="text-xs text-slate-500 mt-4">{dict.footer.parent}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-end">
            {links.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {dict.footer.links[key as keyof typeof dict.footer.links]}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-slate-500 border-t border-slate-700 mt-10 pt-8">
          {dict.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
