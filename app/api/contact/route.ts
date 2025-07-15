import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define types for the incoming request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Create a transporter using your SMTP configuration (or Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any other service
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password or App password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL, // Recipient email address
      subject: `New message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ success: false, error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
