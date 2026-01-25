import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const { name, email, subject, message } = body ?? {}

    if (!name || typeof name !== 'string' || name?.trim?.()?.length === 0) {
      return NextResponse.json({ error: 'Wymagane jest imię' }, { status: 400 })
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Wymagany jest adres email' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex?.test?.(email)) {
      return NextResponse.json({ error: 'Nieprawidłowy format adresu email' }, { status: 400 })
    }

    if (!subject || typeof subject !== 'string' || subject?.trim?.()?.length === 0) {
      return NextResponse.json({ error: 'Wymagany jest temat' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || message?.trim?.()?.length === 0) {
      return NextResponse.json({ error: 'Wymagana jest wiadomość' }, { status: 400 })
    }

    await prisma?.contactFormSubmission?.create?.({
      data: {
        name: name?.trim?.() ?? '',
        email: email?.trim?.() ?? '',
        subject: subject?.trim?.() ?? '',
        message: message?.trim?.() ?? '',
      },
    })

    return NextResponse.json({ success: true, message: 'Wiadomość wysłana pomyślnie' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Wystąpił błąd serwera' }, { status: 500 })
  }
}
