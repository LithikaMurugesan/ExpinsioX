// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../api/axios"; // import axios instance

// const Register = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.password) {
//       toast.error("Please fill all fields ❌");
//       return;
//     }

//     try {
//       const res = await api.post("/auth/register", form);
//       toast.success(res.data.message + " 🚀");
//       setForm({ name: "", email: "", password: "" });
//       navigate("/login"); // redirect to login
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Registration failed ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md bg-[#020617]/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-lg shadow-cyan-500/20"
//       >
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">
//           Create Account
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
//           />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold shadow-lg shadow-cyan-500/30"
//           >
//             Register
//           </motion.button>
//         </form>

//         <p className="text-white/70 mt-4 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-cyan-400 hover:underline">
//             Login
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields ❌");
      return;
    }

    try {
      const res = await api.post("/auth/register", form);
      toast.success(res.data.message + " 🚀");
      setForm({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md sm:max-w-lg bg-[#020617]/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 shadow-lg shadow-cyan-500/20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold shadow-lg shadow-cyan-500/30"
          >
            Register
          </motion.button>
        </form>

        <p className="text-white/70 mt-4 text-center text-sm sm:text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
