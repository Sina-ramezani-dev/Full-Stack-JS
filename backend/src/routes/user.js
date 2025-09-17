import { Router } from "express";
import User from "../models/UserModel.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/", async (_req, res) => {
  const users = await User.find().lean();
  res.json(users);
});

export default router;
