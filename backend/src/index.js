import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./db.js";
import userRoutes from "./routes/user.js";


config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/monprojet";

app.listen(PORT, async () => {
  await connectDB(MONGO_URI);
  console.log(`API démarrée sur http://localhost:${PORT}`);
});
