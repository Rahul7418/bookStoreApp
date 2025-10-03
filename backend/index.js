import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js";   // 👈 FIXED: added .js
import cors from "cors"
import userRoute from './route/user.route.js';
import contactRoute from "./route/contact.route.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/api", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
