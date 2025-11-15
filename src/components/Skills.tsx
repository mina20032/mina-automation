"use client";

export default function Skills() {
  const skills = {
    Programming: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C++"],
    Automation: ["n8n", "Selenium", "Playwright", "REST APIs", "Cloudflare API", "Linux", "Git"],
    Frameworks: ["Next.js", "React", "Laravel", "WordPress"],
    Tools: ["Google Sheets API", "UltraMSG", "Discord.py", "Meta Ads API"]
  };

  return (
    <div className="space-y-10">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-blue-300 mb-4">{category}</h2>

          <div className="flex flex-wrap gap-3">
            {items.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-gray-200 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

