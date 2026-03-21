import { transporter } from "../config/mailer.js";

const MAIL_FROM =
  process.env.MAIL_FROM || process.env.SMTP_USER || "skullvisit@gmail.com";
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

  const { name, email, subject, message } = data;
  const senderEmail = email || MAIL_FROM;

  try {
    await transporter.sendMail({
      from: senderEmail,
      replyTo: email || MAIL_FROM,
      to: CONTACT_EMAIL_TO,
      subject: "Client contact message!",
      text: "Client saying: ",
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

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
