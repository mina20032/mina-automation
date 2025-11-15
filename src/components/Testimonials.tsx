"use client";

export default function Testimonials() {
  const items = [
    {
      name: "Dokkan E-Commerce",
      text: "Mina automated our entire WooCommerce operations. Reduced manual work by 70%."
    },
    {
      name: "A3da Underground",
      text: "The WhatsApp automation system improved COD confirmation rates massively."
    },
    {
      name: "Earthy",
      text: "Daily dashboards + ads spend system saved our team hours every single day."
    }
  ];

  return (
    <div className="space-y-6">
      {items.map(({ name, text }) => (
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-gray-200 italic">“{text}”</p>
          <p className="text-blue-300 font-semibold mt-3">— {name}</p>
        </div>
      ))}
    </div>
  );
}
