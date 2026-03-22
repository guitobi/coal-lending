import { transporter } from "../config/mailer.js";
import {
  getEmailLocale,
  renderProblemCustomerEmail,
  renderProblemManagerEmail,
} from "../emails/templates.js";

const MAIL_FROM = process.env.MAIL_FROM || "orders@vanshare.pl";
const CONTACT_EMAIL_TO =
  process.env.CONTACT_EMAIL_TO || process.env.EMAIL_TO || "vanshare1@gmail.com";

export const createProblem = async (req, res) => {
  const data = req.body;
  console.log("data arrived");
  console.log(data);

  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "No data provided" });
  }

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

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({
      success: false,
      message: "Message received but failed to send email",
      error: error.message,
    });
  }
};
