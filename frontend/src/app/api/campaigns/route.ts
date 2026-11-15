import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiUrl = process.env.DATAWIZABLE_API_URL || "http://localhost:8000";
  try {
    const response = await fetch(`${apiUrl}/api/campaigns/`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return NextResponse.json([], { status: 200 });
    const data: unknown = await response.json();
    return NextResponse.json(Array.isArray(data) ? data : [], {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
