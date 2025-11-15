import TiltCard from "../../components/TiltCard";
import { motion } from "framer-motion";

export default function AutomationsPage() {
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-32">

      {/* عنوان الصفحة */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-blue-300 drop-shadow-[0_0_25px_rgba(0,150,255,0.6)]"
      >
        Automations
      </motion.h1>

      <p className="text-center mt-4 text-gray-300 text-lg px-4">
        Real automation systems I've built across ecommerce, ads, servers, dashboards, security & customer ops.
      </p>

      {/* Grid of Automations */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 px-4">

        {/* #1 */}
        <TiltCard
          title="Sales Reporting Automation"
          desc="Automated daily, yesterday & monthly sales reports for WooCommerce & Laravel stores. Includes revenue, ROAS, AOV, conversion rate & order count."
        />

        {/* #2 */}
        <TiltCard
          title="Meta Ads Balance Monitoring"
          desc="Tracks Meta Ads balance & threshold. Sends WhatsApp/Discord alerts before ads stop so campaigns never go down during peak hours."
        />

        {/* #3 */}
        <TiltCard
          title="Server Health Monitoring Bot"
          desc="Monitors CPU, RAM, Disk, Cloudflare rules, SSL, uptime & checkout slowness. Sends instant alerts before customers feel slowdowns."
        />

        {/* #4 */}
        <TiltCard
          title="WordPress Auto Password Rotation"
          desc="Secure automation that rotates admin passwords & sends the new one to the owner only. Team gets temporary login links instead."
        />

        {/* #5 */}
        <TiltCard
          title="Automated Test Order Bot"
          desc="Places a smart test order to ensure checkout, payment gateways & confirmation flows work. Alerts if anything breaks."
        />

        {/* #6 */}
        <TiltCard
          title="Product Feed Fixer"
          desc="Automation that scans product feed issues (missing images, wrong attributes, price errors) and instantly sends a detailed report."
        />

        {/* #7 */}
        <TiltCard
          title="Lead Funnel Automation"
          desc="Collects leads from ads, website forms, WhatsApp, Instagram DMs. Deduplicates, scores, routes to sales & logs into Sheets."
        />

        {/* #8 */}
        <TiltCard
          title="Order Risk Scanner"
          desc="Flags suspicious orders using rule-based scoring: cash-on-delivery patterns, phone mismatches, city anomalies, and fast-repeat buyers."
        />

        {/* #9 */}
        <TiltCard
          title="WhatsApp Auto Replies"
          desc="Smart flows answering FAQs, confirming stock, collecting customer info, and routing to the correct support agent."
        />

        {/* #10 */}
        <TiltCard
          title="Dashboard Generator"
          desc="Generates full dashboards (HTML → Screenshot → Discord/WhatsApp) including graphs, KPIs & daily trends."
        />

        {/* #11 */}
        <TiltCard
          title="Meta Ads ROAS Merge"
          desc="Merges Meta Ads spend + WooCommerce revenue to calculate real ROAS automatically every day without manual effort."
        />

        {/* #12 */}
        <TiltCard
          title="Cloudflare Firewall Watcher"
          desc="Watches blocked URLs, good customers flagged as bots, challenge pages, and warns when checkout is mistakenly blocked."
        />

      </div>
    </div>
  );
}
