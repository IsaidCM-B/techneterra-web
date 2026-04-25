import type { Metadata } from 'next'
import { Source_Sans_3, IBM_Plex_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from './dictionaries'
import Header from '@/components/Header'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700', '900'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: '/favicon.ico' },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
      locale: lang === 'es' ? 'es_MX' : 'en_US',
      siteName: 'Techneterra',
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <html
      lang={lang}
      className={`${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-source-sans)] bg-white text-neutral-900">
        <Header dict={dict} lang={lang} />
        <main className="flex-1 flex flex-col">{children}</main>
        <SiteFooter dict={dict} lang={lang} />
      </body>
    </html>
  )
}
