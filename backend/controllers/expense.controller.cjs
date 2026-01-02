const Expense = require("../models/Expense.cjs");

/* CREATE EXPENSE */
const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date, type } = req.body;

    const expense = await Expense.create({
      user: req.userId,
      title,
      amount,
      category,
      date,
      type, // Save type from frontend
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Failed to create expense" });
  }
};

/* GET ALL EXPENSES FOR USER */
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId }).sort({
      date: -1,
    });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses" });
  }
};

/* UPDATE EXPENSE */
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Failed to update expense" });
  }
};

/* DELETE EXPENSE */
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete expense" });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};
