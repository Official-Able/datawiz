import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Enquiry = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let input: Enquiry;
  try {
    const body: unknown = await request.json();
    if (body === null || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid body");
    input = body as Enquiry;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const company = typeof input.company === "string" ? input.company.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (
    !name || name.length > 200 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    company.length > 200 || message.length < 10 || message.length > 5000
  ) {
    return NextResponse.json({ error: "Please check your details" }, { status: 400 });
  }

  const apiUrl = process.env.DATAWIZABLE_API_URL || "http://localhost:8000";
  try {
    const response = await fetch(`${apiUrl}/api/leads/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, message }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Enquiry could not be saved" }, { status: 502 });
    }
    return NextResponse.json({ received: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Enquiry service unavailable" }, { status: 502 });
  }
}
