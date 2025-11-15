import "./globals.css";
import Navbar from "@/components/Navbar";
import NeonCursor from "@/components/NeonCursor";
import NeonGrid from "@/components/NeonGrid";
import Particles from "@/components/Particles";

export const metadata = {
  title: "Mina Mamdouh –Automation Software & AI Specialist",
  description:
    "Cinematic Cyber Neon Portfolio showcasing automation engineering, dashboards, bots, and AI workflows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-black">
        {/* 🔵 عناصر الخلفية */}
        <NeonCursor />
        <NeonGrid />
        <Particles />

        {/* 🔵 الـ Navbar */}
        <Navbar />

        {/* 🔵 المحتوى */}
        <main className="pt-24 px-6">{children}</main>
      </body>
    </html>
  );
}
