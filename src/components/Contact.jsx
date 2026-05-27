import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Abdiol4322@gmail.com', href: 'mailto:Abdiol4322@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+251 966 780 537', href: 'tel:+251966780537', accent: true },
  { icon: MapPin, label: 'Location', value: 'Bole, Addis Ababa', href: null },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[#166804]/12 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#166804] focus:ring-2 focus:ring-[#166804]/15 transition-all duration-300 bg-white/90';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', service: 'web', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', service: 'web', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge">Contact Us</span>
          <h2 className="section-title">Ready to Build Something?</h2>
          <p className="section-desc">
            Tell us about your project and we&apos;ll get back to you within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="glass-card !rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5">
                  <div className={`icon-box w-11 h-11 flex-shrink-0 ${c.accent ? 'icon-box-accent' : ''}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-slate-800 hover:text-[#166804] transition-colors duration-300">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-800">{c.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="p-5 rounded-2xl bg-[#e8f5e6]/90 border border-[#166804]/15">
              <p className="text-sm font-semibold text-[#166804] leading-relaxed">
                We reply within 4 hours during business days. No obligation — just a friendly conversation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 glass-card p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full icon-box">
                  <CheckCircle2 size={32} className="text-[#166804]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600 max-w-sm text-sm leading-relaxed">
                  Thank you for reaching out. Our team will contact you within 4 business hours.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn-secondary !px-6 !py-2.5 !text-sm mt-2">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Service Needed</label>
                  <select
                    id="c-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputClass} cursor-pointer appearance-none`}
                  >
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="inventory">Inventory System</option>
                    <option value="qr">Restaurant QR Menu</option>
                    <option value="consultation">IT Consultation</option>
                    <option value="shop">Shop / Clinic Software</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Tell Us About Your Project</label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    placeholder="Describe what you need and any key requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn-primary !w-full !rounded-xl disabled:opacity-70">
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
