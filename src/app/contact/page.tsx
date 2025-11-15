"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto pt-20 pb-32 px-6">

      {/* عنوان الصفحة */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-blue-300 drop-shadow-[0_0_25px_rgba(0,150,255,0.6)]"
      >
        Contact Me
      </motion.h1>

      <p className="text-center mt-4 text-gray-300 text-lg">
        Let's build something powerful together — automation, AI, dashboards, bots, reporting & performance tools.
      </p>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="mt-16 bg-white/5 p-10 rounded-3xl border border-blue-400/30 shadow-[0_0_40px_rgba(0,150,255,0.3)] backdrop-blur-xl"
      >

        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 text-blue-200 font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 rounded-xl bg-white/10 text-gray-200 border border-white/20 focus:outline-none focus:border-blue-400/60"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-2 text-blue-200 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-4 rounded-xl bg-white/10 text-gray-200 border border-white/20 focus:outline-none focus:border-blue-400/60"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2 text-blue-200 font-semibold">Message</label>
          <textarea
            rows={5}
            placeholder="Tell me about your idea or project..."
            className="w-full p-4 rounded-xl bg-white/10 text-gray-200 border border-white/20 focus:outline-none focus:border-blue-400/60"
          ></textarea>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-10">

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl bg-blue-600/40 border border-blue-400/40 text-blue-200
                       font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(0,140,255,.4)]
                       hover:bg-blue-600/60 transition"
          >
            Send Message
          </motion.button>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/201276535995"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl bg-green-600/40 border border-green-400/40 text-green-200
                       font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(0,255,140,.4)]
                       hover:bg-green-600/60 transition"
          >
            WhatsApp
          </motion.a>

        </div>

      </motion.div>

    </div>
  );
}
