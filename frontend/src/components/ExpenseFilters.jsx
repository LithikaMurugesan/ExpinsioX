// import React from "react";
// const ExpenseFilters = ({ expenses, setFiltered }) => {
//   const handleType = (type) => {
//     if (!type) return setFiltered(expenses);
//     setFiltered(expenses.filter((e) => e.type === type));
//   };

//   return (
//     <div className="flex gap-4 mb-6">
//       <select
//         onChange={(e) => handleType(e.target.value)}
//         className="bg-[#020617] border border-white/10 rounded-lg px-4 py-2"
//       >
//         <option value="">All</option>
//         <option value="income">Income</option>
//         <option value="expense">Expense</option>
//       </select>
//     </div>
//   );
// };

// export default ExpenseFilters;

import React from "react";

const ExpenseFilters = ({ expenses, setFiltered }) => {
  const handleType = (type) => {
    if (!type) return setFiltered(expenses);
    setFiltered(expenses.filter((e) => e.type === type));
  };

  return (
    <div
      className="
        flex flex-col sm:flex-row
        gap-3 sm:gap-4
        mb-6
        w-full
      "
    >
      <select
        onChange={(e) => handleType(e.target.value)}
        className="
          w-full sm:w-48
          bg-[#020617]
          border border-white/10
          rounded-lg
          px-4 py-2
          text-white
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400
        "
      >
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default ExpenseFilters;
