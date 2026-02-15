import { transporter } from "../config/mailer.js";

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

  try {
    await transporter.sendMail({
      from: "skullvisit@gmail.com",
      to: "stratilatov.oleksandr@gmail.com", //TODO: change to user email after testing
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
