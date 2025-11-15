"use client";

export default function Projects() {
  const projects = [
    {
      title: "JavaFX Attendance System (QR Code + SQLite)",
      desc: "Students registration + QR attendance + PDF/Excel reports."
    },
    {
      title: "Smart Filter Pro – WooCommerce Plugin",
      desc: "Drag-and-drop filters, AJAX results, icon support."
    },
    {
      title: "Recommendations Engine Plugin",
      desc: "Smart recommendations based on product/category like Amazon."
    },
    {
      title: "E-Commerce Dashboard Website",
      desc: "Tailwind + Charts.js production-ready UI."
    },
    {
      title: "Java TCP Chat App",
      desc: "Real-time chat using sockets + JavaFX GUI."
    },
    {
      title: "C++ Library Management System",
      desc: "Full GUI + SQL + Excel/Text export."
    }
  ];

  return (
    <div className="space-y-8">
      {projects.map(({ title, desc }) => (
        <div
          key={title}
          className="p-6 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition"
        >
          <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
          <p className="text-gray-300 mt-2">{desc}</p>
        </div>
      ))}
    </div>
  );
}
