'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 px-10 py-5",
        "backdrop-blur-xl border-b border-blue-500/20",
        "transition-transform duration-500",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <ul className="flex gap-10 text-xl font-semibold text-blue-300">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/automations">Automations</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
