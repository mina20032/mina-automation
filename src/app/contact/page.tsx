"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Contact Me 🤝
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 mb-10"
        >
          Feel free to reach out for projects, automation consultations, or collaborations!
        </motion.p>

        <div className="space-y-4 text-lg">
          <p>📩 Email: <span className="text-blue-400">mina.mamdouh.dev@gmail.com</span></p>
          <p>💼 LinkedIn: <span className="text-blue-400">linkedin.com/in/mina-mamdouh</span></p>
          <p>💬 WhatsApp: <span className="text-blue-400">+20 10 000 00000</span></p>
        </div>
      </div>
    </PageTransition>
  );
}
