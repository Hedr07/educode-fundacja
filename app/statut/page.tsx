import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, ScrollText } from 'lucide-react'

export const metadata = {
  title: 'Statut Fundacji - Fundacja EduCode',
  description: 'Statut Fundacji EduCode - cele, organizacja i zasady działania.',
}

export default function StatutPage() {
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
              <div className="w-16 h-16 bg-[#1A2332] rounded-2xl flex items-center justify-center">
                <ScrollText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2332]">Statut Fundacji "EduCode"</h1>
                <p className="text-[#1A2332]/60">Akt założycielski z dnia 26 listopada 2025 r.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
            <h3 className="font-semibold text-[#1A2332] mb-4">📋 Dane rejestrowe Fundacji</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="font-semibold text-[#FF6B35]">KRS</div>
                <div>0001212614</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="font-semibold text-[#FF6B35]">NIP</div>
                <div>9112060897</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="font-semibold text-[#FF6B35]">REGON</div>
                <div>543549091</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="font-semibold text-[#FF6B35]">Siedziba</div>
                <div>Syców</div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">I. Postanowienia ogólne</h2>
            
            <div className="bg-[#F8F9FA] p-4 rounded-lg border-l-4 border-[#FF6B35] my-4">
              <h3 className="text-[#1A2332] mt-0">§ 1</h3>
              <p>1. Fundacja pod nazwą <strong>„EduCode”</strong>, zwana dalej „Fundacją”, jest ustanowiona przez p. Marek Samiec, obywatela Republiki Czeskiej, w dniu 26 listopada 2025 r. aktem notarialnym Repertorium A nr 53276/2025.</p>
              <p className="mb-0">2. Fundacja działa na podstawie przepisów prawa polskiego oraz niniejszego statutu.</p>
            </div>

            <div className="bg-[#F8F9FA] p-4 rounded-lg border-l-4 border-[#FF6B35] my-4">
              <h3 className="text-[#1A2332] mt-0">§ 2</h3>
              <p>1. Fundacja posiada osobowość prawną.</p>
              <p>2. Siedzibą Fundacji jest miasto <strong>Syców</strong>.</p>
              <p>3. Fundacja została powołana na czas nieokreślony.</p>
              <p>4. Fundacja jest <strong>apolityczna</strong> i nie związana z żadnym wyznaniem.</p>
              <p>5. Fundacja działa na terenie Rzeczypospolitej Polskiej oraz poza jej granicami.</p>
              <p className="mb-0">6. Nadzór nad Fundacją sprawuje minister właściwy ds. kultury i dziedzictwa narodowego.</p>
            </div>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">II. Cele statutowe Fundacji</h2>
            
            <div className="bg-[#F8F9FA] p-4 rounded-lg border-l-4 border-[#FF6B35] my-4">
              <h3 className="text-[#1A2332] mt-0">§ 3</h3>
              <p><strong>Głównym celem Fundacji „EduCode”</strong> jest rozwijanie umiejętności i wiedzy dzieci i młodzieży, a także promowanie umiejętnego i bezpiecznego korzystania z nowych technologii.</p>
              
              <div className="bg-amber-50 p-4 rounded-lg my-4">
                <p className="font-semibold">Szczegółowe cele statutowe:</p>
                <ol type="a" className="mb-0">
                  <li>Rozwijanie umiejętności i wiedzy dzieci i młodzieży poprzez promowanie umiejętnego i bezpiecznego korzystania z nowych technologii</li>
                  <li>Organizowanie i niesienie pomocy w zakresie działalności pożytku publicznego</li>
                  <li>Wyrównywanie szans edukacyjnych przez wykorzystanie nowoczesnych technologii</li>
                  <li>Prowadzenie działań profilaktycznych w zakresie zdrowego stylu życia</li>
                  <li>Działania na rzecz integracji i wsparcia osób defaworyzowanych społecznie</li>
                </ol>
              </div>
            </div>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">III. Majątek i dochody Fundacji</h2>
            
            <div className="bg-[#F8F9FA] p-4 rounded-lg border-l-4 border-[#FF6B35] my-4">
              <h3 className="text-[#1A2332] mt-0">§ 4</h3>
              <p>1. Majątek Fundacji stanowi fundusz założycielski w kwocie <strong>3000 zł</strong>.</p>
              <p>2. Fundacja prowadzi działalność gospodarczą w zakresie określonym przez prawo.</p>
              <p>3. Suma środków przeznaczonych na działalność gospodarczą wynosi <strong>1000 zł</strong>.</p>
              <p>4. Dochód uzyskany z działalności gospodarczej jest w całości przeznaczany na realizację celów statutowych.</p>
              <p className="font-semibold">Dochody Fundacji mogą pochodzić z:</p>
              <ul className="mb-0">
                <li>Darowizn krajowych i zagranicznych</li>
                <li>Spadków i zapisów</li>
                <li>Dotacji, subwencji oraz grantów</li>
                <li>Akcji promocyjnych, zbiórek i imprez publicznych</li>
                <li>Wpłat 1,5% podatku od podatników</li>
                <li>Dochodów z działalności odpłatnej i gospodarczej</li>
              </ul>
            </div>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">V. Zarząd Fundacji</h2>
            
            <div className="bg-[#F8F9FA] p-4 rounded-lg border-l-4 border-[#FF6B35] my-4">
              <h3 className="text-[#1A2332] mt-0">§ 6</h3>
              <p>1. Zarządzanie Fundacją odbywa się przez <strong>Zarząd Fundacji</strong>, który składa się z 1-5 członków, w tym Prezesa Zarządu.</p>
              <p>2. Członkowie Zarządu są powoływani na kadencję trwającą <strong>trzy lata</strong>.</p>
              <p>3. Zarząd kieruje działalnością Fundacji, reprezentuje ją na zewnątrz i ponosi odpowiedzialność za jej działania.</p>
              <p className="mb-0">4. Każdy członek Zarządu jest uprawniony do <strong>samodzielnej reprezentacji</strong> Fundacji.</p>
            </div>

            <h2 className="text-[#1A2332] border-b-2 border-[#FF6B35] pb-2">IX. Postanowienia końcowe</h2>
            
            <div className="bg-[#F8F9FA] p-4 rounded-lg border-l-4 border-[#FF6B35] my-4">
              <p>1. Wszelkie sprawy nieuregulowane niniejszym statutem rozstrzygane będą zgodnie z obowiązującymi przepisami prawa polskiego.</p>
              <p>2. Fundacja może być członkiem innych organizacji krajowych i międzynarodowych.</p>
              <p className="mb-0"><strong>Statut wchodzi w życie z dniem zarejestrowania Fundacji w Krajowym Rejestrze Sądowym.</strong></p>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mt-8">
              <h3 className="font-semibold text-[#1A2332] mb-2">📞 Kontakt</h3>
              <p><strong>Fundacja EduCode</strong></p>
              <p>Syców</p>
              <p><strong>Telefon:</strong> +48 500-312-226</p>
              <p className="mb-0"><strong>NIP:</strong> 9112060897 | <strong>REGON:</strong> 543549091 | <strong>KRS:</strong> 0001212614</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
