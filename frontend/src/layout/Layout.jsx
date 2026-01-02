import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

const Layout = () => {
  const [open, setOpen] = useState(false); // Mobile sidebar
  const [collapsed, setCollapsed] = useState(false); // Desktop collapsed

  return (
    <div className="flex h-screen bg-[#020617] text-white">
      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
          ${collapsed ? "md:ml-20" : "md:ml-64"}
        `}
      >
        {/* Mobile Top Bar */}
        {/* <header className="md:hidden flex items-center p-4 border-b border-white/10"> */}
        <header className="md:hidden absolute top-0 left-0 right-0 flex items-center p-4 border-b border-white/10 bg-[#020617] z-40">
          <button onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 className="ml-4 font-bold text-lg">ExpensioX</h1>
        </header>

        {/* Page Content */}
        {/* <main className="flex-1 p-4 sm:p-6 overflow-y-auto"> */}
        <main className="w-full p-4 sm:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
