import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="
        bg-[#020617]
        py-20 sm:py-28
        text-center
        mx-3 sm:mx-0
        rounded-2xl
      "
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="
          text-3xl sm:text-4xl
          font-bold
          text-white
          mb-6
          px-2
        "
      >
        Ready to Take Control of Your Money?
      </motion.h2>

      <motion.div
        animate={{
          boxShadow: ["0 0 25px cyan", "0 0 40px violet", "0 0 25px cyan"],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="inline-block rounded-full"
      >
        <Link
          to="/register"
          className="
            inline-block
            px-8 sm:px-10
            py-3 sm:py-4
            rounded-full
            bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600
            text-black font-semibold
            text-sm sm:text-base
          "
        >
          Start Tracking Now
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
