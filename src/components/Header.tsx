'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderProps = {
  dict: {
    nav: Record<string, string>
    hero: { cta: string }
  }
  lang: string
}

export default function Header({ dict, lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const otherLang = lang === 'en' ? 'es' : 'en'
  const pathRest = (pathname || '').replace(/^\/(en|es)/, '') || ''
  const otherLangHref = `/${otherLang}${pathRest}`

  const navItems = [
    { key: 'home', href: `/${lang}` },
    { key: 'products', href: `/${lang}/products` },
    { key: 'technology', href: `/${lang}/technology` },
    { key: 'caseStudies', href: `/${lang}/case-studies` },
    { key: 'about', href: `/${lang}/about` },
    { key: 'contact', href: `/${lang}/contact` },
  ] as const

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={`/${lang}`} className="flex-shrink-0 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/FF_TECHNTERRA_Horizontal.svg"
              alt="Techneterra"
              className="h-10 lg:h-12 w-auto object-contain object-left"
              style={{ filter: 'saturate(1.5) brightness(0.92)' }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-semibold text-neutral-600 hover:text-[#3b8dc0] transition-colors"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={otherLangHref}
              className="text-sm font-medium text-neutral-500 hover:text-[#3b8dc0] uppercase"
            >
              {otherLang}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="bg-[#3b8dc0] hover:bg-[#2a6d99] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              {dict.hero.cta}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-900"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold text-neutral-700 hover:text-[#3b8dc0] py-2"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-100 flex items-center gap-4">
              <Link href={otherLangHref} className="text-sm font-medium uppercase">
                {otherLang === 'en' ? 'English' : 'Español'}
              </Link>
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileOpen(false)}
                className="bg-[#3b8dc0] text-white font-semibold px-5 py-2.5 rounded-lg text-sm flex-1 text-center"
              >
                {dict.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
