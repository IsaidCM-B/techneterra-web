import ContactSection from '@/components/ContactSection'
import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <div className="pt-8">
      <ContactSection dict={dict} lang={lang} />
    </div>
  )
}
