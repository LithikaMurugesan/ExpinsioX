import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Utensils,
  ShoppingBag,
  Bus,
  Home,
  Briefcase,
  Gift,
  DollarSign,
} from "lucide-react";
import { toast } from "react-toastify";

const expenseCategories = [
  { name: "Food", icon: <Utensils size={16} /> },
  { name: "Travel", icon: <Bus size={16} /> },
  { name: "Shopping", icon: <ShoppingBag size={16} /> },
  { name: "Rent", icon: <Home size={16} /> },
];

const incomeCategories = [
  { name: "Salary", icon: <Briefcase size={16} /> },
  { name: "Freelance", icon: <DollarSign size={16} /> },
  { name: "Bonus", icon: <Gift size={16} /> },
];

const AddExpenseModal = ({ open, onClose, onAdd, editData }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "expense",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, category: "" }));
  }, [form.type]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category || !form.date) {
      toast.error("Please fill all fields");
      return;
    }
    onAdd({
      ...form,
      id: editData ? editData._id : undefined,
      amount: Number(form.amount),
    });
    onClose(); // Close modal after saving
  };

  const categories =
    form.type === "income" ? incomeCategories : expenseCategories;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed inset-0 z-50
            bg-black/60
            flex items-center justify-center
            px-4
            py-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="
              bg-[#020617]
              w-full max-w-md
              rounded-xl sm:rounded-2xl
              border border-white/10
              p-5 sm:p-8
              max-h-[90vh]
              overflow-y-auto
              flex flex-col
              justify-center
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {editData ? "Edit Transaction" : "Add Transaction"}
              </h2>
              <X
                onClick={onClose}
                className="cursor-pointer text-slate-400 hover:text-white"
              />
            </div>

            {/* Inputs */}
            <input
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded bg-white/5 border border-white/10 text-white"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded bg-white/5 border border-white/10 text-white"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded bg-white/5 border border-white/10 text-white"
            />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className={`w-full mb-4 p-3 rounded border border-white/10 text-white ${
                form.type === "income" ? "bg-green-500/20" : "bg-red-500/20"
              }`}
            >
              <option value="expense" className="bg-[#020617]">
                Expense
              </option>
              <option value="income" className="bg-[#020617]">
                Income
              </option>
            </select>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full mb-6 p-3 rounded bg-[#020617] border border-white/10 text-white"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold"
            >
              Save
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddExpenseModal;
