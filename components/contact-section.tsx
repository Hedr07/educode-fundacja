'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {}
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res?.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res?.json?.()
        setErrorMessage(data?.error ?? 'Wystąpił błąd')
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMessage('Wystąpił błąd. Spróbuj ponownie.')
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-6">
            Skontaktuj się <span className="text-[#FF6B35]">z nami</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A2332]/70 max-w-3xl mx-auto">
            Masz pytania? Chętnie na nie odpowiemy. Wypełnij formularz lub skontaktuj się bezpośrednio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#F8F9FA] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A2332] mb-1">Email</h3>
                  <a href="mailto:kontakt@educode.pl" className="text-[#FF6B35] hover:underline">
                    kontakt@educode.pl
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A2332] mb-1">Telefon</h3>
                  <a href="tel:+48500312226" className="text-[#FF6B35] hover:underline">
                    +48 500-312-226
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A2332] mb-1">Adres</h3>
                  <p className="text-[#1A2332]/70">
                    ul. Pawłówek 11<br />
                    56-500 Syców
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1A2332] mb-2">Dziękujemy!</h3>
                <p className="text-[#1A2332]/70">Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F8F9FA] rounded-2xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2332] mb-2">Imię *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData?.name ?? ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2332] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData?.email ?? ''}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A2332] mb-2">Temat *</label>
                  <select
                    name="subject"
                    value={formData?.subject ?? ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] bg-white"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="warsztaty">Zapytanie o warsztaty</option>
                    <option value="wspolpraca">Współpraca ze szkołą</option>
                    <option value="wolontariat">Wolontariat</option>
                    <option value="darowizna">Darowizna</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A2332] mb-2">Wiadomość *</label>
                  <textarea
                    name="message"
                    value={formData?.message ?? ''}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#FF6B35] text-white py-4 rounded-xl font-semibold hover:bg-[#e85a2a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Wyślij wiadomość
                    </>
                  )}
                </button>

                <p className="text-xs text-[#1A2332]/50 text-center">
                  Wysyłając formularz, zgadzasz się na przetwarzanie danych zgodnie z{' '}
                  <a href="/polityka-prywatnosci" className="text-[#FF6B35] hover:underline">Polityką Prywatności</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
