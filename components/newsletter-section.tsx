'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'

export function NewsletterSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!email || !consent) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent }),
      })

      if (res?.ok) {
        setStatus('success')
        setEmail('')
        setConsent(false)
      } else {
        const data = await res?.json?.()
        setErrorMessage(data?.error ?? 'Wystąpił błąd')
        setStatus('error')
      }
    } catch (err) {
      console.error('Newsletter error:', err)
      setErrorMessage('Wystąpił błąd. Spróbuj ponownie.')
      setStatus('error')
    }
  }

  return (
    <section className="py-20 md:py-32 bg-[#1A2332]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Zapisz się do newslettera
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Bądź na bieżąco z naszymi projektami, warsztatami i wydarzeniami.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 text-green-400 px-6 py-4 rounded-xl flex items-center justify-center gap-3"
            >
              <CheckCircle className="w-6 h-6" />
              <span>Dziękujemy za zapis! Sprawdź swoją skrzynkę pocztową.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value ?? '')}
                  placeholder="Twój adres e-mail"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || !consent}
                  className="bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e85a2a] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Zapisz się'
                  )}
                </button>
              </div>

              <label className="flex items-start gap-3 text-left cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e?.target?.checked ?? false)}
                  className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-[#FF6B35] focus:ring-[#FF6B35]/50"
                />
                <span className="text-sm text-white/70">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu otrzymywania newslettera 
                  Fundacji EduCode zgodnie z <a href="/polityka-prywatnosci" className="text-[#FF6B35] hover:underline">Polityką Prywatności</a>.
                </span>
              </label>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
