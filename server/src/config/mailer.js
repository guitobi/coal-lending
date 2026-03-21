import nodemailer from "nodemailer";
import "dotenv/config";

const MAIL_USER =
  process.env.SMTP_USER || process.env.MAIL_FROM || "skullvisit@gmail.com";
const MAIL_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});
