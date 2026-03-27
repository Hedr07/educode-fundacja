import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const MERCHANT_ID = Number(process.env.P24_MERCHANT_ID)
const API_KEY = process.env.P24_API_KEY!
const CRC = process.env.P24_CRC!

function calculateSHA384(data: string): string {
  return crypto.createHash('sha384').update(data).digest('hex')
}

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json()
    const num = parseFloat(amount)

    // DIAGNOSTYKA
    console.log('=== P24 START ===')
    console.log('MERCHANT_ID:', MERCHANT_ID)
    console.log('API_KEY length:', API_KEY?.length ?? 'BRAK')
    console.log('API_KEY first4:', API_KEY?.slice(0, 4) ?? 'BRAK')
    console.log('CRC length:', CRC?.length ?? 'BRAK')
    console.log('CRC first4:', CRC?.slice(0, 4) ?? 'BRAK')
    console.log('amount:', num)
    console.log('frequency:', frequency)

    if (!amount || isNaN(num) || num <= 0) {
      return NextResponse.json({ error: 'Nieprawidłowa kwota' }, { status: 400 })
    }

    const sessionId = `EDUCODE-${Date.now()}`
    const amountInGrosze = Math.round(num * 100)

    const sign = calculateSHA384(JSON.stringify({
      sessionId,
      merchantId: MERCHANT_ID,
      amount: amountInGrosze,
      currency: 'PLN',
      crc: CRC,
    }))

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
    console.log('credentials first8:', credentials.slice(0, 8))
    console.log('Sending to: https://secure.przelewy24.pl/api/v1/transaction/register')

    const response = await fetch('https://secure.przelewy24.pl/api/v1/transaction/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
      body: JSON.stringify(order),
    })

    const data = await response.json()
    console.log('P24 status:', response.status)
    console.log('P24 response:', JSON.stringify(data))
    console.log('=== P24 END ===')

    if (!response.ok || !data?.data?.token) {
      return NextResponse.json({ error: JSON.stringify(data) }, { status: 500 })
    }

    return NextResponse.json({
      redirectUrl: `https://secure.przelewy24.pl/trnRequest/${data.data.token}`
    })

  } catch (err: any) {
    console.error('P24 exception:', err?.message ?? err)
    return NextResponse.json({ error: err?.message ?? 'Błąd serwera' }, { status: 500 })
  }
}
