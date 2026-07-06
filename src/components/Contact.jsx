import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Clock, Globe, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const contactInfo = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'hello@Furtu.com', 
    display: 'hello@Furtu.com',
    href: 'mailto:hello@Furtu.com',
    description: 'Drop us a line anytime'
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '+251 966 780 537', 
    display: '+251 966 780 537',
    href: 'tel:+251966780537', 
    accent: true,
    description: 'Mon-Fri, 9AM-6PM EAT'
  },
  { 
    icon: MapPin, 
    label: 'Office', 
    value: 'Bole, Addis Ababa, Ethiopia', 
    display: 'Bole, Addis Ababa',
    href: null,
    description: 'Visit us in person'
  },
];

const quickStats = [
  { icon: Clock, label: '< 4 Hours', desc: 'Response Time' },
  { icon: Globe, label: '10+ Projects', desc: 'Successfully Delivered' },
  { icon: MessageSquare, label: '24/7 Support', desc: 'Always Available' },
];

const inputClass =
  'w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#166804] focus:ring-2 focus:ring-[#166804]/10 transition-all duration-300 bg-white hover:border-slate-300';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    service: '', 
    budget: '',
    message: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ 
        name: '', 
        email: '', 
        phone: '',
        company: '',
        service: '', 
        budget: '',
        message: '' 
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Build Something Extraordinary</h2>
          <p className="section-desc">
            Whether you&apos;re starting from scratch or scaling an existing system, we&apos;re here to help. 
            Share your vision and we&apos;ll respond within 4 hours with a clear path forward.
          </p>
        </ScrollReveal>

        {/* Quick Stats */}
        <ScrollReveal className="mb-12 sm:mb-16">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card p-4 sm:p-5 text-center hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="icon-box w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 mb-0.5 sm:mb-1 font-display">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">
                    {stat.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Contact Info Sidebar */}
          <ScrollReveal className="lg:col-span-4" direction="right">
            <div className="space-y-4">
              <div className="glass-card p-6 sm:p-7">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-6 font-display">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="group">
                        <div className="flex items-start gap-4">
                          <div className={`icon-box w-11 h-11 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ${c.accent ? 'icon-box-accent' : ''}`}>
                            <Icon size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                              {c.label}
                            </p>
                            {c.href ? (
                              <a 
                                href={c.href} 
                                className="text-sm font-semibold text-slate-900 hover:text-[#166804] transition-colors duration-300 block mb-1"
                              >
                                {c.display}
                              </a>
                            ) : (
                              <p className="text-sm font-semibold text-slate-900 mb-1">
                                {c.display}
                              </p>
                            )}
                            {c.description && (
                              <p className="text-xs text-slate-500">
                                {c.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="glass-card p-5 sm:p-6 bg-gradient-to-br from-[#e8f5e6]/50 to-emerald-50/50 border border-[#166804]/15">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#166804]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-[#166804]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Free Consultation
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      No obligation. No pressure. Just a friendly conversation about your project goals and how we can help.
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass-card p-5 sm:p-6">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                  Office Hours
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Monday - Friday</span>
                    <span className="text-slate-900 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Saturday</span>
                    <span className="text-slate-900 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Sunday</span>
                    <span className="text-slate-500 font-semibold">Closed</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-3 pt-3 border-t border-slate-200">
                  East Africa Time (EAT) • GMT+3
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-8" delay={0.1} direction="left">
            <div className="glass-card p-6 sm:p-8 lg:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                  <div className="w-20 h-20 rounded-full bg-[#166804]/10 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-[#166804]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2 font-display">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                      We&apos;ve received your message and will get back to you within 4 business hours. 
                      In the meantime, feel free to explore our portfolio or check out our latest projects.
                    </p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setStatus('idle')} 
                    className="btn-secondary !px-8 !py-3 !text-sm mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 font-display">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-slate-600">
                      Fill out the form below and we&apos;ll be in touch shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          placeholder="+251 912 345 678"
                          value={form.phone || ''}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="c-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Company / Organization
                        </label>
                        <input
                          id="c-company"
                          type="text"
                          placeholder="Your Company Name"
                          value={form.company || ''}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="c-service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={`${inputClass} cursor-pointer`}
                        required
                      >
                        <option value="">Select a service...</option>
                        <option value="custom">Custom Software Development</option>
                        <option value="web">Web Application Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="ai">AI Solutions</option>
                        <option value="cloud">Cloud Services & DevOps</option>
                        <option value="erp">Enterprise ERP System</option>
                        <option value="api">API Development</option>
                        <option value="cyber">Cybersecurity</option>
                        <option value="consultation">Digital Transformation Consulting</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

              

                    <div>
                      <label htmlFor="c-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        required
                        rows={3}
                        placeholder="Tell us about your project goals, key requirements, timeline, and any specific challenges you're facing..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                      <p className="text-xs text-slate-500 mt-2">
                        Minimum 20 characters. Be as detailed as possible to help us understand your needs.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={status === 'sending'} 
                        className="btn-primary !w-full !py-4 !rounded-xl disabled:opacity-70 disabled:cursor-not-allowed text-base font-bold shadow-lg hover:shadow-xl"
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> 
                            <span>Sending Your Message...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} /> 
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                      <p className="text-xs text-slate-500 text-center mt-3">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
