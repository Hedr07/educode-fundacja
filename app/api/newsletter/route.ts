import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const { email, consent } = body ?? {}

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Wymagany jest adres email' }, { status: 400 })
    }

    if (!consent) {
      return NextResponse.json({ error: 'Wymagana jest zgoda na przetwarzanie danych' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex?.test?.(email)) {
      return NextResponse.json({ error: 'Nieprawidłowy format adresu email' }, { status: 400 })
    }

    const existingSubscription = await prisma?.newsletterSubscription?.findUnique?.({
      where: { email },
    })

    if (existingSubscription) {
      return NextResponse.json({ error: 'Ten adres email jest już zapisany do newslettera' }, { status: 400 })
    }

    await prisma?.newsletterSubscription?.create?.({
      data: {
        email,
        consent: true,
      },
    })

    return NextResponse.json({ success: true, message: 'Zapisano do newslettera' })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Wystąpił błąd serwera' }, { status: 500 })
  }
}
