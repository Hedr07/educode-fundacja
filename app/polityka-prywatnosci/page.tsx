import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export const metadata = {
  title: 'Polityka Prywatności - Fundacja EduCode',
  description: 'Polityka Prywatności Fundacji EduCode - informacje o przetwarzaniu danych osobowych.',
}

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do strony głównej
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2332]">Polityka Prywatności</h1>
                <p className="text-[#1A2332]/60">Ostatnia aktualizacja: 23 stycznia 2026</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">1. Administrator danych osobowych</h2>
            <p>Administratorem danych osobowych jest <strong>Fundacja "EduCode"</strong> z siedzibą w Sycowie.</p>
            <ul>
              <li><strong>NIP:</strong> 9112060897</li>
              <li><strong>REGON:</strong> 543549091</li>
              <li><strong>KRS:</strong> 0001212614</li>
              <li><strong>Telefon:</strong> +48 500-312-226</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">2. Cel przetwarzania danych</h2>
            <p>Fundacja EduCode przetwarza dane osobowe w następujących celach:</p>
            <ul>
              <li>Realizacja celów statutowych Fundacji</li>
              <li>Obsługa darowizn i wpłat finansowych</li>
              <li>Komunikacja z darczyńcami, wolontariuszami i beneficjentami</li>
              <li>Wysyłka newslettera (po wyrażeniu zgody)</li>
              <li>Prowadzenie dokumentacji księgowej i sprawozdawczej</li>
              <li>Organizacja wydarzeń, warsztatów i szkoleń</li>
              <li>Rekrutacja wolontariuszy i mentorów</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">3. Podstawa prawna przetwarzania</h2>
            <p>Dane osobowe przetwarzane są na podstawie:</p>
            <ul>
              <li><strong>Art. 6 ust. 1 lit. a RODO</strong> - zgoda osoby (newsletter, kontakt)</li>
              <li><strong>Art. 6 ust. 1 lit. b RODO</strong> - wykonanie umowy (darowizny, współpraca)</li>
              <li><strong>Art. 6 ust. 1 lit. c RODO</strong> - obowiązek prawny (dokumentacja księgowa)</li>
              <li><strong>Art. 6 ust. 1 lit. f RODO</strong> - prawnie uzasadniony interes administratora</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">4. Rodzaje zbieranych danych</h2>
            <h3>4.1. Dane zbierane automatycznie</h3>
            <ul>
              <li>Adres IP</li>
              <li>Typ przeglądarki i urządzenia</li>
              <li>Czas wizyty na stronie</li>
              <li>Odwiedzone podstrony</li>
            </ul>

            <h3>4.2. Dane podawane dobrowolnie</h3>
            <ul>
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Adres korespondencyjny</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">5. Pliki cookies</h2>
            <p>Nasza strona internetowa wykorzystuje pliki cookies (ciasteczka) w celu:</p>
            <ul>
              <li>Zapewnienia prawidłowego działania strony</li>
              <li>Zapamiętania preferencji użytkownika</li>
              <li>Analizy ruchu na stronie</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <strong>Ważne:</strong> Możesz w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.
            </div>

            <h3>5.1. Rodzaje cookies</h3>
            <ul>
              <li><strong>Niezbędne cookies</strong> - wymagane do działania strony</li>
              <li><strong>Analityczne cookies</strong> - pomagają zrozumieć, jak użytkownicy korzystają ze strony</li>
              <li><strong>Preferencyjne cookies</strong> - zapamiętują wybory użytkownika</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">6. Odbiorcy danych</h2>
            <p>Dane osobowe mogą być przekazywane:</p>
            <ul>
              <li>Operatorom płatności (w celu realizacji darowizn)</li>
              <li>Dostawcom usług IT i hostingowych</li>
              <li>Organom państwowym (na żądanie wynikające z przepisów prawa)</li>
              <li>Firmom księgowym wspierającym Fundację</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">7. Okres przechowywania danych</h2>
            <ul>
              <li><strong>Dane księgowe:</strong> 5 lat od końca roku podatkowego</li>
              <li><strong>Newsletter:</strong> do momentu wycofania zgody</li>
              <li><strong>Dane kontaktowe:</strong> do momentu żądania usunięcia</li>
              <li><strong>Cookies:</strong> od 1 miesiąca do 2 lat</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">8. Prawa osób, których dane dotyczą</h2>
            <p>Zgodnie z RODO, przysługują Ci następujące prawa:</p>
            <ul>
              <li><strong>Prawo dostępu</strong> - możesz uzyskać informacje o przetwarzanych danych</li>
              <li><strong>Prawo do sprostowania</strong> - możesz poprawić nieprawidłowe dane</li>
              <li><strong>Prawo do usunięcia</strong> ("prawo do bycia zapomnianym")</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong></li>
              <li><strong>Prawo do przenoszenia danych</strong></li>
              <li><strong>Prawo do sprzeciwu</strong> - w szczególności wobec marketingu</li>
              <li><strong>Prawo do cofnięcia zgody</strong> - w dowolnym momencie</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <strong>Prawo do skargi:</strong> Masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), jeśli uważasz, że przetwarzanie Twoich danych narusza RODO.
            </div>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">9. Bezpieczeństwo danych</h2>
            <p>Fundacja EduCode stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych:</p>
            <ul>
              <li>Szyfrowanie połączenia SSL/TLS</li>
              <li>Bezpieczne przechowywanie danych</li>
              <li>Ograniczony dostęp do danych tylko dla uprawnionych osób</li>
              <li>Regularne kopie zapasowe</li>
              <li>Szkolenia pracowników w zakresie ochrony danych</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">10. Zmiany w Polityce Prywatności</h2>
            <p>Fundacja EduCode zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach użytkownicy zostaną poinformowani poprzez aktualizację daty na początku dokumentu.</p>

            <div className="bg-[#F8F9FA] p-6 rounded-xl mt-8">
              <h3 className="font-semibold text-[#1A2332] mb-2">📧 Kontakt w sprawie danych osobowych</h3>
              <p className="text-[#1A2332]/70">Jeśli masz pytania dotyczące przetwarzania danych osobowych lub chcesz skorzystać ze swoich praw, skontaktuj się z nami:</p>
              <p><strong>Telefon:</strong> +48 500-312-226</p>
              <p><strong>Adres:</strong> Fundacja EduCode, ul. Pawłówek 11, 56-500 Syców</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
