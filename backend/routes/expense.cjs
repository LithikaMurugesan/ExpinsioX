const express = require("express");
const {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expense.controller.cjs");

const protect = require("../middleware/auth.cjs"); // Auth middleware

const router = express.Router();

router.use(protect); // All routes protected

router.post("/", createExpense); // Create
router.get("/", getExpenses); // Read
router.put("/:id", updateExpense); // Update
router.delete("/:id", deleteExpense); // Delete

module.exports = router;
