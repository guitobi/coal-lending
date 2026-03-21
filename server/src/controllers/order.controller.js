import { transporter } from "../config/mailer.js";

const MAIL_FROM =
  process.env.MAIL_FROM || process.env.SMTP_USER || "skullvisit@gmail.com";

// Експортуємо саму функцію обробки
export const createOrder = async (req, res) => {
  const data = req.body;
  console.log("Order data arrived:", data);

  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "No data provided" });
  }

  const { name, email, phoneNumber, city, weightInKg } = data;
  const senderEmail = email || MAIL_FROM;

  if (!weightInKg || weightInKg < 100) {
    return res
      .status(400)
      .json({ success: false, message: "Minimum order is 100 kg" });
  }

  try {
    await transporter.sendMail({
      from: senderEmail,
      replyTo: email || MAIL_FROM,
      to: email,
      subject: "Charcoal Order Confirmation",
      html: `
        <h2>Your order details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone number:</strong> ${phoneNumber}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Order weight:</strong> ${weightInKg} kg</p>
        <p><strong>Estimated price:</strong> €${(weightInKg * 0.95).toFixed(2)}</p>
        <h3>Our manager will contact you soon! Be on phone😉</h3>
        <p style="color: #666; font-size: 12px;">Base price: €0.95/kg | Delivery: DAP Polkowice</p>
      `,
    });

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
