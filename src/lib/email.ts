import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED === "true", // false to allow self-signed
  },
});

export function sendEmail(to: string, subject: string, text: string) {
  return transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
  });
}
