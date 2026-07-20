import { NextRequest, NextResponse } from "next/server";
import { generateReactCode } from "@/lib/openai";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const prompt = body?.prompt;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "A prompt string is required." },
        { status: 400 }
      );
    }

    if (prompt.length > 2000) {
      return NextResponse.json(
        { error: "Prompt must be 2000 characters or fewer." },
        { status: 400 }
      );
    }

    const code = await generateReactCode(prompt);
    return NextResponse.json({ code });
  } catch (err: unknown) {
    console.error("[/api/generate] Error:", err);

    const message =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    const status = message.includes("API key") ? 401 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
