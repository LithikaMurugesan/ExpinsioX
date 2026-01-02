const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db.cjs");
const authRoutes = require("./routes/auth.cjs");
const expenseRoutes = require("./routes/expense.cjs");
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
connectDb();

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.get("/", (req, res) => {
  res.send("ExpensioX Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
