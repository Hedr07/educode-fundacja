import { NextResponse } from "next/server";
import {
  P24,
  Currency,
  Country,
  Language,
  Encoding,
} from "@ingameltd/node-przelewy24";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amount = Number(body.amount);

    const useSandbox = process.env.P24_USE_SANDBOX === "true";

    const merchantId = Number(process.env.P24_MERCHANT_ID);
    const posId = Number(
      process.env.P24_POS_ID ?? process.env.P24_MERCHANT_ID
    );

    const apiKey = useSandbox
      ? process.env.P24_SANDBOX_API_KEY
      : process.env.P24_API_KEY;

    const crc = useSandbox
      ? process.env.P24_SANDBOX_CRC
      : process.env.P24_CRC;

    // === DEBUG START ===
    console.log("=== P24 DEBUG START ===");
    console.log("useSandbox:", useSandbox);
    console.log("merchantId:", merchantId);
    console.log("posId:", posId);
    console.log("apiKey:", apiKey);
    console.log("crc:", crc);
    console.log("REQUEST_BODY:", body);
    console.log("=== P24 DEBUG END ===");
    // === DEBUG END ===

    const p24 = new P24(merchantId, posId, crc!);
    p24.setSandbox(useSandbox);
    p24.setApiKey(apiKey!);

    const sessionId = `donation_${Date.now()}`;

    const order = {
      sessionId,
      amount: amount * 100,
      currency: Currency.PLN,
      description: "Darowizna na fundację EduCode",
      email: body.email ?? "donor@educode.org.pl",
      country: Country.Poland,
      language: Language.PL,
      urlReturn: "https://educode.org.pl/",
      urlStatus: "https://educode.org.pl/api/payment/status",
      encoding: Encoding.UTF8,
    };

    const paymentUrl = await p24.createTransaction(order);

    return NextResponse.json({ url: paymentUrl });
  } catch (err: any) {
    console.error("P24 error:", err);
    return NextResponse.json(
      { error: err.message ?? "P24 error" },
      { status: 500 }
    );
  }
}
