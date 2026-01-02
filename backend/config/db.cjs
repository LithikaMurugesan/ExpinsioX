const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${db.connection.name} `);
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
