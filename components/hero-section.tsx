'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F8F9FA] to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1A2332]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#FF6B35]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Fundacja EduCode
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A2332] leading-tight mb-6">
              Od klocków LEGO do{' '}
              <span className="text-[#FF6B35]">kariery w IT</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#1A2332]/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Rozwijamy umiejętności technologiczne dzieci i młodzieży poprzez kreatywną naukę programowania, robotyki i myślenia komputacyjnego.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#programy"
                className="bg-[#FF6B35] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e85a2a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Poznaj nasze programy
              </a>
              <a
                href="#donacje"
                className="border-2 border-[#1A2332] text-[#1A2332] px-8 py-4 rounded-full font-semibold hover:bg-[#1A2332] hover:text-white transition-all"
              >
                Wesprzyj misję
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/d9498b99-5cd6-4afd-89b1-e6157c33a4d3.jpg"
                alt="Dzieci uczą się programowania i robotyki LEGO"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[#FF6B35]">10+</div>
              <div className="text-sm text-[#1A2332]/70">lat doświadczenia</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#misja"
            className="flex flex-col items-center text-[#1A2332]/50 hover:text-[#FF6B35] transition-colors"
          >
            <span className="text-sm mb-2">Przewiń w dół</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
