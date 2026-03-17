'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/#misja', label: 'Misja' },
  { href: '/#programy', label: 'Programy' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-[#1A2332]">
              Edu<span className="text-[#FF6B35]">Code</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems?.map?.((item) => (
              <Link
                key={item?.href ?? ''}
                href={item?.href ?? '#'}
                className="text-[#1A2332] hover:text-[#FF6B35] transition-colors font-medium"
              >
                {item?.label ?? ''}
              </Link>
            )) ?? []}
            <Link
              href="/#donacje"
              className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#e85a2a] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-4 h-4" />
              Wesprzyj
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A2332]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navItems?.map?.((item) => (
                <Link
                  key={item?.href ?? ''}
                  href={item?.href ?? '#'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#1A2332] hover:text-[#FF6B35] transition-colors font-medium py-2"
                >
                  {item?.label ?? ''}
                </Link>
              )) ?? []}
              <Link
                href="/#donacje"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#FF6B35] text-white px-5 py-3 rounded-full font-semibold text-center mt-2"
              >
                Wesprzyj nas
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
