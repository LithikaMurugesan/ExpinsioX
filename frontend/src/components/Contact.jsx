import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields ");
      return;
    }

    toast.success("Message sent successfully ");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#020617] py-20 sm:py-28 px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
      text-center
      text-3xl sm:text-4xl
      font-bold
      text-white
      mb-4 sm:mb-6
    "
      >
        Send Us a Message
      </motion.h2>

      <p className="text-center text-slate-400 mb-10 sm:mb-14 px-2">
        Have a question or feedback? We’d love to hear from you.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
      max-w-3xl
      mx-auto
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-2xl sm:rounded-3xl
      p-6 sm:p-10
      space-y-5 sm:space-y-6
    "
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="
        w-full
        px-4 py-3
        rounded-xl
        bg-[#020617]
        border border-white/10
        text-white
        focus:outline-none
        focus:ring-2 focus:ring-cyan-400
      "
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="
        w-full
        px-4 py-3
        rounded-xl
        bg-[#020617]
        border border-white/10
        text-white
        focus:outline-none
        focus:ring-2 focus:ring-blue-400
      "
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="
        w-full
        px-4 py-3
        rounded-xl
        bg-[#020617]
        border border-white/10
        text-white
        focus:outline-none
        focus:ring-2 focus:ring-violet-400
        resize-none
      "
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="
        w-full
        flex justify-center items-center gap-2
        px-6 py-3
        rounded-full
        bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600
        text-black font-semibold
        shadow-lg shadow-cyan-500/30
      "
        >
          <Send size={18} /> Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
