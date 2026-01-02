// import React, { useEffect, useState } from "react";
// import api from "../api/axios";
// import { formatDate } from "../utils/formatDate";
// import { Edit2, Trash2, X } from "lucide-react";

// const Expense = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [typeFilter, setTypeFilter] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [search, setSearch] = useState("");
//   const [editExpense, setEditExpense] = useState(null);

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const fetchExpenses = async () => {
//     try {
//       const res = await api.get("/expenses");
//       setExpenses(res.data.expenses || res.data || []);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   const handleEditSave = async () => {
//     try {
//       await api.put(`/expenses/${editExpense._id}`, editExpense);
//       setExpenses((prev) =>
//         prev.map((e) => (e._id === editExpense._id ? editExpense : e))
//       );
//       setEditExpense(null);
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/expenses/${id}`);
//       setExpenses(expenses.filter((e) => e._id !== id));
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   const categories = [...new Set(expenses.map((e) => e.category))];

//   const filteredExpenses = expenses.filter((exp) => {
//     return (
//       (typeFilter ? exp.type === typeFilter : true) &&
//       (categoryFilter ? exp.category === categoryFilter : true) &&
//       (search ? exp.title.toLowerCase().includes(search.toLowerCase()) : true)
//     );
//   });

//   return (
//     <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-8">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6">Expenses</h1>

//       {/* ===== FILTERS + SEARCH ===== */}
//       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 flex-wrap">
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 bg-[#1f2029] border border-gray-700 rounded px-4 py-2"
//         />

//         <select
//           value={typeFilter}
//           onChange={(e) => setTypeFilter(e.target.value)}
//           className="bg-[#1f2029] border border-gray-700 rounded px-4 py-2"
//         >
//           <option value="">All Types</option>
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>

//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="bg-[#1f2029] border border-gray-700 rounded px-4 py-2"
//         >
//           <option value="">All Categories</option>
//           {categories.map((cat, i) => (
//             <option key={i} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => {
//             setTypeFilter("");
//             setCategoryFilter("");
//             setSearch("");
//           }}
//           className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
//         >
//           Clear
//         </button>
//       </div>

//       {/* ===== TABLE ===== */}
//       <div className="overflow-x-auto border border-gray-700 rounded-lg">
//         <table className="min-w-[600px] sm:min-w-full bg-[#1f2029]">
//           <thead className="bg-gray-800">
//             <tr>
//               <th className="py-3 px-4 text-left">Date</th>
//               <th className="py-3 px-4 text-left">Title</th>
//               <th className="py-3 px-4 text-left">Category</th>
//               <th className="py-3 px-4 text-left">Type</th>
//               <th className="py-3 px-4 text-left">Amount</th>
//               <th className="py-3 px-4 text-left">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredExpenses.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-6 text-gray-400">
//                   No expenses found
//                 </td>
//               </tr>
//             ) : (
//               filteredExpenses.map((exp) => (
//                 <tr key={exp._id} className="hover:bg-gray-700">
//                   <td className="py-2 px-3 sm:py-3 sm:px-4">
//                     {formatDate(exp.date || exp.createdAt)}
//                   </td>
//                   <td className="py-2 px-3 sm:py-3 sm:px-4">{exp.title}</td>
//                   <td className="py-2 px-3 sm:py-3 sm:px-4">{exp.category}</td>
//                   <td
//                     className={`py-2 px-3 sm:py-3 sm:px-4 font-semibold ${
//                       exp.type === "income" ? "text-green-500" : "text-red-500"
//                     }`}
//                   >
//                     {exp.type}
//                   </td>
//                   <td className="py-2 px-3 sm:py-3 sm:px-4">
//                     ₹{Number(exp.amount).toLocaleString()}
//                   </td>
//                   <td className="py-2 px-3 sm:py-3 sm:px-4 flex gap-2 sm:gap-4">
//                     <button
//                       onClick={() => setEditExpense({ ...exp })}
//                       className="text-blue-500 hover:text-blue-400"
//                       title="Edit"
//                     >
//                       <Edit2 size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(exp._id)}
//                       className="text-red-500 hover:text-red-400"
//                       title="Delete"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* ===== EDIT MODAL ===== */}
//       {editExpense && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
//           <div className="bg-[#1f2029] p-6 rounded-lg w-full max-w-md">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-xl font-bold">Edit Expense</h2>
//               <X
//                 className="cursor-pointer"
//                 onClick={() => setEditExpense(null)}
//               />
//             </div>

//             <input
//               className="w-full mb-3 p-2 bg-[#020617] border border-gray-700 rounded"
//               value={editExpense.title}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, title: e.target.value })
//               }
//             />

//             <input
//               className="w-full mb-3 p-2 bg-[#020617] border border-gray-700 rounded"
//               value={editExpense.category}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, category: e.target.value })
//               }
//             />

//             <input
//               type="number"
//               className="w-full mb-4 p-2 bg-[#020617] border border-gray-700 rounded"
//               value={editExpense.amount}
//               onChange={(e) =>
//                 setEditExpense({ ...editExpense, amount: e.target.value })
//               }
//             />

//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={handleEditSave}
//                 className="rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold px-4 py-2 w-full"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Expense;

import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { formatDate } from "../utils/formatDate";
import { Edit2, Trash2, X } from "lucide-react";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [search, setSearch] = useState("");
  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data.expenses || res.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleEditSave = async () => {
    try {
      await api.put(`/expenses/${editExpense._id}`, editExpense);
      setExpenses((prev) =>
        prev.map((e) => (e._id === editExpense._id ? editExpense : e))
      );
      setEditExpense(null);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(expenses.filter((e) => e._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const categories = [...new Set(expenses.map((e) => e.category))];
  const filteredExpenses = expenses.filter((exp) => {
    return (
      (typeFilter ? exp.type === typeFilter : true) &&
      (categoryFilter ? exp.category === categoryFilter : true) &&
      (search ? exp.title.toLowerCase().includes(search.toLowerCase()) : true)
    );
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Expenses</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[120px] bg-[#1f2029] border border-gray-700 rounded px-4 py-2"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="min-w-[120px] bg-[#1f2029] border border-gray-700 rounded px-4 py-2"
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="min-w-[120px] bg-[#1f2029] border border-gray-700 rounded px-4 py-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setTypeFilter("");
            setCategoryFilter("");
            setSearch("");
          }}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 min-w-[100px]"
        >
          Clear
        </button>
      </div>

      {/* Table for Desktop */}
      <div className="hidden sm:block overflow-x-auto border border-gray-700 rounded-lg">
        <table className="w-full min-w-full bg-[#1f2029]">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No expenses found
                </td>
              </tr>
            ) : (
              filteredExpenses.map((exp) => (
                <tr
                  key={exp._id}
                  className="hover:bg-gray-700 border-t border-gray-600"
                >
                  <td className="py-2 px-3 sm:py-3 sm:px-4">
                    {formatDate(exp.date || exp.createdAt)}
                  </td>
                  <td className="py-2 px-3 sm:py-3 sm:px-4">{exp.title}</td>
                  <td className="py-2 px-3 sm:py-3 sm:px-4">{exp.category}</td>
                  <td
                    className={`py-2 px-3 sm:py-3 sm:px-4 font-semibold ${
                      exp.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {exp.type}
                  </td>
                  <td className="py-2 px-3 sm:py-3 sm:px-4">
                    ₹{Number(exp.amount).toLocaleString()}
                  </td>
                  <td className="py-2 px-3 sm:py-3 sm:px-4 flex gap-2 sm:gap-4">
                    <button
                      onClick={() => setEditExpense({ ...exp })}
                      className="text-blue-500 hover:text-blue-400"
                    >
                      <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(exp._id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile */}
      <div className="sm:hidden flex flex-col gap-4">
        {filteredExpenses.length === 0 ? (
          <p className="text-center text-gray-400">No expenses found</p>
        ) : (
          filteredExpenses.map((exp) => (
            <div
              key={exp._id}
              className="bg-[#1f2029] p-4 rounded-lg shadow flex flex-col gap-2"
            >
              <p>
                <strong>Date:</strong> {formatDate(exp.date || exp.createdAt)}
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
                  onClick={() => setEditExpense({ ...exp })}
                  className="text-blue-500 hover:text-blue-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editExpense && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#1f2029] p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Edit Expense</h2>
              <X
                className="cursor-pointer"
                onClick={() => setEditExpense(null)}
              />
            </div>

            <input
              className="w-full mb-3 p-2 bg-[#020617] border border-gray-700 rounded"
              value={editExpense.title}
              onChange={(e) =>
                setEditExpense({ ...editExpense, title: e.target.value })
              }
            />
            <input
              className="w-full mb-3 p-2 bg-[#020617] border border-gray-700 rounded"
              value={editExpense.category}
              onChange={(e) =>
                setEditExpense({ ...editExpense, category: e.target.value })
              }
            />
            <input
              type="number"
              className="w-full mb-4 p-2 bg-[#020617] border border-gray-700 rounded"
              value={editExpense.amount}
              onChange={(e) =>
                setEditExpense({ ...editExpense, amount: e.target.value })
              }
            />

            <div className="flex justify-center mt-6">
              <button
                onClick={handleEditSave}
                className="rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold px-4 py-2 w-full"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expense;
