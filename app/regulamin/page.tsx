import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata = {
  title: 'Regulamin - Fundacja EduCode',
  description: 'Regulamin korzystania z serwisu Fundacji EduCode.',
}

export default function RegulaminPage() {
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2332]">Regulamin Serwisu</h1>
                <p className="text-[#1A2332]/60">Obowiązuje od: 23 stycznia 2026</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 1. Postanowienia ogólne</h2>
            <p>1. Niniejszy Regulamin określa zasady korzystania ze strony internetowej Fundacji "EduCode".</p>
            <p>2. Administratorem serwisu jest <strong>Fundacja "EduCode"</strong> z siedzibą w Sycowie, wpisana do Krajowego Rejestru Sądowego pod numerem KRS: 0001212614.</p>
            <ul>
              <li><strong>NIP:</strong> 9112060897</li>
              <li><strong>REGON:</strong> 543549091</li>
              <li><strong>Telefon:</strong> +48 500-312-226</li>
            </ul>
            <p>3. Korzystanie z serwisu oznacza akceptację niniejszego Regulaminu.</p>
            <p>4. Fundacja działa na podstawie Ustawy o fundacjach oraz własnego statutu.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 2. Definicje</h2>
            <ul>
              <li><strong>Serwis</strong> - strona internetowa Fundacji EduCode</li>
              <li><strong>Użytkownik</strong> - każda osoba fizyczna lub prawna korzystająca z Serwisu</li>
              <li><strong>Darowizna</strong> - dobrowolna wpłata finansowa na rzecz Fundacji</li>
              <li><strong>Newsletter</strong> - elektroniczna wiadomość wysyłana przez Fundację do subskrybentów</li>
              <li><strong>Wolontariusz</strong> - osoba współpracująca z Fundacją na zasadach wolontariatu</li>
            </ul>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 3. Zasady korzystania z serwisu</h2>
            <p>1. Użytkownik zobowiązuje się do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.</p>
            <p>2. Zabronione jest:</p>
            <ul>
              <li>Podejmowanie działań naruszających bezpieczeństwo Serwisu</li>
              <li>Rozpowszechnianie treści bezprawnych, obraźliwych lub wulgarnych</li>
              <li>Naruszanie praw autorskich lub innych praw własności intelektualnej</li>
              <li>Umieszczanie treści reklamowych bez zgody Fundacji</li>
              <li>Podszywanie się pod inne osoby lub instytucje</li>
            </ul>
            <p>3. Fundacja zastrzega sobie prawo do zablokowania dostępu do Serwisu osobom naruszającym Regulamin.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 4. Darowizny i płatności</h2>
            <p>1. Użytkownicy mogą wspierać Fundację poprzez jednorazowe lub cykliczne darowizny.</p>
            <p>2. Darowizny realizowane są poprzez:</p>
            <ul>
              <li>Przelewy bankowe na konto Fundacji</li>
              <li>Płatności online za pośrednictwem operatorów płatności</li>
              <li>Przekazanie 1,5% podatku</li>
            </ul>
            <p>3. Numer konta bankowego Fundacji: <strong>81 2530 0008 2041 1089 0411 0001</strong> (BIZnest Konto)</p>
            <p>4. Darowizny są dobrowolne i nieodpłatne.</p>
            <p>5. Na życzenie darczyńcy, Fundacja wystawia potwierdzenie wpłaty darowizny.</p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <strong>Ważne:</strong> Darowizny na cele statutowe Fundacji mogą być odliczane od podatku zgodnie z obowiązującymi przepisami prawa.
            </div>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 5. Newsletter</h2>
            <p>1. Użytkownik może zapisać się do newslettera Fundacji, podając swój adres e-mail.</p>
            <p>2. Newsletter zawiera informacje o działalności Fundacji, organizowanych wydarzeniach oraz możliwościach wsparcia.</p>
            <p>3. Użytkownik może w każdej chwili zrezygnować z otrzymywania newslettera.</p>
            <p>4. Fundacja nie udostępnia adresów e-mail subskrybentów osobom trzecim.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 6. Wolontariat i współpraca</h2>
            <p>1. Fundacja współpracuje z wolontariuszami na zasadach określonych w odrębnych umowach wolontariatu.</p>
            <p>2. Wolontariusze mogą wspierać Fundację w realizacji jej celów statutowych.</p>
            <p>3. Fundacja zapewnia wolontariuszom odpowiednie warunki pracy oraz szkolenia.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 7. Prawa autorskie</h2>
            <p>1. Wszelkie treści publikowane w Serwisie są chronione prawem autorskim.</p>
            <p>2. Kopiowanie, rozpowszechnianie lub wykorzystywanie treści Serwisu wymaga pisemnej zgody Fundacji.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 8. Odpowiedzialność</h2>
            <p>1. Fundacja nie ponosi odpowiedzialności za przerwy w działaniu Serwisu spowodowane siłą wyższą lub działaniem osób trzecich.</p>
            <p>2. Fundacja dokłada wszelkich starań, aby informacje publikowane w Serwisie były aktualne i rzetelne.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 9. Ochrona danych osobowych</h2>
            <p>1. Zasady przetwarzania danych osobowych określa <Link href="/polityka-prywatnosci" className="text-[#FF6B35] hover:underline">Polityka Prywatności</Link>.</p>
            <p>2. Fundacja przetwarza dane osobowe zgodnie z Rozporządzeniem RODO.</p>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">§ 10. Postanowienia końcowe</h2>
            <p>1. Fundacja zastrzega sobie prawo do wprowadzania zmian w Regulaminie.</p>
            <p>2. W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.</p>

            <div className="bg-[#F8F9FA] p-6 rounded-xl mt-8">
              <h3 className="font-semibold text-[#1A2332] mb-2">📞 Kontakt</h3>
              <p className="text-[#1A2332]/70">W przypadku pytań dotyczących Regulaminu prosimy o kontakt:</p>
              <p><strong>Telefon:</strong> +48 500-312-226</p>
              <p><strong>Fundacja EduCode</strong>, Syców</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
