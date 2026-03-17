'use client'

import Link from 'next/link'
import { Heart, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="bg-[#1A2332] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Edu<span className="text-[#FF6B35]">Code</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Fundacja EduCode wspiera edukację technologiczną dzieci i młodzieży. 
              Od klocków LEGO do kariery w IT – pomagamy odkrywać pasję do technologii.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="mailto:kontakt@educode.pl" className="hover:text-[#FF6B35] transition-colors">
                  kontakt@educode.org.pl
                </a>
              </li>
              <li>
                <a href="tel:+48500312226" className="hover:text-[#FF6B35] transition-colors">
                  +48 500-312-226
                </a>
              </li>
              <li>
                ul. Pawłówek 11<br />
                56-500 Syców
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Dokumenty</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/regulamin" className="hover:text-[#FF6B35] transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/statut" className="hover:text-[#FF6B35] transition-colors">
                  Statut
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="hover:text-[#FF6B35] transition-colors">
                  Polityka Prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Registry info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-white/50 mb-8">
            <div>
              <span className="text-white/70">KRS:</span> 0001212614
            </div>
            <div>
              <span className="text-white/70">NIP:</span> 9112060897
            </div>
            <div>
              <span className="text-white/70">REGON:</span> 543549091
            </div>
            <div>
              <span className="text-white/70">Konto:</span> 81 2530 0008 2041 1089 0411 0001
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              © {currentYear} Fundacja EduCode. Wszelkie prawa zastrzeżone.
            </p>
            <p className="flex items-center gap-1">
              Stworzone z <Heart className="w-4 h-4 text-[#FF6B35]" /> dla edukacji
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
