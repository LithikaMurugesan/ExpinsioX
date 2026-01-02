import React from "react";
import { formatDate } from "../utils/formatDate";
import { Edit2, Trash2 } from "lucide-react";

const Expenses = ({
  expenses = [],
  onEdit,
  onDelete,
  totalIncome = 0,
  totalExpense = 0,
  balance = 0,
}) => {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-8">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Expenses</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1f2029] rounded-lg p-4 sm:p-6 shadow-md flex flex-col">
          <span className="text-gray-400 text-sm sm:text-base">Income</span>
          <p className="text-green-500 text-lg sm:text-xl font-bold">
            ₹{totalIncome.toLocaleString()}
          </p>
        </div>

        <div className="bg-[#1f2029] rounded-lg p-4 sm:p-6 shadow-md flex flex-col">
          <span className="text-gray-400 text-sm sm:text-base">Expenses</span>
          <p className="text-red-500 text-lg sm:text-xl font-bold">
            ₹{totalExpense.toLocaleString()}
          </p>
        </div>

        <div className="bg-[#1f2029] rounded-lg p-4 sm:p-6 shadow-md flex flex-col">
          <span className="text-gray-400 text-sm sm:text-base">Balance</span>
          <p className="text-cyan-400 text-lg sm:text-xl font-bold">
            ₹{balance.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="min-w-[700px] sm:min-w-full w-full bg-[#1f2029]">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-2 px-3 text-left text-gray-300 text-sm sm:text-base">
                Date
              </th>
              <th className="py-2 px-3 text-left text-gray-300 text-sm sm:text-base">
                Title
              </th>
              <th className="py-2 px-3 text-left text-gray-300 text-sm sm:text-base">
                Category
              </th>
              <th className="py-2 px-3 text-left text-gray-300 text-sm sm:text-base">
                Type
              </th>
              <th className="py-2 px-3 text-left text-gray-300 text-sm sm:text-base">
                Amount
              </th>
              <th className="py-2 px-3 text-left text-gray-300 text-sm sm:text-base">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {expenses.length > 0 ? (
              expenses.map((exp) => (
                <tr key={exp._id} className="hover:bg-gray-700 transition">
                  <td className="py-2 px-3 whitespace-nowrap text-sm sm:text-base">
                    {formatDate(exp.date)}
                  </td>

                  <td className="py-2 px-3 text-sm sm:text-base">
                    {exp.title}
                  </td>

                  <td className="py-2 px-3 text-sm sm:text-base">
                    {exp.category}
                  </td>

                  <td
                    className={`py-2 px-3 font-semibold text-sm sm:text-base ${
                      exp.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {exp.type}
                  </td>

                  <td className="py-2 px-3 text-sm sm:text-base">
                    ₹{Number(exp.amount).toLocaleString()}
                  </td>

                  <td className="py-2 px-3 flex gap-3">
                    <button
                      onClick={() => onEdit(exp)}
                      className="hover:text-blue-400"
                    >
                      <Edit2 size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(exp._id)}
                      className="hover:text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-gray-400 text-sm sm:text-base"
                >
                  No expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
