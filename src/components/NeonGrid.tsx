'use client';

export default function NeonGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-20 z-0">
      {/* خطوط أفقية */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_90%,rgba(56,189,248,.2)_100%)] bg-[length:100%_40px]"></div>

      {/* خطوط رأسية */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_90%,rgba(56,189,248,.2)_100%)] bg-[length:40px_100%]"></div>
    </div>
  );
}
