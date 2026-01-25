import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'
import { StickyCtaBar } from '@/components/sticky-cta-bar'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Fundacja EduCode - Od klocków LEGO do kariery w IT',
  description: 'Fundacja EduCode wspiera edukację technologiczną dzieci i młodzieży poprzez programowanie, robotykę LEGO i konkursy. Wyrównujemy szanse edukacyjne.',
  keywords: 'fundacja, edukacja, programowanie, LEGO, robotyka, STEAM, dzieci, młodzież, Syców',
  authors: [{ name: 'Fundacja EduCode' }],
  openGraph: {
    title: 'Fundacja EduCode - Od klocków LEGO do kariery w IT',
    description: 'Wspieramy edukację technologiczną dzieci i młodzieży poprzez programowanie, robotykę LEGO i konkursy.',
    url: '/',
    siteName: 'Fundacja EduCode',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fundacja EduCode' }],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundacja EduCode',
    description: 'Od klocków LEGO do kariery w IT',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <CookieBanner />
        <StickyCtaBar />
      </body>
    </html>
  )
}
