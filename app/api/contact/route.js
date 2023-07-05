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
    <h3>Message de : ${body.name}</h3>
    <a href='mailto:${body.email}'>${body.email}</a> 
    <p>${body.message}</p>`;
    await transport.sendMail({
      text: messageBody,
      html: messageBody,
    });
    return NextResponse.json({ message: "Message envoyé avec succès !" });
  }
}
