'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const stories = [
  {
    name: 'Kacper, 12 lat',
    role: 'Uczestnik programu robotyki',
    quote: 'Dzięki warsztatom z LEGO Mindstorms odkryłem, że programowanie może być super zabawą! Teraz sam tworzę roboty w domu.',
    image: '/images/story-kacper.jpg',
  },
  {
    name: 'SP nr 3 w Sycowie',
    role: 'Szkoła partnerska',
    quote: 'Współpraca z Fundacją EduCode pozwoliła nam wprowadzić nowoczesne zajęcia z robotyki. Uczniowie są zachwyceni!',
    image: '/images/story-sp-sycow.jpg',
  },
]

export function SuccessStoriesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-6">
            Historie <span className="text-[#FF6B35]">sukcesu</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A2332]/70 max-w-3xl mx-auto">
            Poznaj opinie uczestników naszych programów i szkół partnerskich.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories?.map?.((story, index) => (
            <motion.div
              key={story?.name ?? index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#F8F9FA] rounded-2xl p-8 relative"
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={story?.image ?? ''}
                    alt={story?.name ?? ''}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A2332]">{story?.name ?? ''}</h3>
                  <p className="text-[#FF6B35]">{story?.role ?? ''}</p>
                </div>
              </div>
              <p className="text-[#1A2332]/80 text-lg italic">
                "{story?.quote ?? ''}"
              </p>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
