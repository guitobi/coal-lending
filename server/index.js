import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/order/new", (req, res) => {
  const data = req.body;
  console.log("data arrived");
  console.log(data);
  if (data) res.send("data arrived");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runinng");
});
