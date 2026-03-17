'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [counterRef, counterInView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (counterInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [counterInView, end])

  return (
    <span ref={counterRef} className="counter-animation">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 10, suffix: '+', label: 'Lat doświadczenia' },
  { value: 500, suffix: '+', label: 'Przeszkolonych uczniów' },
  { value: 30, suffix: '+', label: 'Szkół partnerskich' },
  { value: 50, suffix: '+', label: 'Przeprowadzonych warsztatów' },
]

export function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 md:py-32 bg-[#1A2332] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#FF6B35]">10 lat</span> doświadczenia w edukacji technologicznej
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Nasz zespół składa się z pasjonatów edukacji i technologii. Przez lata zdobyliśmy 
              bogate doświadczenie w prowadzeniu warsztatów, szkoleń i programów edukacyjnych 
              dla dzieci i młodzieży w całej Polsce.
            </p>
            <p className="text-white/80 text-lg">
              Współpracujemy z najlepszymi ekspertami w dziedzinie STEAM, robotyki i programowania, 
              aby zapewnić najwyższą jakość naszych programów edukacyjnych.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/experience-zespol.jpg"
              alt="Zespół edukatorów Fundacji EduCode"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats?.map?.((stat, index) => (
            <div
              key={stat?.label ?? index}
              className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#FF6B35] mb-2">
                <AnimatedCounter end={stat?.value ?? 0} suffix={stat?.suffix ?? ''} />
              </div>
              <div className="text-white/70">{stat?.label ?? ''}</div>
            </div>
          )) ?? []}
        </motion.div>
      </div>
    </section>
  )
}
