import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'

export default function PodziekowaniePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FF6B35]/5 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#1A2332] mb-4">
          Dziękujemy za wsparcie!
        </h1>
        <p className="text-[#1A2332]/70 text-lg mb-8">
          Twoja darowizna pomoże nam prowadzić bezpłatne warsztaty i rozwijać pasję do technologii u kolejnych dzieci i młodzieży.
        </p>
        <div className="flex items-center justify-center gap-2 text-[#FF6B35] mb-8">
          <Heart className="w-5 h-5" />
          <span className="font-semibold">Fundacja EduCode</span>
        </div>
        <Link
          href="/"
          className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e85a2a] transition-all"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  )
}
