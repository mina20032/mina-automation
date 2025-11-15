"use client";

export default function Automations() {
  const items = [
    {
      title: "WhatsApp Automation System",
      desc: "COD confirmation, wrong-number detector, abandoned cart recovery, AI auto-replies.",
    },
    {
      title: "E-Commerce Reporting Engine",
      desc: "Daily dashboards, screenshots, Discord upload for 7 e-commerce brands.",
    },
    {
      title: "Cloudflare Monitoring Bot",
      desc: "CPU/Memory monitoring + auto-restart + Discord alerts.",
    },
    {
      title: "Shopify/WooCommerce Scraper",
      desc: "Extracts products, images, variations & exports to Sheets.",
    },
    {
      title: "Facebook Ads Billing Tracker",
      desc: "Scrapes billing pages + auto import to Sheets daily.",
    },
    {
      title: "Discord HR Bot",
      desc: "Attendance + tasks + reminders + employee management.",
    }
  ];

  return (
    <div className="space-y-8">
      {items.map(({ title, desc }) => (
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
