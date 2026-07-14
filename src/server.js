require("dotenv").config();

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

if (!mongoUri) {
  console.error("❌ Missing MongoDB connection string. Set MONGODB_URI (or MONGO_URI).");
  process.exit(1);
}

const app = require("./app");

// Connect to MongoDB
mongoose
  .connect(mongoUri, {
    serverSelectionTimeoutMS: 15000,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Voyage Français API running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(error.message);
    console.error("ℹ️ Check MONGODB_URI, Mongo Atlas Network Access, and DB user credentials.");
    process.exit(1);
  });