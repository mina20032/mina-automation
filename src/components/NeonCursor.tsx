'use client';

import { useEffect, useState } from "react";

export default function NeonCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: any) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(
        target.closest("a, button, .card") ? true : false
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150"
      style={{
        transform: `translate(${pos.x - 15}px, ${pos.y - 15}px)`,
      }}
    >
      <div
        className={`rounded-full blur-xl transition-all duration-200 ${
          hovering
            ? "w-20 h-20 bg-blue-400/80"
            : "w-8 h-8 bg-blue-400/40"
        }`}
      ></div>
    </div>
  );
}
