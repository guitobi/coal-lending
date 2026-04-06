import { transporter } from "../config/mailer.js";
import {
  getEmailLocale,
  renderProblemCustomerEmail,
  renderProblemManagerEmail,
} from "../emails/templates.js";
import logger from "../config/logger.js";

const MAIL_FROM = process.env.MAIL_FROM || "orders@vanshare.pl";
const CONTACT_EMAIL_TO =
  process.env.CONTACT_EMAIL_TO || process.env.EMAIL_TO || "vanshare1@gmail.com";

export const createProblem = async (req, res) => {
  // Data is already validated by the validate middleware
  const data = req.body;

  // Log contact form submission without PII
  logger.info("New contact message received", {
    subject: data.subject,
    messageLength: data.message?.length || 0,
  });

  const { name, email, subject, message, lang } = data;
  const locale = getEmailLocale(lang);

  try {
    const managerEmail = renderProblemManagerEmail(locale, {
      name,
      email,
      subject,
      message,
    });

    await transporter.sendMail({
      from: MAIL_FROM,
      replyTo: email || MAIL_FROM,
      to: CONTACT_EMAIL_TO,
      subject: managerEmail.subject,
      html: managerEmail.html,
    });

    if (email) {
      const customerEmail = renderProblemCustomerEmail(locale, { name });

      await transporter.sendMail({
        from: MAIL_FROM,
        replyTo: CONTACT_EMAIL_TO,
        to: email,
        subject: customerEmail.subject,
        html: customerEmail.html,
      });
    }

    logger.info("Contact email sent successfully");
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    logger.error("Error sending contact email", { error: error.message, stack: error.stack });
    // Don't leak error details to client
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
};
