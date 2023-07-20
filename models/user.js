import mongoose from "mongoose";

const scemma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  creatdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", scemma);
