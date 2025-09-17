import mongoose from "mongoose";

export async function connectDB(uri) {
  try {
    await mongoose.connect(uri, {});
    console.log("MongoDB connecté");
  } catch (err) {
    console.error("Erreur MongoDB:", err.message);
    process.exit(1);
  }
}
