import { transporter } from "../config/mailer.js";
import {
  getEmailLocale,
  renderOrderCustomerEmail,
  renderOrderManagerEmail,
} from "../emails/templates.js";

const MAIL_FROM = process.env.MAIL_FROM || "orders@vanshare.pl";
const CONTACT_EMAIL_TO =
  process.env.CONTACT_EMAIL_TO || process.env.EMAIL_TO || "vanshare1@gmail.com";

export const createOrder = async (req, res) => {
  const data = req.body;
  console.log("Order data arrived:", data);

  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "No data provided" });
  }

  const { name, email, phoneNumber, city, weightInKg, comment, lang } = data;
  const locale = getEmailLocale(lang);

  if (!weightInKg || weightInKg < 100) {
    return res
      .status(400)
      .json({ success: false, message: "Minimum order is 100 kg" });
  }

  try {
    const managerEmail = renderOrderManagerEmail(locale, {
      name,
      email,
      phoneNumber,
      city,
      weightInKg,
      comment,
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
      });

      await transporter.sendMail({
        from: MAIL_FROM,
        replyTo: CONTACT_EMAIL_TO,
        to: email,
        subject: customerEmail.subject,
        html: customerEmail.html,
      });
    }

    console.log(`Email sent successfully to ${email}`);
    res.json({ success: true, message: "Order received and email sent" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};
