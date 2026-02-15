import express from "express";
import cors from "cors";
import "dotenv/config";
import apiRoutes from "./routes/api.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
