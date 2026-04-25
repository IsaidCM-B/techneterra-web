'use client'

import { useState } from 'react'

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

export default function ContactForm({ dict, lang }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang,
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          company: data.get('company'),
          cropType: data.get('cropType'),
          message: data.get('message'),
        }),
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else setStatus('err')
    } catch {
      setStatus('err')
    }
  }

  const f = dict.contact.fields

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">{f.name}</span>
          <input name="name" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">{f.email}</span>
          <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">{f.phone}</span>
          <input name="phone" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-neutral-700">{f.company}</span>
          <input name="company" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-neutral-700">{f.cropType}</span>
        <input name="cropType" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-neutral-700">{f.message}</span>
        <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" />
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto bg-[#3b8dc0] hover:bg-[#2a6d99] text-white font-bold px-8 py-3 rounded-lg disabled:opacity-60"
      >
        {dict.contact.cta}
      </button>
      {status === 'ok' && (
        <p className="text-sm text-green-700" role="status">
          {lang === 'es' ? 'Recibido. Nos pondremos en contacto pronto.' : 'Received. We will be in touch shortly.'}
        </p>
      )}
      {status === 'err' && (
        <p className="text-sm text-red-600" role="alert">
          {lang === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Could not send. Please try again.'}
        </p>
      )}
    </form>
  )
}
