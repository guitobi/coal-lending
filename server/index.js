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

  const { name, email, phoneNumber, numberOfBags, packageType, totalWeigth } =
    data;

  try {
    await transporter.sendMail({
      from: "skullvisit@gmail.com",
      to: email,
      subject: "Coal Order info",
      text: "Thanks for ordering our product!",
      html: `
        <h2>Your order details</h2>
        <p>Name: ${name}</p>
        <p>Phone number: ${phoneNumber}</p>
        <p>Number of bags: ${numberOfBags}</p>
        <p>Selected packaging: ${packageType}</p>
        <p>Total weigth: ${totalWeigth}</p>

        <h3>Manager will contact with you soon! Be on phone😉</h3>
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

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runinng");
});
