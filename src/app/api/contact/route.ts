import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email non valida" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission
    console.log("New contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Messaggio inviato con successo" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Errore del server" },
      { status: 500 }
    );
  }
}
