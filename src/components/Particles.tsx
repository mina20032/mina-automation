'use client';

export default function Particles() {
  const arr = Array.from({ length: 60 });

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {arr.map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-300/20 rounded-full blur-xl animate-ping"
          style={{
            width: `${Math.random() * 10 + 4}px`,
            height: `${Math.random() * 10 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}
