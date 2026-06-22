import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, TrendingUp, Package, HeartPulse } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'finance', label: 'Finance' },
  { id: 'retail', label: 'Retail & ERP' },
  { id: 'medical', label: 'Healthcare' },
];

const projectMeta = {
  finance: { icon: TrendingUp, gradient: 'from-emerald-600/80 to-teal-900/90' },
  retail: { icon: Package, gradient: 'from-blue-600/80 to-indigo-900/90' },
  medical: { icon: HeartPulse, gradient: 'from-rose-600/80 to-purple-900/90' },
};

const projects = [
  {
    id: 1,
    title: 'Forex Exchange Office System',
    category: 'finance',
    desc: 'Real-time rate integrations, multi-currency ledgers, cashier terminals, and automated bank reconciliations for forex offices.',
    tech: ['React.js', 'PostgreSQL', 'FastAPI', 'WebSockets'],
    metrics: { latency: '35ms', uptime: '99.99%', volume: '$2.5M/day' },
    challenges: 'Synchronizing volatile exchange rates across multiple branches with sub-second latency while maintaining ledger atomicity.',
    solutions: 'Event-driven WebSocket pipeline backed by Redis, with database isolation transactions to prevent double-spending.',
  },
  {
    id: 2,
    title: 'Shop Inventory Management System',
    category: 'retail',
    desc: 'Cloud ERP tracking stock, purchase orders, and vendor payments across warehouses with barcode scanning and low-stock alerts.',
    tech: ['Next.js', 'GraphQL', 'AWS Lambdas', 'Node.js'],
    metrics: { latency: '48ms', uptime: '99.95%', volume: '18k orders/day' },
    challenges: 'Real-time stock sync across 15 high-volume storefronts with massive concurrency spikes.',
    solutions: 'Optimistic client-side UI sync with DynamoDB global tables and strong read consistency for precise stock records.',
  },
  {
    id: 3,
    title: 'Pharmacy Management System',
    category: 'medical',
    desc: 'Prescription dispensing, drug interaction checks, batch expiry notifications, and insurance claim approvals.',
    tech: ['React', 'Supabase', 'Python', 'TailwindCSS'],
    metrics: { latency: '40ms', uptime: '99.99%', volume: '8.4k patients/day' },
    challenges: 'Cross-referencing prescriptions against drug interaction libraries in real-time without processing delays.',
    solutions: 'Pre-indexed drug libraries in PostgreSQL full-text search stores, enabling lexical matching under 15ms.',
  },
];

function ProjectVisual({ category }) {
  const { icon: Icon, gradient } = projectMeta[category] ?? projectMeta.finance;
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
      </div>
      <Icon size={48} className="text-white/90 relative z-10" strokeWidth={1.5} />
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-badge">Case Studies</span>
          <h2 className="section-title">Featured Client Deliveries</h2>
          <p className="section-desc">
            High-performance enterprise systems we&apos;ve shipped to production across Ethiopia.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="filter-grid mb-10 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2.5 sm:px-5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer text-center ${
                  filter === cat.id
                    ? 'btn-primary !px-4 sm:!px-5 !py-2.5 shadow-md'
                    : 'btn-secondary !px-4 sm:!px-5 !py-2.5 !text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08} className="h-full">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group glass-card keep-glass-mobile overflow-hidden cursor-pointer flex flex-col !p-0 hover:-translate-y-1 h-full"
              >
                <div className="relative overflow-hidden aspect-video border-b border-[#166804]/8 bg-slate-900">
                  <ProjectVisual category={project.category} />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-white text-[#166804] shadow-lg flex items-center gap-1.5">
                      View Details <ExternalLink size={12} />
                    </span>
                  </div>
                </div>

                <div className="p-6 text-left flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-[#e8f5e6] text-[#166804] border border-[#166804]/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-[#166804] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">{project.desc}</p>
                  <span className="text-xs font-bold text-[#2180cc] flex items-center gap-1">
                    View architecture <ExternalLink size={12} />
                  </span>
                </div>
              </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                className="relative w-full max-w-3xl glass-card !rounded-3xl shadow-2xl overflow-y-auto max-h-[92vh] z-10 text-left !bg-white/95"
              >
                <div className="relative aspect-video w-full border-b border-[#166804]/10 bg-slate-950 overflow-hidden">
                  <ProjectVisual category={selectedProject.category} />
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-slate-900/70 text-white hover:bg-slate-900 transition-colors duration-300 border border-white/15"
                    aria-label="Close details"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="section-badge text-[10px]">{selectedProject.category.toUpperCase()} SOLUTION</span>
                      <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-1">{selectedProject.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1.5 rounded-xl glass-card !rounded-xl !p-3 text-center !shadow-none">
                        <div className="text-[9px] font-bold text-slate-500">LATENCY</div>
                        <div className="text-xs font-extrabold text-[#2180cc] font-mono">{selectedProject.metrics.latency}</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl glass-card !rounded-xl !p-3 text-center !shadow-none">
                        <div className="text-[9px] font-bold text-slate-500">UPTIME</div>
                        <div className="text-xs font-extrabold text-[#166804] font-mono">{selectedProject.metrics.uptime}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{selectedProject.desc}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-[#fef2f2] border border-red-100">
                      <h4 className="text-xs font-bold text-red-600 mb-2">The Challenge</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#e8f5e6] border border-[#166804]/15">
                      <h4 className="text-xs font-bold text-[#166804] mb-2">Our Solution</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{selectedProject.solutions}</p>
                    </div>
                  </div>

                  <div className="border-t border-[#166804]/10 pt-6 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-slate-500 mr-1">Core Tech:</span>
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#e8f5e6] text-[#166804] border border-[#166804]/12"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
