'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Code, Cpu, Trophy, Users, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: Code,
    title: 'STEAM & Programowanie',
    description: 'Uczymy podstaw programowania w przyjaznym środowisku. Od Scratch po Python - każdy znajdzie coś dla siebie.',
    image: 'https://cdn.abacus.ai/images/73cd15f7-5322-4972-95b5-20499c72209d.jpg',
    features: ['Scratch dla najmłodszych', 'Python i JavaScript', 'Myślenie algorytmiczne'],
  },
  {
    icon: Cpu,
    title: 'LEGO Education & Robotyka',
    description: 'Budujemy i programujemy roboty LEGO. Dzieci uczą się podstaw mechaniki, elektroniki i programowania.',
    image: 'https://cdn.abacus.ai/images/3ecef27a-b59b-42ff-8d19-4260e97f03d2.jpg',
    features: ['LEGO Mindstorms', 'LEGO SPIKE Prime', 'Konstruowanie mechanizmów'],
  },
  {
    icon: Trophy,
    title: 'Konkursy & Wyścigi',
    description: 'Organizujemy zawody robotyczne i hackathony. Rywalizacja motywuje do nauki i rozwoju umiejętności.',
    image: 'https://cdn.abacus.ai/images/51d32a89-edff-477c-9469-340e56deac7a.jpg',
    features: ['Zawody robotyczne', 'Hackathony dla młodzieży', 'Prezentacje projektów'],
  },
  {
    icon: Users,
    title: 'Wyrównywanie szans',
    description: 'Docieramy do szkół w mniejszych miejscowościach. Dajemy dostęp do technologii każdemu dziecku.',
    image: 'https://cdn.abacus.ai/images/08e49dc3-4353-4ebf-9087-32a1fb379d18.jpg',
    features: ['Bezpłatne warsztaty', 'Wypożyczalnia sprzętu', 'Programy stypendialne'],
  },
]

export function ProgramsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="programy" className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-6">
            Nasze <span className="text-[#FF6B35]">programy</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A2332]/70 max-w-3xl mx-auto">
            Oferujemy różnorodne programy edukacyjne dopasowane do wieku i poziomu umiejętności uczestników.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs?.map?.((program, index) => {
            const IconComponent = program?.icon
            return (
              <motion.div
                key={program?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={program?.image ?? ''}
                    alt={program?.title ?? ''}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-white">{program?.title ?? ''}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#1A2332]/70 mb-4">{program?.description ?? ''}</p>
                  <ul className="space-y-2 mb-6">
                    {program?.features?.map?.((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#1A2332]/80">
                        <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
                        {feature}
                      </li>
                    )) ?? []}
                  </ul>
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:gap-3 transition-all"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
