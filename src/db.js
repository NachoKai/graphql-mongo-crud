require("dotenv").config();
import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (err) {
    console.error("Something went wrong: ", err);
  }
}
