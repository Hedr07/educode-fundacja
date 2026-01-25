import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { MissionSection } from '@/components/mission-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProgramsSection } from '@/components/programs-section'
import { SuccessStoriesSection } from '@/components/success-stories-section'
import { DonationSection } from '@/components/donation-section'
import { FaqSection } from '@/components/faq-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <ExperienceSection />
      <ProgramsSection />
      <SuccessStoriesSection />
      <DonationSection />
      <FaqSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
