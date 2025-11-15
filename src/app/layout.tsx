import "./globals.css";
import Navbar from "../components/Navbar";
import NeonCursor from "../components/NeonCursor";
import NeonGrid from "../components/NeonGrid";
import Particles from "../components/Particles";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Mina Mamdouh – Automation & AI",
  description: "Cinematic Cyber Neon Portfolio V4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <NeonCursor />
        <NeonGrid />
        <Particles />

        <Navbar />

        <main className="pt-24 px-6">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
