import { transporter } from "../config/mailer.js";
import {
  getEmailLocale,
  renderOrderCustomerEmail,
  renderOrderManagerEmail,
} from "../emails/templates.js";
import logger from "../config/logger.js";

const MAIL_FROM = process.env.MAIL_FROM || "orders@vanshare.pl";
const CONTACT_EMAIL_TO =
  process.env.CONTACT_EMAIL_TO || process.env.EMAIL_TO || "vanshare1@gmail.com";

export const createOrder = async (req, res) => {
  // Data is already validated by the validate middleware
  const data = req.body;

  // Log order received without PII
  logger.info("New order received", {
    weightInKg: data.weightInKg,
    hasComment: !!data.comment,
  });

  const { name, email, phoneNumber, city, weightInKg, comment, lang, productType, quantityBags } = data;
  const locale = getEmailLocale(lang);

  try {
    const managerEmail = renderOrderManagerEmail(locale, {
      name,
      email,
      phoneNumber,
      city,
      weightInKg,
      comment,
      productType,
      quantityBags,
    });

    await transporter.sendMail({
      from: MAIL_FROM,
      replyTo: email || MAIL_FROM,
      to: CONTACT_EMAIL_TO,
      subject: managerEmail.subject,
      html: managerEmail.html,
    });

    if (email) {
      const customerEmail = renderOrderCustomerEmail(locale, {
        name,
        city,
        weightInKg,
        productType,
        quantityBags,
      });

      try {
        await transporter.sendMail({
          from: MAIL_FROM,
          replyTo: CONTACT_EMAIL_TO,
          to: email,
          subject: customerEmail.subject,
          html: customerEmail.html,
        });
      } catch (error) {
        // The manager already has the order: never invite a duplicate submission.
        logger.warn("Customer order confirmation failed", { error: error.message });
      }
    }

    logger.info("Order delivered to manager");
    res.json({ success: true, message: "Order received" });
  } catch (error) {
    logger.error("Error sending order email", { error: error.message, stack: error.stack });
    // Don't leak error details to client
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
};
