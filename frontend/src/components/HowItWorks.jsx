
import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Wallet, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    color: "from-cyan-400 to-blue-500",
  },
  { icon: Wallet, title: "Add Expenses", color: "from-violet-400 to-pink-500" },
  {
    icon: BarChart3,
    title: "Analyze Spending",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: CheckCircle,
    title: "Stay on Budget",
    color: "from-orange-400 to-rose-500",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="HowItWorks"
      className="bg-[#020617] py-20 sm:py-28 m-0.5 rounded-2xl"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-14 sm:mb-20">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col sm:flex-row ${
              i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 w-full sm:w-[70%] flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <div
                className={`p-4 rounded-xl bg-gradient-to-r ${s.color} text-black`}
              >
                <s.icon size={26} />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold text-center sm:text-left">
                {s.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
