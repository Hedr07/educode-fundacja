'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    preferences: false,
  })

  useEffect(() => {
    const consent = localStorage?.getItem?.('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = { necessary: true, analytics: true, preferences: true }
    localStorage?.setItem?.('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const consent = { necessary: true, analytics: false, preferences: false }
    localStorage?.setItem?.('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const saveSettings = () => {
    localStorage?.setItem?.('cookieConsent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {showSettings ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#1A2332]">Ustawienia plików cookie</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-xl">
                    <div>
                      <h4 className="font-medium text-[#1A2332]">Niezbędne</h4>
                      <p className="text-sm text-[#1A2332]/60">Wymagane do działania strony</p>
                    </div>
                    <input type="checkbox" checked disabled className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-xl">
                    <div>
                      <h4 className="font-medium text-[#1A2332]">Analityczne</h4>
                      <p className="text-sm text-[#1A2332]/60">Pomagają zrozumieć, jak korzystasz ze strony</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences?.analytics ?? false}
                      onChange={(e) => setPreferences({ ...(preferences ?? {}), analytics: e?.target?.checked ?? false })}
                      className="w-5 h-5 accent-[#FF6B35]"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-xl">
                    <div>
                      <h4 className="font-medium text-[#1A2332]">Preferencyjne</h4>
                      <p className="text-sm text-[#1A2332]/60">Zapamiętują Twoje ustawienia</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences?.preferences ?? false}
                      onChange={(e) => setPreferences({ ...(preferences ?? {}), preferences: e?.target?.checked ?? false })}
                      className="w-5 h-5 accent-[#FF6B35]"
                    />
                  </div>
                </div>

                <button
                  onClick={saveSettings}
                  className="w-full bg-[#FF6B35] text-white py-3 rounded-xl font-semibold hover:bg-[#e85a2a] transition-colors"
                >
                  Zapisz ustawienia
                </button>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1A2332] mb-2">
                      Ta strona używa plików cookie
                    </h3>
                    <p className="text-[#1A2332]/70 text-sm mb-4">
                      Używamy plików cookie, aby zapewnić najlepszą jakość usług. Możesz zaakceptować wszystkie 
                      lub dostosować ustawienia. Szczegóły znajdziesz w{' '}
                      <a href="/polityka-prywatnosci" className="text-[#FF6B35] hover:underline">
                        Polityce Prywatności
                      </a>.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={acceptAll}
                        className="bg-[#FF6B35] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#e85a2a] transition-colors"
                      >
                        Akceptuj wszystkie
                      </button>
                      <button
                        onClick={acceptNecessary}
                        className="bg-[#1A2332] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#2a3442] transition-colors"
                      >
                        Tylko niezbędne
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="border border-gray-200 text-[#1A2332] px-6 py-2.5 rounded-xl font-semibold hover:bg-[#F8F9FA] transition-colors flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Ustawienia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
