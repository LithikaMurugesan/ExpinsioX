import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, PieChart } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Expense Analytics",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: PieChart,
    title: "Budget Planning",
    color: "from-violet-400 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data",
    color: "from-emerald-400 to-teal-500",
  },
];

const Features = () => {
  return (
    <section
      id="Features"
      className="bg-[#020617] py-16 sm:py-20 lg:py-24 m-1 rounded-2xl"
    >
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10 sm:mb-14 lg:mb-16">
        Powerful Features
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600"
          >
            <div className="bg-[#020617] rounded-2xl p-6 sm:p-8 text-center h-full">
              {/* Icon */}
              <div
                className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${f.color} text-black mb-4`}
              >
                <f.icon size={24} className="sm:w-7 sm:h-7" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {f.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
