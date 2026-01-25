'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X } from 'lucide-react'

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window?.scrollY ?? 0
      const shouldShow = scrollY > 800
      setIsVisible(shouldShow && !isDismissed)
    }

    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-40 bg-[#FF6B35] text-white py-3 px-4 shadow-lg"
        >
          <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-medium flex-1 text-center sm:text-left">
              💡 Pomóż nam edukować następne pokolenie programistów!
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#donacje"
                className="bg-white text-[#FF6B35] px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <Heart className="w-4 h-4" />
                Wesprzyj
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
