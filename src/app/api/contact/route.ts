import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(20),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CoreDevAI Website" <${process.env.SMTP_USER}>`,
      to: "contact@coredevai.com",
      replyTo: data.email,
      subject: `New Inquiry from ${data.name} — ${data.service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td><td style="padding: 8px 0;">${data.company || "—"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
            <p style="background: #f4f4f5; padding: 16px; border-radius: 8px; line-height: 1.6;">${data.message.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from coredevai.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
