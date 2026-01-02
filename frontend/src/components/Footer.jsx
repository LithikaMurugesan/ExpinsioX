// import React from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#020617]">
//       {/* Top Gradient Strip */}
//       <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600" />

//       <div className="max-w-7xl mx-auto px-8 py-16">
//         <div className="grid md:grid-cols-3 gap-12">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
//               Expense Tracker
//             </h3>
//             <p className="text-slate-400 mt-3">
//               Track expenses smartly with real-time insights and colorful visual
//               analytics.
//             </p>
//           </div>

//           {/* Links */}
//           <div>
//             <h4 className="text-cyan-400 font-semibold mb-4">Product</h4>
//             <ul className="space-y-2 text-slate-400">
//               <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
//               <li className="hover:text-violet-400 cursor-pointer">
//                 Analytics
//               </li>
//               <li className="hover:text-pink-400 cursor-pointer">Security</li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h4 className="text-violet-400 font-semibold mb-4">Connect</h4>
//             <div className="flex gap-4">
//               {[Github, Linkedin, Mail].map((Icon, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.2 }}
//                   className="p-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black cursor-pointer shadow-lg shadow-violet-500/30"
//                 >
//                   <Icon size={18} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-white/10 mt-12 pt-6 text-center text-slate-500 text-sm">
//           © 2025 Expense Tracker. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020617]">
      {/* Top Gradient Strip */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Expense Tracker
            </h3>
            <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
              Track expenses smartly with real-time insights and colorful visual
              analytics.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cyan-400 font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
              <li className="hover:text-violet-400 cursor-pointer">
                Analytics
              </li>
              <li className="hover:text-pink-400 cursor-pointer">Security</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-violet-400 font-semibold mb-4">Connect</h4>
            <div className="flex justify-center sm:justify-start gap-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black cursor-pointer shadow-lg shadow-violet-500/30"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500 text-xs sm:text-sm">
          © 2025 Expense Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
