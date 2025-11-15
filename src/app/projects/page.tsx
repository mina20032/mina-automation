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
            title="JavaFX Attendance System (QR Code)"
            description="QR attendance, student registration, SQLite DB, PDF & Excel reports."
          />

          <TiltCard
            title="Smart Filter Pro – WooCommerce Plugin"
            description="Dynamic filters, drag-and-drop builder, icons, AJAX results, live preview."
          />

          <TiltCard
            title="Recommendations Engine Plugin"
            description="AI-like product recommendation system shown in product + cart pages."
          />

          <TiltCard
            title="Real-Time Java Chat App (TCP)"
            description="Two-way communication, sockets, GUI with JavaFX, real-time messaging."
          />

          <TiltCard
            title="C++ Library Management System"
            description="GUI system with full CRUD, SQL DB, Excel/Text export, print manager."
          />

          <TiltCard
            title="OCR Discord Bot"
            description="Extracts text from images, reads Arabic names, sends to WhatsApp automatically."
          />

          <TiltCard
            title="E-Commerce Dashboard Website"
            description="Advanced UI with Tailwind + Charts, real-time stats, client-ready design."
          />

          <TiltCard
            title="Cloudflare DNS Manager"
            description="Automated DNS creation, IP rotation, API-integrated with Cloudflare."
          />

          <TiltCard
            title="Meta Ads ROAS Dashboard"
            description="Calculates realtime ROAS, integrates WooCommerce revenue + Meta Ads API."
          />

          <TiltCard
            title="Shopify/WooCommerce Scraper"
            description="Scrapes products, prices, variations, images & uploads to Google Sheets."
          />

          <TiltCard
            title="Automated WooCommerce Pipeline"
            description="Daily revenue reports, auto screenshots, WhatsApp alerts, Discord reporting."
          />

          <TiltCard
            title="Facebook Ads Billing Tracker"
            description="Auto-login, scrapes billing pages, extracts daily spend & updates Sheets."
          />

        </div>
      </div>
    </PageTransition>
  );
}
