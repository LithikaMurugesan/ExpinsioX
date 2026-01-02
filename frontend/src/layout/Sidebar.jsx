// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Wallet,
//   BarChart,
//   LogOut,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import api from "../api/axios";

// const Sidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
//   const navigate = useNavigate();

//   const linkClass = ({ isActive }) =>
//     `group flex items-center gap-3 px-4 py-2 rounded-lg transition
//      ${
//        isActive
//          ? "bg-cyan-500/20 text-cyan-400"
//          : "text-slate-300 hover:text-cyan-400"
//      }`;

//   const handleLogout = async () => {
//     try {
//       await api.post("/auth/logout");
//     } finally {
//       sessionStorage.removeItem("accessToken");
//       navigate("/login", { replace: true });
//     }
//   };

//   return (
//     <>
//       {/* Mobile overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed z-50 top-0 left-0 h-full bg-[#020617] border-r border-white/10 p-4
//           transform transition-all duration-300
//           ${collapsed ? "w-20" : "w-64"}
//           ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
//         `}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           {!collapsed && (
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
//               ExpensioX
//             </h2>
//           )}

//           {/* Desktop collapse toggle */}
//           <button
//             className="hidden md:block text-slate-400 hover:text-white transition"
//             onClick={() => setCollapsed(!collapsed)}
//           >
//             {collapsed ? <ChevronRight /> : <ChevronLeft />}
//           </button>

//           {/* Mobile close button */}
//           <button
//             className="md:hidden text-slate-400 hover:text-white"
//             onClick={() => setOpen(false)}
//           >
//             <X />
//           </button>
//         </div>

//         {/* Nav Links */}
//         <nav className="space-y-2">
//           <NavLink to="/dashboard" className={linkClass}>
//             <LayoutDashboard size={20} />
//             {!collapsed && <span>Dashboard</span>}
//           </NavLink>

//           <NavLink to="/expenses" className={linkClass}>
//             <Wallet size={20} />
//             {!collapsed && <span>Expenses</span>}
//           </NavLink>

//           <NavLink to="/analytics" className={linkClass}>
//             <BarChart size={20} />
//             {!collapsed && <span>Analytics</span>}
//           </NavLink>

//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-500 w-full"
//           >
//             <LogOut size={20} />
//             {!collapsed && <span>Logout</span>}
//           </button>
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  BarChart,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import api from "../api/axios";

const Sidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `group flex items-center gap-3 px-4 py-2 rounded-lg transition
     ${
       isActive
         ? "bg-cyan-500/20 text-cyan-400"
         : "text-slate-300 hover:text-cyan-400"
     }`;

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      sessionStorage.removeItem("accessToken");
      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full bg-[#020617] border-r border-white/10 p-4
          transform transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              ExpensioX
            </h2>
          )}

          {/* Desktop collapse toggle */}
          <button
            className="hidden md:block text-slate-400 hover:text-white transition"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>

          {/* Mobile close button */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="space-y-2">
          <NavLink to="/dashboard" className={linkClass}>
            <LayoutDashboard size={24} className="flex-shrink-0" />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/expenses" className={linkClass}>
            <Wallet size={24} className="flex-shrink-0" />
            {!collapsed && <span>Expenses</span>}
          </NavLink>

          <NavLink to="/analytics" className={linkClass}>
            <BarChart size={24} className="flex-shrink-0" />
            {!collapsed && <span>Analytics</span>}
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-500 w-full"
          >
            <LogOut size={24} className="flex-shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
