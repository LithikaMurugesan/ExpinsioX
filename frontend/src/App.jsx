// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import "./index.css";
// import LandingPage from "./pages/Landingpage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Expenses from "./pages/Expenses";
// import Layout from "./layout/Layout";
// import Analytics from "./pages/Analytics";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route element={<Layout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/expenses" element={<Expenses />} />
//           <Route path="/analytics" element={<Analytics />} />
//         </Route>
//       </Routes>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./pages/Landingpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";

import Layout from "./layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
