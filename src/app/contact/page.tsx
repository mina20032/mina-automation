"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-20 px-6 text-white">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"
        >
          Let's Connect 🤝
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 mb-12 text-center"
        >
          Whether you need automation solutions, dashboards, bots, or want to collaborate —  
          I'm always happy to help. Feel free to reach out anytime!
        </motion.p>

        {/* Contact Methods */}
        <div className="space-y-6 text-lg">

          {/* Email */}
          <motion.a
            href="mailto:mano.devloper@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
          >
            <FaEnvelope className="text-blue-400 text-2xl" />
            <div>
              <p className="text-gray-300">Email</p>
              <p className="text-blue-400 font-semibold">mano.devloper@gmail.com</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/mina-mamdouh14/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
          >
            <FaLinkedin className="text-blue-500 text-2xl" />
            <div>
              <p className="text-gray-300">LinkedIn</p>
              <p className="text-blue-400 font-semibold">
                linkedin.com/in/mina-mamdouh14
              </p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/201276535995"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
          >
            <FaWhatsapp className="text-green-400 text-2xl" />
            <div>
              <p className="text-gray-300">WhatsApp</p>
              <p className="text-green-400 font-semibold">+20 12 7653 5995</p>
            </div>
          </motion.a>

        </div>

      </div>
    </PageTransition>
  );
}

