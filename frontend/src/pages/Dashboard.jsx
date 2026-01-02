// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Wallet,
//   TrendingUp,
//   TrendingDown,
//   Plus,
//   Pencil,
//   Trash2,
// } from "lucide-react";
// import AddExpenseModal from "../components/AddExpenseModal";
// import { toast } from "react-toastify";
// import api from "../api/axios";

// const Dashboard = () => {
//   const [open, setOpen] = useState(false);
//   const [editExpense, setEditExpense] = useState(null);
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const fetchExpenses = async () => {
//     try {
//       const res = await api.get("/expenses");
//       setExpenses(res.data || []);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch expenses");
//     }
//   };

//   const handleAddExpense = async (expense) => {
//     try {
//       if (editExpense) {
//         const res = await api.put(`/expenses/${editExpense._id}`, expense);
//         setExpenses(
//           expenses.map((e) => (e._id === editExpense._id ? res.data : e))
//         );
//         toast.success("Expense updated");
//         setEditExpense(null);
//       } else {
//         const res = await api.post("/expenses", expense);
//         setExpenses([...expenses, res.data]);
//         toast.success("Expense added");
//       }
//       setOpen(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Operation failed");
//     }
//   };

//   const handleEdit = (expense) => {
//     setEditExpense(expense);
//     setOpen(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/expenses/${id}`);
//       setExpenses(expenses.filter((e) => e._id !== id));
//       toast.success("Expense deleted");
//     } catch (error) {
//       console.error(error);
//       toast.error("Delete failed");
//     }
//   };

//   const totalIncome = expenses
//     .filter((e) => e.type === "income")
//     .reduce((sum, e) => sum + Number(e.amount), 0);
//   const totalExpense = expenses
//     .filter((e) => e.type === "expense")
//     .reduce((sum, e) => sum + Number(e.amount), 0);
//   const balance = totalIncome - totalExpense;

//   return (
//     <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-8">
//       {/* Top Bar */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//         <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() => setOpen(true)}
//           className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold text-sm sm:text-base"
//         >
//           <Plus size={16} /> Add Expense
//         </motion.button>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         <SummaryCard
//           icon={<TrendingUp className="text-green-400" />}
//           label="Income"
//           value={totalIncome}
//         />
//         <SummaryCard
//           icon={<TrendingDown className="text-red-400" />}
//           label="Expenses"
//           value={totalExpense}
//         />
//         <SummaryCard
//           icon={<Wallet className="text-cyan-400" />}
//           label="Balance"
//           value={balance}
//         />
//       </div>

//       {/* Expense Table */}
//       <ExpenseTable
//         expenses={expenses}
//         onDelete={handleDelete}
//         onEdit={handleEdit}
//       />

//       {/* Add/Edit Modal */}
//       <AddExpenseModal
//         open={open}
//         onClose={() => {
//           setOpen(false);
//           setEditExpense(null);
//         }}
//         onAdd={handleAddExpense}
//         editData={editExpense}
//       />
//     </div>
//   );
// };

// // ===== Summary Card =====
// const SummaryCard = ({ icon, label, value }) => (
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     className="bg-[#1f2029] p-4 sm:p-6 rounded-lg flex items-center gap-3"
//   >
//     <div className="text-2xl">{icon}</div>
//     <div>
//       <p className="text-gray-400 text-sm sm:text-base">{label}</p>
//       <h2 className="text-lg sm:text-xl font-bold">
//         ₹{value.toLocaleString()}
//       </h2>
//     </div>
//   </motion.div>
// );

// const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
//   if (!expenses || expenses.length === 0) {
//     return (
//       <p className="text-center text-slate-400 mt-10">No expenses yet 💸</p>
//     );
//   }

//   return (
//     <div className="mt-6 w-full overflow-x-auto border border-white/10 rounded-xl">
//       <table className="min-w-[600px] w-full text-left table-auto">
//         <thead className="bg-white/10 text-slate-300">
//           <tr>
//             <th className="p-2 sm:p-4">Date</th>
//             <th className="p-2 sm:p-4 max-w-[120px]">Title</th>
//             <th className="p-2 sm:p-4 hidden sm:table-cell max-w-[100px]">
//               Category
//             </th>
//             <th className="p-2 sm:p-4">Type</th>
//             <th className="p-2 sm:p-4">Amount</th>
//             <th className="p-2 sm:p-4">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.map((exp) => (
//             <tr
//               key={exp._id}
//               className="border-t border-white/10 hover:bg-white/5 transition-colors"
//             >
//               <td className="p-2 sm:p-4">
//                 {new Date(exp.date).toLocaleDateString()}
//               </td>
//               <td className="p-2 sm:p-4 truncate max-w-[120px]">{exp.title}</td>
//               <td className="p-2 sm:p-4 hidden sm:table-cell truncate max-w-[100px]">
//                 {exp.category}
//               </td>
//               <td
//                 className={`p-2 sm:p-4 font-semibold ${
//                   exp.type === "income" ? "text-green-400" : "text-red-400"
//                 }`}
//               >
//                 {exp.type}
//               </td>
//               <td className="p-2 sm:p-4">
//                 ₹{Number(exp.amount).toLocaleString()}
//               </td>
//               <td className="p-2 sm:p-4 flex gap-2 sm:gap-4">
//                 <button
//                   onClick={() => onEdit(exp)}
//                   className="text-cyan-400 hover:text-cyan-500"
//                 >
//                   <Pencil size={18} />
//                 </button>
//                 <button
//                   onClick={() => onDelete(exp._id)}
//                   className="text-red-400 hover:text-red-500"
//                 >
//                   <Trash2 size={18} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import AddExpenseModal from "../components/AddExpenseModal";
import { toast } from "react-toastify";
import api from "../api/axios";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch expenses");
    }
  };

  const handleAddExpense = async (expense) => {
    try {
      if (editExpense) {
        const res = await api.put(`/expenses/${editExpense._id}`, expense);
        setExpenses(
          expenses.map((e) => (e._id === editExpense._id ? res.data : e))
        );
        toast.success("Expense updated");
        setEditExpense(null);
      } else {
        const res = await api.post("/expenses", expense);
        setExpenses([...expenses, res.data]);
        toast.success("Expense added");
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Operation failed");
    }
  };

  const handleEdit = (expense) => {
    setEditExpense(expense);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(expenses.filter((e) => e._id !== id));
      toast.success("Expense deleted");
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  const totalIncome = expenses
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const totalExpense = expenses
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold text-sm sm:text-base"
        >
          <Plus size={16} /> Add Expense
        </motion.button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <SummaryCard
          icon={<TrendingUp className="text-green-400" />}
          label="Income"
          value={totalIncome}
        />
        <SummaryCard
          icon={<TrendingDown className="text-red-400" />}
          label="Expenses"
          value={totalExpense}
        />
        <SummaryCard
          icon={<Wallet className="text-cyan-400" />}
          label="Balance"
          value={balance}
        />
      </div>

      {/* Expense Table for Desktop */}
      <div className="hidden sm:block">
        <ExpenseTable
          expenses={expenses}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {/* Card View for Mobile */}
      <div className="sm:hidden flex flex-col gap-4">
        {expenses.length === 0 ? (
          <p className="text-center text-slate-400 mt-10">No expenses yet 💸</p>
        ) : (
          expenses.map((exp) => (
            <div
              key={exp._id}
              className="bg-[#1f2029] p-4 rounded-lg shadow flex flex-col gap-2"
            >
              <p>
                <strong>Date:</strong> {new Date(exp.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Title:</strong> {exp.title}
              </p>
              <p>
                <strong>Category:</strong> {exp.category}
              </p>
              <p
                className={
                  exp.type === "income" ? "text-green-400" : "text-red-400"
                }
              >
                <strong>Type:</strong> {exp.type}
              </p>
              <p>
                <strong>Amount:</strong> ₹{Number(exp.amount).toLocaleString()}
              </p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleEdit(exp)}
                  className="text-cyan-400 hover:text-cyan-500"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="text-red-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add/Edit Modal */}
      <AddExpenseModal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditExpense(null);
        }}
        onAdd={handleAddExpense}
        editData={editExpense}
      />
    </div>
  );
};

// ===== Summary Card =====
const SummaryCard = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-[#1f2029] p-4 sm:p-6 rounded-lg flex items-center gap-3"
  >
    <div className="text-2xl">{icon}</div>
    <div>
      <p className="text-gray-400 text-sm sm:text-base">{label}</p>
      <h2 className="text-lg sm:text-xl font-bold">
        ₹{value.toLocaleString()}
      </h2>
    </div>
  </motion.div>
);

// ===== Expense Table =====
const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
  if (!expenses || expenses.length === 0) {
    return (
      <p className="text-center text-slate-400 mt-10">No expenses yet 💸</p>
    );
  }

  return (
    <div className="overflow-x-auto w-full mt-6 border border-white/10 rounded-xl">
      <table className="w-full text-left table-auto border-collapse">
        <thead className="bg-white/10 text-slate-300">
          <tr>
            <th className="p-2 sm:p-4">Date</th>
            <th className="p-2 sm:p-4">Title</th>
            <th className="p-2 sm:p-4 hidden sm:table-cell">Category</th>
            <th className="p-2 sm:p-4">Type</th>
            <th className="p-2 sm:p-4">Amount</th>
            <th className="p-2 sm:p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr
              key={exp._id}
              className="border-t border-white/10 hover:bg-white/5 transition-colors"
            >
              <td className="p-2 sm:p-4">
                {new Date(exp.date).toLocaleDateString()}
              </td>
              <td className="p-2 sm:p-4 truncate">{exp.title}</td>
              <td className="p-2 sm:p-4 hidden sm:table-cell truncate">
                {exp.category}
              </td>
              <td
                className={`p-2 sm:p-4 font-semibold ${
                  exp.type === "income" ? "text-green-400" : "text-red-400"
                }`}
              >
                {exp.type}
              </td>
              <td className="p-2 sm:p-4">
                ₹{Number(exp.amount).toLocaleString()}
              </td>
              <td className="p-2 sm:p-4 flex gap-2 sm:gap-4">
                <button
                  onClick={() => onEdit(exp)}
                  className="text-cyan-400 hover:text-cyan-500"
                >
                  <Pencil className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => onDelete(exp._id)}
                  className="text-red-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
