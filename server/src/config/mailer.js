import { Resend } from "resend";
import "dotenv/config";

const MAIL_FROM = process.env.MAIL_FROM || "orders@vanshare.pl";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function normalizeRecipients(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .flatMap((item) => String(item).split(","))
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export const transporter = {
  async sendMail({ from, to, subject, html, text, replyTo }) {
    if (!resend) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const recipients = normalizeRecipients(to);

    if (recipients.length === 0) {
      throw new Error("Email recipient is required");
    }

    const payload = {
      from: from || MAIL_FROM,
      to: recipients,
      subject,
      html,
      text,
    };

    const replyToList = normalizeRecipients(replyTo);
    if (replyToList.length > 0) {
      payload.replyTo = replyToList;
    }

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      throw new Error(error.message || "Failed to send email via Resend");
    }

    return data;
  },
};
