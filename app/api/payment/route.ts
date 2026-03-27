import { NextResponse } from "next/server";
import { Przelewy24 } from "@ingameltd/node-przelewy24";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amount = Number(body.amount);

    const useSandbox = process.env.P24_USE_SANDBOX === "true";

    const merchantId = Number(process.env.P24_MERCHANT_ID);
    const posId = Number(process.env.P24_POS_ID);

    const apiKey = useSandbox
      ? process.env.P24_SANDBOX_API_KEY
      : process.env.P24_API_KEY;

    const crc = useSandbox
      ? process.env.P24_SANDBOX_CRC
      : process.env.P24_CRC;

    const p24 = new Przelewy24({
      merchantId,
      posId,
      apiKey: apiKey!,
      crc: crc!,
      sandbox: useSandbox,
    });

    const sessionId = `donation_${Date.now()}`;

    const result = await p24.registerTransaction({
      sessionId,
      amount: amount * 100,
      currency: "PLN",
      description: "Darowizna na fundację EduCode",
      email: "donor@educode.org.pl",
      urlReturn: "https://educode.org.pl/",
      urlStatus: "https://educode.org.pl/api/payment/status",
    });

    if (!result || !result.token) {
      console.error("P24 register error:", result);
      return NextResponse.json({ error: "P24 register failed" }, { status: 500 });
    }

    const redirectUrl = p24.getPaymentUrl(result.token);

    return NextResponse.json({ url: redirectUrl });
  } catch (err: any) {
    console.error("P24 error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
