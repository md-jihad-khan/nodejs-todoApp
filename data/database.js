import { config } from "dotenv";
import mongoose from "mongoose";
config({
  path: "../config.env",
});
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "backendapi" })
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
};
