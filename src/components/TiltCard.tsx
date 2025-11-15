'use client';

import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

export default function TiltCard({ title, desc }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 300], [10, -10]);
  const rotateY = useTransform(x, [0, 300], [-10, 10]);

  return (
    <motion.div
      className="card p-8 rounded-2xl bg-white/5 border border-blue-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,150,255,0.2)]"
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
      onMouseLeave={() => {
        x.set(150);
        y.set(150);
      }}
    >
      <h3 className="text-3xl font-bold text-blue-300 drop-shadow-[0_0_10px_rgba(0,150,255,.6)]">
        {title}
      </h3>

      <p className="mt-3 text-gray-300 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
