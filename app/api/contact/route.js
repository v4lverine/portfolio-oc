import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport(
  {
    host: process.env.MAIL_HOST,
    port: +process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  },
  {
    from: process.env.MAIL_SENDER,
    to: process.env.MAIL_RECEIVER,
    subject: "FORWARD WEBSITE",
  }
);

export async function POST(req, res) {
  {
    const body = await req.json();

    const messageBody = `
    ${body.name}
    ${body.email} 
    ${body.message}`;
    await transport.sendMail({
      text: messageBody,
      html: messageBody,
    });
    return NextResponse.json({ message: "Message envoyé avec succès !" });
  }
}
