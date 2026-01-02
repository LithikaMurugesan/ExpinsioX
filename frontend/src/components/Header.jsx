
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50"
    >
      {/* Gradient Border */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 p-[1px]">
        <div className="bg-[#020617]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 font-bold text-lg sm:text-xl"
            >
              <Wallet className="text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                ExpensioX
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-slate-300">
              <ScrollLink
                to="Features"
                smooth
                duration={500}
                className="hover:text-cyan-400 cursor-pointer transition"
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="HowItWorks"
                smooth
                duration={500}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                How it Works
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth
                duration={500}
                className="hover:text-violet-400 cursor-pointer transition"
              >
                Contact
              </ScrollLink>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex gap-4 items-center">
              <RouterLink
                to="/login"
                className="text-slate-300 hover:text-pink-400 transition"
              >
                Login
              </RouterLink>

              <motion.div whileHover={{ scale: 1.1 }}>
                <RouterLink
                  to="/register"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold shadow-lg shadow-cyan-500/30"
                >
                  Get Started
                </RouterLink>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-slate-300"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="md:hidden px-6 pb-6 space-y-5 text-slate-300"
              >
                <ScrollLink
                  to="Features"
                  smooth
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="block hover:text-cyan-400"
                >
                  Features
                </ScrollLink>

                <ScrollLink
                  to="HowItWorks"
                  smooth
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="block hover:text-blue-400"
                >
                  How it Works
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="block hover:text-violet-400"
                >
                  Contact
                </ScrollLink>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <RouterLink
                    to="/login"
                    className="hover:text-pink-400"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </RouterLink>

                  <RouterLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="text-center px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold"
                  >
                    Get Started
                  </RouterLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
