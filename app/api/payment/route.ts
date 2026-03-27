import { NextRequest, NextResponse } from 'next/server'
import { P24, Order, Currency, Country, Language } from '@ingameltd/node-przelewy24'

const MERCHANT_ID = Number(process.env.P24_MERCHANT_ID)
const IS_SANDBOX = process.env.P24_USE_SANDBOX === 'true'
const CRC = IS_SANDBOX ? process.env.P24_SANDBOX_CRC! : process.env.P24_CRC!
const REPORT_KEY = process.env.P24_REPORT_KEY!

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json()

    const num = parseFloat(amount)
    if (!amount || isNaN(num) || num <= 0) {
      return NextResponse.json({ error: 'Nieprawidłowa kwota' }, { status: 400 })
    }

    const p24 = new P24(MERCHANT_ID, MERCHANT_ID, REPORT_KEY, CRC, {
      sandbox: IS_SANDBOX,
    })

    const sessionId = `EDUCODE-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    const baseUrl = 'https://educode.org.pl'

    const order: Order = {
      sessionId,
      amount: Math.round(num * 100),
      currency: Currency.PLN,
      description: frequency === 'monthly'
        ? 'Darowizna miesięczna - Fundacja EduCode'
        : 'Darowizna jednorazowa - Fundacja EduCode',
      email: 'kontakt@educode.org.pl',
      country: Country.Poland,
      language: Language.PL,
      urlReturn: `${baseUrl}/podziekowanie`,
      urlStatus: `${baseUrl}/api/payment/notify`,
    }

    const result = await p24.createTransaction(order)
    return NextResponse.json({ redirectUrl: result.toString() })

  } catch (err: any) {
    console.error('P24 error:', err?.message ?? err)
    return NextResponse.json({ error: 'Błąd rejestracji transakcji' }, { status: 500 })
  }
}
