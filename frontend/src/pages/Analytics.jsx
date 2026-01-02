import React, { useEffect, useState } from "react";
import api from "../api/axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Legend,
} from "recharts";

const COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#eab308", "#a855f7"];

const Analytics = () => {
  const [expenses, setExpenses] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data.expenses || res.data || []);
    } catch (err) {
      console.error("Analytics error:", err);
    }
  };

  const filteredExpenses = expenses.filter((e) => {
    const expenseDate = new Date(e.date || e.createdAt);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    if (from && expenseDate < from) return false;
    if (to && expenseDate > to) return false;
    return true;
  });

  const totalIncome = filteredExpenses
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const totalExpense = filteredExpenses
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const balance = totalIncome - totalExpense;

  const categoryData = Object.entries(
    filteredExpenses
      .filter((e) => e.type === "expense")
      .reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
        return acc;
      }, {})
  ).map(([name, value]) => ({ name, value }));

  const barData = [
    { name: "Income", amount: totalIncome },
    { name: "Expense", amount: totalExpense },
  ];

  const monthlyData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const monthIncome = filteredExpenses
      .filter(
        (e) => e.type === "income" && new Date(e.date).getMonth() + 1 === month
      )
      .reduce((sum, e) => sum + Number(e.amount), 0);
    const monthExpense = filteredExpenses
      .filter(
        (e) => e.type === "expense" && new Date(e.date).getMonth() + 1 === month
      )
      .reduce((sum, e) => sum + Number(e.amount), 0);
    return {
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      income: monthIncome,
      expense: monthExpense,
    };
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Analytics
      </h1>

      {/* ===== Date Filter ===== */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center sm:items-start">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="bg-[#1f2029] border border-gray-700 rounded px-4 py-2 w-full sm:w-auto"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="bg-[#1f2029] border border-gray-700 rounded px-4 py-2 w-full sm:w-auto"
        />
        <button
          onClick={() => {
            setFromDate("");
            setToDate("");
          }}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 w-full sm:w-auto"
        >
          Clear
        </button>
      </div>

      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#1f2029] p-4 sm:p-6 rounded-lg text-center sm:text-left">
          <p className="text-gray-400">Total Income</p>
          <h2 className="text-2xl sm:text-3xl text-green-500 font-bold">
            ₹{totalIncome.toLocaleString()}
          </h2>
        </div>

        <div className="bg-[#1f2029] p-4 sm:p-6 rounded-lg text-center sm:text-left">
          <p className="text-gray-400">Total Expense</p>
          <h2 className="text-2xl sm:text-3xl text-red-500 font-bold">
            ₹{totalExpense.toLocaleString()}
          </h2>
        </div>

        <div className="bg-[#1f2029] p-4 sm:p-6 rounded-lg text-center sm:text-left">
          <p className="text-gray-400">Balance</p>
          <h2 className="text-2xl sm:text-3xl text-cyan-400 font-bold">
            ₹{balance.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* ===== Charts ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Pie Chart */}
        <div className="bg-[#1f2029] p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl mb-4 text-center sm:text-left">
            Expense by Category
          </h2>
          {categoryData.length === 0 ? (
            <p className="text-gray-400 text-center">No data</p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" label>
                  {categoryData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Bar Chart */}
        <div className="bg-[#1f2029] p-4 sm:p-6 rounded-lg">
          <h2 className="text-xl mb-4 text-center sm:text-left">
            Income vs Expense
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#38bdf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Monthly Trend Line Chart ===== */}
      <div className="bg-[#1f2029] p-4 sm:p-6 rounded-lg">
        <h2 className="text-xl mb-4 text-center sm:text-left">
          Monthly Income vs Expense
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#22c55e" />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
