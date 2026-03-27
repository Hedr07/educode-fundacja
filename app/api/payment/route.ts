import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const P24_MERCHANT_ID = process.env.P24_MERCHANT_ID!
const P24_API_KEY = process.env.P24_API_KEY!
const P24_CRC = process.env.P24_CRC!
const P24_BASE_URL = 'https://secure.przelewy24.pl'

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json()

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ error: 'Nieprawidłowa kwota' }, { status: 400 })
    }

    const amountInGrosze = Math.round(Number(amount) * 100)
    const sessionId = `EDUCODE-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    const description = frequency === 'monthly'
      ? `Darowizna miesięczna - Fundacja EduCode`
      : `Darowizna jednorazowa - Fundacja EduCode`

    const baseUrl = process.env.NEXTAUTH_URL || 'https://educode.org.pl'

    // Generowanie podpisu SHA384
    const signData = JSON.stringify({
      sessionId,
      merchantId: Number(P24_MERCHANT_ID),
      amount: amountInGrosze,
      currency: 'PLN',
      crc: P24_CRC,
    })
    const sign = crypto.createHash('sha384').update(signData).digest('hex')

    const body = {
      merchantId: Number(P24_MERCHANT_ID),
      posId: Number(P24_MERCHANT_ID),
      sessionId,
      amount: amountInGrosze,
      currency: 'PLN',
      description,
      email: 'kontakt@educode.org.pl',
      country: 'PL',
      language: 'pl',
      urlReturn: `${baseUrl}/podziekowanie`,
      urlStatus: `${baseUrl}/api/payment/notify`,
      sign,
    }

    const credentials = Buffer.from(`${P24_MERCHANT_ID}:${P24_API_KEY}`).toString('base64')

    const response = await fetch(`${P24_BASE_URL}/api/v1/transaction/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!response.ok || !data.data?.token) {
      console.error('P24 error:', data)
      return NextResponse.json({ error: 'Błąd rejestracji transakcji' }, { status: 500 })
    }

    const redirectUrl = `${P24_BASE_URL}/trnRequest/${data.data.token}`
    return NextResponse.json({ redirectUrl })

  } catch (err) {
    console.error('Payment error:', err)
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 })
  }
}
