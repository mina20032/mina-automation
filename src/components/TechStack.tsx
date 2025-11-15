"use client";

export default function TechStack() {
  const items = [
    "Python", "JavaScript", "TypeScript", "C++", "Java", "PHP",
    "Next.js", "React", "Node.js",
    "Selenium", "Playwright", "BeautifulSoup",
    "Google Sheets API", "WooCommerce API", "Cloudflare API", "Meta Ads API",
    "n8n", "Discord.py", "UltraMSG"
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((tech) => (
        <div
          key={tech}
          className="p-3 rounded-xl bg-white/10 text-gray-200 border border-white/20 text-center text-sm hover:bg-white/20 transition"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
