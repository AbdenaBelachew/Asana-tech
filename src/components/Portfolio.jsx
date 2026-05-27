import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'finance', label: 'Finance' },
  { id: 'retail', label: 'Retail & ERP' },
  { id: 'medical', label: 'Healthcare' },
];

const projects = [
  {
    id: 1,
    image: '/images/project1.png',
    title: 'Forex Exchange Office System',
    category: 'finance',
    desc: 'A comprehensive legal management platform for forex offices with real-time rate integrations, multi-currency transaction ledgers, cashier terminal controls, and automated bank reconciliations.',
    tech: ['React.js', 'PostgreSQL', 'FastAPI', 'WebSockets'],
    metrics: { latency: '35ms', uptime: '99.99%', volume: '$2.5M/day' },
    challenges: 'Synchronizing volatile currency exchange rates across multiple branches with sub-second latency while keeping absolute ledger transaction atomicity.',
    solutions: 'Configured an event-driven WebSocket pipeline backed by Redis memory stores, and leveraged database isolation transactions to prevent double-spending anomalies.',
  },
  {
    id: 2,
    image: '/images/project2.png',
    title: 'Shop Inventory Management System',
    category: 'retail',
    desc: 'A secure cloud ERP solution tracking stock levels, purchase ledger orders, and vendor disbursements across multiple warehouse locations. Features active barcode scanning and automated low-stock warnings.',
    tech: ['Next.js', 'GraphQL', 'AWS Lambdas', 'Node.js'],
    metrics: { latency: '48ms', uptime: '99.95%', volume: '18k orders/day' },
    challenges: 'Real-time stock level synchronization across 15 high-volume brick-and-mortar storefronts experiencing massive concurrency spikes.',
    solutions: 'Built an optimistic client-side UI sync mechanism and leveraged DynamoDB global databases with strong read consistencies to secure precise stock records.',
  },
  {
    id: 3,
    image: '/images/project3.png',
    title: 'Pharmacy Management System',
    category: 'medical',
    desc: 'A clinical pharmacy platform providing prescription dispensing, automated drug interaction checks, batch expiry notifications, and insurance claim approvals.',
    tech: ['React', 'Supabase', 'Python Core', 'TailwindCSS'],
    metrics: { latency: '40ms', uptime: '99.99%', volume: '8.4k patients/day' },
    challenges: 'Cross-referencing prescription orders against drug interaction libraries in real-time without introducing processing delays.',
    solutions: 'Pre-indexed drug libraries inside in-memory PostgreSQL search stores, enabling rapid lexical search matching under 15ms.',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-badge">Case Studies</span>
          <h2 className="section-title">Featured Client Deliveries</h2>
          <p className="section-desc">
            Explore some of the high-performance enterprise systems we&apos;ve shipped to production.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'btn-primary !px-5 !py-2.5 shadow-md'
                  : 'btn-secondary !px-5 !py-2.5 !text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group glass-card overflow-hidden cursor-pointer flex flex-col !p-0 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-video border-b border-[#166804]/8 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-white text-[#166804] shadow-lg flex items-center gap-1.5">
                      View Details <ExternalLink size={12} />
                    </span>
                  </div>
                </div>

                <div className="p-6 text-left flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
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
                <div className="relative aspect-video w-full border-b border-[#166804]/10 bg-slate-950">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
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
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
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
