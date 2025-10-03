import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

export default mongoose.model("Contact", contactSchema);
