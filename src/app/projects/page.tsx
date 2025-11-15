"use client";

import TiltCard from "@/components/TiltCard";
import PageTransition from "@/components/PageTransition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-white mb-10">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TiltCard
            title="Meta Ads Automation Dashboard"
            description="Automated reporting system integrating Meta Ads, Sheets, WhatsApp & Discord Alerts."
          />
          <TiltCard
            title="WooCommerce Automation Engine"
            description="Smart order follow-up, abandoned cart flows, & daily revenue dashboards."
          />
          <TiltCard
            title="Server Monitoring Bot"
            description="Live CPU, RAM, Uptime monitoring with intelligent actions & alerts."
          />
        </div>
      </div>
    </PageTransition>
  );
}
