'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden rounded-b-3xl">

      {/* 🔥 فيديو الخلفية */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-data-flow-432-large.mp4"
      />

      {/* 🔥 طبقة تغميق محسّنة */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* 🔷 المحتوى */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl p-6"
      >

        {/* الصورة */}
        <div className="mx-auto w-40 h-40 rounded-3xl overflow-hidden border border-blue-500/40 shadow-[0_0_25px_rgba(0,150,255,0.5)] mb-6 backdrop-blur-xl">
          <Image
            src="/mina.jpeg"
            alt="Mina"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* العنوان */}
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 drop-shadow-[0_0_15px_rgba(0,140,255,.7)]">
            Mina Mamdouh
          </span>
        </h1>

        {/* السطر التاني */}
        <p className="mt-3 text-xl text-blue-200/80 font-semibold tracking-wide drop-shadow-lg">
          Automation & AI Engineer
        </p>

        {/* البراغراف */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I build real-world automations for ecommerce, marketing teams & operations:
          dashboards, monitoring, bots, reporting, and full workflow automation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="px-8 py-3 rounded-xl bg-blue-600/40 border border-blue-400/40 text-blue-200 font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(0,140,255,.4)] hover:bg-blue-600/60 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-200 font-semibold backdrop-blur-md hover:bg-white/20 transition"
          >
            Contact Me
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
