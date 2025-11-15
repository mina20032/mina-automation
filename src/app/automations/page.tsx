"use client";

import PageTransition from "@/components/PageTransition";
import TiltCard from "@/components/TiltCard";
import Particles from "@/components/Particles";

export default function AutomationsPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#020617] text-white">

        <Particles />

        <div className="max-w-6xl mx-auto py-20 px-6 relative z-10">
          <h1 className="text-4xl font-extrabold mb-12">
            Automations Showcase ⚡
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TiltCard
              title="WhatsApp Follow-Up Bots"
              description="Automated WhatsApp flows: COD confirmation, wrong-number detection, abandoned cart recovery."
            />

            <TiltCard
              title="Discord Reporting Engine"
              description="Daily sales reports, ROAS dashboards, returns, cancellations & ads performance summaries."
            />

            <TiltCard
              title="Smart WooCommerce Jobs"
              description="Auto stock-sync, smart shipping calculator, order tagging, funnel tracking & customer insights."
            />
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
