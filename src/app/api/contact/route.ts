import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    // TODO: Integrate your email provider here.
    // Options: Resend, SendGrid, Nodemailer, etc.
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'CoreDevAI <noreply@coredevai.com>',
    //   to: 'hello@coredevai.com',
    //   subject: `New inquiry from ${data.name}`,
    //   html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p>...`
    // });

    console.log("New contact form submission:", data);

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
