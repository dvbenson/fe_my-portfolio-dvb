// api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Use your email service's SMTP host
    port: 465,
    auth: {
      user: 'danielvb@danielvb.dev', // Your email address
      pass: 'your_email_password', // Your email password
    },
  });

  const mailOptions = {
    from: email,
    to: 'your@email.com',
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
