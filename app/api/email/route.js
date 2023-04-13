import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;
  const msg = {
    to: 'danielvb@danielvb.dev',
    from: 'danielvb@danielvb.dev',
    subject: `Form Submission from ${name} email: ${email}, Subject: ${subject}`,
    text: message,
  };
  console.log(msg);
  try {
    await sgMail.send(msg);
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json({ status: 'error' });
  }
}
