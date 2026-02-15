import nodemailer from "nodemailer";
import "dotenv/config";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "skullvisit@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
