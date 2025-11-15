"use client";

import { motion } from "framer-motion";

interface TiltCardProps {
  title: string;
  description: string;
}

export default function TiltCard({ title, description }: TiltCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-blue-400/40 transition-all"
    >
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
