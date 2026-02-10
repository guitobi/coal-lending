import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "skullvisit@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.use(cors());
app.use(express.json());

app.post("/api/order/new", async (req, res) => {
  const data = req.body;
  console.log("data arrived");
  console.log(data);

  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "No data provided" });
  }

  const { name, email, phoneNumber, city, weightInKg } = data;

  // Validate minimum order
  if (!weightInKg || weightInKg < 100) {
    return res.status(400).json({
      success: false,
      message: "Minimum order is 100 kg",
    });
  }

  try {
    await transporter.sendMail({
      from: "skullvisit@gmail.com",
      to: email,
      subject: "Charcoal Order Confirmation",
      text: "Thanks for ordering our product!",
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
      message: "Order received but failed to send email",
      error: error.message,
    });
  }
});

app.post("api/problem/new", async (req, res) => {
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
        <p><strong>Subject:</strong> ${subject} kg</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({
      success: false,
      message: "Message received but failed to send email",
      error: error.message,
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runinng");
});
