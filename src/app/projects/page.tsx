import TiltCard from "../../components/TiltCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-32">

      {/* عنوان الصفحة */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-blue-300 drop-shadow-[0_0_20px_rgba(0,150,255,0.5)]"
      >
        Projects
      </motion.h1>

      <p className="text-center mt-4 text-gray-300 text-lg">
        Real automations & engineering work I've built for ecommerce teams.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 px-4">

        {/* Project 1 */}
        <TiltCard
          title="Automation Reports System"
          desc="Daily/Monthly dashboards for WooCommerce & Laravel stores. Auto-generated PDFs & screenshots with revenue, ROAS, orders & AOV."
        />

        {/* Project 2 */}
        <TiltCard
          title="Meta Ads Balance Alerts"
          desc="Monitors ad account balance, payment threshold & sends instant WhatsApp/Discord alerts before ads stop."
        />

        {/* Project 3 */}
        <TiltCard
          title="WordPress Auto Password Rotation"
          desc="Automatically rotates WP logins, sends new credentials securely, and keeps old team access restricted."
        />

        {/* Project 4 */}
        <TiltCard
          title="Server Monitoring Bot"
          desc="Live monitoring: CPU, RAM, Disk, Uptime, Cloudflare errors, checkout speed & instant alerts."
        />

        {/* Project 5 */}
        <TiltCard
          title="Ecommerce Test Order Bot"
          desc="Places smart test orders to verify checkout, shipping, and confirmation flows. Alerts if anything breaks."
        />

        {/* Project 6 */}
        <TiltCard
          title="Customer Message Automation"
          desc="Smart WhatsApp/Instagram auto replies: lead collection, routing, DMs automations & working hours logic."
        />

      </div>
    </div>
  );
}
