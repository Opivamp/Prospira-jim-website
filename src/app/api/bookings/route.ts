import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, selectedFocus, preferredSlot, notes, hasConsented } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email address is required." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    if (!hasConsented) {
      return NextResponse.json({ error: "Agreement consent is required." }, { status: 400 });
    }

    // Generate unique reservation reference code
    const confirmationCode = `PRO-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    return NextResponse.json(
      {
        success: true,
        confirmationCode,
        message: "Intake reservation registered successfully.",
        data: {
          fullName,
          email,
          selectedFocus,
          preferredSlot,
          timestamp,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload or server error." },
      { status: 500 }
    );
  }
}
