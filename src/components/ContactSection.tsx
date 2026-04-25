import ContactForm from './ContactForm'

type Props = {
  dict: {
    contact: {
      title: string
      subtitle: string
      fields: Record<string, string>
      cta: string
      info: { email: string; phone: string; address: string }
    }
  }
  lang: string
}

export default function ContactSection({ dict, lang }: Props) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">{dict.contact.title}</h2>
            <p className="text-lg text-neutral-600 mb-8">{dict.contact.subtitle}</p>
            <div className="space-y-2 text-neutral-700">
              <p>
                <span className="font-semibold text-[#3b8dc0]">Email:</span> {dict.contact.info.email}
              </p>
              <p>
                <span className="font-semibold text-[#3b8dc0]">Phone:</span> {dict.contact.info.phone}
              </p>
              <p className="max-w-sm">
                <span className="font-semibold text-[#3b8dc0]">Address:</span> {dict.contact.info.address}
              </p>
            </div>
          </div>
          <ContactForm dict={dict} lang={lang} />
        </div>
      </div>
    </section>
  )
}
