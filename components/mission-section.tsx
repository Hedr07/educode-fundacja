'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Target, Heart, Users, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Misja',
    description: 'Rozwijamy umiejętności technologiczne dzieci i młodzieży, przygotowując je do wyzwań przyszłości.',
  },
  {
    icon: Heart,
    title: 'Pasja',
    description: 'Wierzymy, że nauka przez zabawę budzi trwałą pasję do technologii i innowacji.',
  },
  {
    icon: Users,
    title: 'Wspólnota',
    description: 'Tworzymy przestrzeń, gdzie każde dziecko może odkryć swój potencjał technologiczny.',
  },
  {
    icon: Lightbulb,
    title: 'Innowacja',
    description: 'Wykorzystujemy najnowsze metody edukacyjne i technologie w naszych programach.',
  },
]

export function MissionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="misja" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-6">
            Nasza <span className="text-[#FF6B35]">misja</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A2332]/70 max-w-3xl mx-auto">
            Głównym celem Fundacji EduCode jest rozwijanie umiejętności i wiedzy dzieci i młodzieży, 
            a także promowanie umiejętnego i bezpiecznego korzystania z nowych technologii.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values?.map?.((value, index) => {
            const IconComponent = value?.icon
            return (
              <motion.div
                key={value?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9FA] p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors">
                  {IconComponent && <IconComponent className="w-6 h-6 text-[#FF6B35] group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-xl font-semibold text-[#1A2332] mb-2">{value?.title ?? ''}</h3>
                <p className="text-[#1A2332]/70">{value?.description ?? ''}</p>
              </motion.div>
            )
          }) ?? []}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://cdn.abacus.ai/images/ca230193-0017-4251-b4de-b29809f09727.jpg"
              alt="Innowacja i wartości fundacji EduCode"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A2332] mb-6">
              Wyrównujemy szanse edukacyjne
            </h3>
            <p className="text-[#1A2332]/70 mb-6 text-lg">
              Wierzymy, że każde dziecko zasługuje na dostęp do nowoczesnej edukacji technologicznej. 
              Nasze programy docierają do szkół i społeczności, które często są pomijane w dostępie 
              do innowacyjnych metod nauczania.
            </p>
            <ul className="space-y-3">
              {[
                'Bezpłatne warsztaty w szkołach',
                'Programy dla uczniów z mniejszych miejscowości',
                'Wsparcie dla dzieci z rodzin o niższych dochodach',
                'Dostęp do sprzętu i materiałów edukacyjnych',
              ]?.map?.((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#1A2332]/80">{item}</span>
                </li>
              )) ?? []}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
