import React from 'react';
import { Laptop, Smartphone, Package, QrCode, MessageSquareCode, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
  icon: Laptop,
  title: "Websites and Ecommerce Softwares",
  desc: "Professional corporate websites and ecommerce software built to increase conversions, improve UX, and strengthen your online presence.",
  accent: false
}, { icon: Smartphone, title: 'Mobile App Development', desc: 'Breathtaking and blazing-fast iOS and Android apps with full offline-first capabilities, push notifications, and clean dashboards.', accent: true },
  { icon: Package, title: 'Inventory & Warehouse ERP', desc: 'Real-time stock tracking, advanced barcode scanning, and intelligent supply chain controls to eliminate inventory shrinkage.', accent: false },
  { icon: QrCode, title: 'Restaurant QR Menus', desc: 'Contactless digital menus with instant menu price updates, interactive ordering dashboards, and comprehensive vendor analytics.', accent: true },
  { icon: MessageSquareCode, title: 'Enterprise Tech Consultation', desc: 'Strategic architecture advice on cloud server deployments, security compliance, and technology stack optimization.', accent: false },
  { icon: ShieldCheck, title: 'Shop & Clinic Software', desc: 'All-in-one billing, inventory, and doctor or client schedulers custom-tailored for retail pharmacies, clinics, and shops.', accent: true },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
            High-Performance Digital Solutions
          </h2>
          <p className="section-desc text-sm sm:text-base">
            We don&apos;t just write code — we build custom software that drives sales, saves time, and scales your business seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group glass-card p-5 sm:p-6 lg:p-8 flex flex-col hover:-translate-y-1.5"
              >
                <div className={`icon-box mb-4 sm:mb-6 group-hover:scale-105 ${s.accent ? 'icon-box-accent' : ''}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#166804] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{s.desc}</p>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs font-bold text-[#166804] hover:text-[#1a7a05] transition-colors cursor-pointer group/btn"
                >
                  Request a Proposal
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
