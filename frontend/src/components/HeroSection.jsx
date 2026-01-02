// import React from "react";
// import { motion } from "framer-motion";
// import { Wallet, PieChart, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center justify-center ">
//       {/* Gradient blobs */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl" />

//       {/* Floating Icons */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//         className="absolute top-32 left-20 text-cyan-400"
//       >
//         <Wallet size={50} />
//       </motion.div>

//       <motion.div
//         animate={{ y: [0, 25, 0] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//         className="absolute bottom-40 right-24 text-violet-400"
//       >
//         <PieChart size={50} />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center max-w-3xl"
//       >
//         <h1 className="text-5xl font-bold text-white mb-6">
//           Smart Expense Tracking <br />
//           <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
//             With Visual Insights
//           </span>
//         </h1>

//         <p className="text-slate-300 text-lg mb-10">
//           Manage expenses, track budgets, and gain control over your money.
//         </p>

//         <div className="flex justify-center gap-6">
//           <Link
//             to="/register"
//             className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold hover:scale-105 transition shadow-lg shadow-cyan-500/30"
//           >
//             Get Started
//           </Link>

//           <Link
//             to="/login"
//             className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
//           >
//             Login
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import { Wallet, PieChart } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Gradient blobs */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-cyan-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-violet-600/30 rounded-full blur-3xl" />

      {/* Floating Icons (hidden on small screens) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="hidden md:block absolute top-32 left-20 text-cyan-400"
      >
        <Wallet size={48} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden md:block absolute bottom-40 right-24 text-violet-400"
      >
        <PieChart size={48} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl 
                   p-6 sm:p-10 lg:p-12 text-center max-w-3xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Smart Expense Tracking <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            With Visual Insights
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg mb-8 sm:mb-10">
          Manage expenses, track budgets, and gain control over your money.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/register"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 
                       text-black font-semibold hover:scale-105 transition shadow-lg shadow-cyan-500/30"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 rounded-full border border-white/30 text-white 
                       hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
