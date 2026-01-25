'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Dla kogo są przeznaczone wasze programy?',
    answer: 'Nasze programy są skierowane do dzieci i młodzieży w wieku od 6 do 18 lat. Mamy zajęcia dopasowane do różnych grup wiekowych i poziomów zaawansowania – od początkujących po zaawansowanych.',
  },
  {
    question: 'Czy warsztaty są bezpłatne?',
    answer: 'Większość naszych warsztatów w szkołach jest bezpłatna dzięki wsparciu darowizn i grantów. Organizujemy też płatne kursy weekendowe, z których dochód przeznaczamy na rozwój fundacji.',
  },
  {
    question: 'Jak mogę zapisać dziecko na warsztaty?',
    answer: 'Aby zapisać dziecko na warsztaty, prosimy o kontakt przez formularz na stronie lub telefonicznie. Informujemy o aktualnych terminach warsztatów i wolnych miejscach.',
  },
  {
    question: 'Czy prowadzicie zajęcia w szkołach?',
    answer: 'Tak! Współpracujemy ze szkołami w całej Polsce. Prowadzimy warsztaty w ramach zajęć dodatkowych, kółek zainteresowań oraz specjalnych wydarzeń edukacyjnych. Jeśli jesteś nauczycielem lub dyrektorem, skontaktuj się z nami!',
  },
  {
    question: 'Jaki sprzęt jest potrzebny do udziału w warsztatach?',
    answer: 'Zapewniamy cały niezbędny sprzęt – zestawy LEGO, laptopy, roboty. Uczestnicy nie muszą przynosić własnego wyposażenia. W przypadku zajęć online, wymagany jest komputer z dostępem do internetu.',
  },
  {
    question: 'Jak mogę wesprzeć fundację?',
    answer: 'Możesz nas wesprzeć poprzez darowiznę finansową, przekazanie 1,5% podatku, wolontariat lub przekazanie sprzętu edukacyjnego. Każda forma wsparcia jest dla nas cenna!',
  },
  {
    question: 'Czy wystawiacie potwierdzenie darowizny?',
    answer: 'Tak, na życzenie darczyńcy wystawiamy potwierdzenie wpłaty darowizny, które można wykorzystać do odliczenia od podatku zgodnie z obowiązującymi przepisami.',
  },
]

export function FaqSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-6">
            Często zadawane <span className="text-[#FF6B35]">pytania</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs?.map?.((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F8F9FA]/50 transition-colors"
              >
                <span className="font-semibold text-[#1A2332] pr-4">{faq?.question ?? ''}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-[#1A2332]/70">
                      {faq?.answer ?? ''}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
