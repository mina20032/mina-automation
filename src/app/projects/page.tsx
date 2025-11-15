import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import DownloadCV from "@/components/DownloadCV";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="space-y-20">

      <Hero />

      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Tech Stack</h2>
        <TechStack />
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Experience</h2>
        <Experience />
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Testimonials</h2>
        <Testimonials />
      </section>

      <section className="max-w-5xl mx-auto px-6 text-center">
        <DownloadCV />
      </section>

    </div>
  );
}
