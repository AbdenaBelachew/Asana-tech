import React from 'react';
import { Quote, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: 'Daniel T.',
    role: 'Forex Office Owner',
    text: 'Asana Systems built our exchange platform from scratch. Real-time rates, multi-branch support everything works flawlessly. They understood our business from day one.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Hanna M.',
    role: 'Retail Shop Manager',
    text: 'Our inventory system eliminated stock discrepancies completely. Barcode scanning, low-stock alerts, and a clean dashboard exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Dr. Samuel K.',
    role: 'Pharmacy Director',
    text: 'The pharmacy system handles prescriptions, expiry tracking, and insurance claims seamlessly. Professional team and great ongoing support.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="section-badge">Client Stories</span>
          <h2 className="section-title">Trusted by Growing Businesses</h2>
          <p className="section-desc">
            Real feedback from clients who chose Asana Systems to power their operations.
          </p>
        </ScrollReveal>

        <div className="testimonials-grid grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i * 0.1}
              className={t.featured ? 'col-span-2 lg:col-span-1' : ''}
            >
              <div className={`glass-card mobile-grid-card h-full flex flex-col hover:-translate-y-1 ${t.featured ? 'p-6 sm:p-7' : 'p-4 sm:p-7'}`}>
                <Quote size={t.featured ? 28 : 22} className="text-[#166804]/25 mb-3 sm:mb-4" />
                <p className={`text-slate-600 leading-relaxed flex-1 mb-4 sm:mb-6 ${t.featured ? 'text-sm sm:text-base' : 'text-[11px] sm:text-sm line-clamp-4 sm:line-clamp-none'}`}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-amber-400 text-amber-400 sm:w-3.5 sm:h-3.5" />
                  ))}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900">{t.name}</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
