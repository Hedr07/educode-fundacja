import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const MERCHANT_ID = Number(process.env.P24_MERCHANT_ID)
const API_KEY = process.env.P24_API_KEY!
const CRC = process.env.P24_CRC!
const BASE_URL = 'https://secure.przelewy24.pl/api/v1'

function calculateSHA384(data: string): string {
  return crypto.createHash('sha384').update(data).digest('hex')
}

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json()
    const num = parseFloat(amount)

    if (!amount || isNaN(num) || num <= 0) {
      return NextResponse.json({ error: 'Nieprawidłowa kwota' }, { status: 400 })
    }

    const sessionId = `EDUCODE-${Date.now()}`
    const amountInGrosze = Math.round(num * 100)

    const hashData = {
      sessionId,
      merchantId: MERCHANT_ID,
      amount: amountInGrosze,
      currency: 'PLN',
      crc: CRC,
    }
    const sign = calculateSHA384(JSON.stringify(hashData))

    const order = {
      merchantId: MERCHANT_ID,
      posId: MERCHANT_ID,
      sessionId,
      amount: amountInGrosze,
      currency: 'PLN',
      description: frequency === 'monthly'
        ? 'Darowizna miesięczna - Fundacja EduCode'
        : 'Darowizna jednorazowa - Fundacja EduCode',
      email: 'kontakt@educode.org.pl',
      country: 'PL',
      language: 'pl',
      urlReturn: 'https://educode.org.pl/podziekowanie',
      urlStatus: 'https://educode.org.pl/api/payment/notify',
      timeLimit: 20,
      encoding: 'UTF-8',
      sign,
    }

    const credentials = Buffer.from(`${MERCHANT_ID}:${API_KEY}`).toString('base64')

    const response = await fetch(`${BASE_URL}/transaction/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
      body: JSON.stringify(order),
    })

    const data = await response.json()
    console.log('P24 response:', response.status, JSON.stringify(data))

    if (!response.ok || !data?.data?.token) {
      return NextResponse.json({ error: `P24 error: ${JSON.stringify(data)}` }, { status: 500 })
    }

    const redirectUrl = `https://secure.przelewy24.pl/trnRequest/${data.data.token}`
    return NextResponse.json({ redirectUrl })

  } catch (err: any) {
    console.error('P24 exception:', err?.message ?? err)
    return NextResponse.json({ error: err?.message ?? 'Błąd serwera' }, { status: 500 })
  }
}
