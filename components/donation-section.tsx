'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Heart, CreditCard, Building2, Copy, Check } from 'lucide-react'

const amounts = [20, 50, 100, 200]

export function DonationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50)
  const [customAmount, setCustomAmount] = useState('')
  const [copied, setCopied] = useState(false)

  const bankAccount = '81 2530 0008 2041 1089 0411 0001'

  const copyToClipboard = async () => {
    try {
      await navigator?.clipboard?.writeText?.(bankAccount?.replace?.(/\s/g, '') ?? '')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handlePayment = () => {
    alert('Integracja z Przelewy24 w przygotowaniu. Prosimy o wpłatę tradycyjnym przelewem.')
  }

  return (
    <section id="donacje" className="py-20 md:py-32 bg-gradient-to-br from-[#FF6B35]/5 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-6">
            Wesprzyj nasze <span className="text-[#FF6B35]">działania</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A2332]/70 max-w-3xl mx-auto">
            Twoja darowizna pomoże nam prowadzić bezpłatne warsztaty i docierać do jeszcze większej liczby dzieci.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A2332]">Wpłata online</h3>
            </div>

            <p className="text-[#1A2332]/70 mb-6">
              Wybierz kwotę darowizny:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {amounts?.map?.((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                    selectedAmount === amount
                      ? 'bg-[#FF6B35] text-white shadow-lg'
                      : 'bg-[#F8F9FA] text-[#1A2332] hover:bg-[#FF6B35]/10'
                  }`}
                >
                  {amount} zł
                </button>
              )) ?? []}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1A2332]/70 mb-2">
                Inna kwota:
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e?.target?.value ?? '')
                    setSelectedAmount('custom')
                  }}
                  placeholder="Wpisz kwotę"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1A2332]/50">zł</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-[#FF6B35] text-white py-4 rounded-xl font-semibold hover:bg-[#e85a2a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              Wpłać przez Przelewy24
            </button>

            <p className="text-xs text-[#1A2332]/50 mt-4 text-center">
              Integracja z Przelewy24 w przygotowaniu. Aktualnie prosimy o wpłatę tradycyjnym przelewem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1A2332] rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A2332]">Przelew tradycyjny</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#1A2332]/70 mb-1">Numer konta:</p>
                  <div className="flex items-center gap-2">
                    <code className="bg-[#F8F9FA] px-4 py-2 rounded-lg font-mono text-[#1A2332] flex-1">
                      {bankAccount}
                    </code>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 bg-[#F8F9FA] rounded-lg hover:bg-[#FF6B35]/10 transition-colors"
                      title="Kopiuj"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-[#1A2332]" />}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#1A2332]/70 mb-1">Odbiorca:</p>
                  <p className="font-medium text-[#1A2332]">Fundacja EduCode</p>
                </div>

                <div>
                  <p className="text-sm text-[#1A2332]/70 mb-1">Tytuł przelewu:</p>
                  <p className="font-medium text-[#1A2332]">Darowizna na cele statutowe</p>
                </div>

                <div>
                  <p className="text-sm text-[#1A2332]/70 mb-1">Bank:</p>
                  <p className="font-medium text-[#1A2332]">BIZnest Konto</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/donation-edukacja.jpg"
                alt="Wsparcie edukacji technologicznej dzieci"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/80 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-medium">
                  Każda złotówka przybliża nas do celu – edukacji bez barier.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
