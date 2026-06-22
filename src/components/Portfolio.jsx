import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, HeartPulse, ShoppingBag, CalendarDays, Plane } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import drmotiImg from '../assets/drmoti.png';
import kansenaImg from '../assets/kansena.png';
import womoveImg from '../assets/womove.png';
import yeroonImg from '../assets/yeroon.png';
import liduImg from '../assets/lidu.png';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'retail', label: 'Retail & E-Commerce' },
  { id: 'events', label: 'Events & Media' },
  { id: 'travel', label: 'Travel' },
];

const projectMeta = {
  healthcare: { icon: HeartPulse, gradient: 'from-rose-600/80 to-purple-900/90' },
  retail: { icon: ShoppingBag, gradient: 'from-blue-600/80 to-indigo-900/90' },
  events: { icon: CalendarDays, gradient: 'from-amber-600/80 to-orange-900/90' },
  travel: { icon: Plane, gradient: 'from-cyan-600/80 to-blue-900/90' },
};

const projects = [
  {
    id: 1,
    title: 'Dr. Moti Ortho',
    category: 'healthcare',
    url: 'https://drmoti-ortho.vercel.app/',
    image: drmotiImg,
    desc: 'Professional website for Dr. Moti Mulatu, orthopedic surgeon in Adama — services, credentials, and patient-friendly appointment flow.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
    metrics: { latency: '380ms', uptime: '99.9%', volume: 'Adama, ET' },
    challenges: 'Building trust online for a medical practice while keeping information clear and accessible on mobile devices.',
    solutions: 'Mobile-first responsive design, fast Vercel deployment, and structured service pages with clear contact CTAs.',
  },
  {
    id: 2,
    title: 'Kan Seenaa Closet',
    category: 'retail',
    url: 'https://kansena-closet.vercel.app/',
    image: kansenaImg,
    desc: 'Fashion e-commerce storefront for Kan Seenaa Closet — brand storytelling, product showcase, and a polished “Wear Your Royalty” experience.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
    metrics: { latency: '410ms', uptime: '99.9%', volume: 'E-Commerce' },
    challenges: 'Translating a premium fashion brand into a digital storefront that feels elegant on every screen size.',
    solutions: 'Visual-first layout, smooth animations, and a lightweight stack deployed globally on Vercel.',
  },
  {
    id: 3,
    title: 'Womove Active',
    category: 'retail',
    url: 'https://womove-active.vercel.app/',
    image: womoveImg,
    desc: 'Activewear brand website — “Built to Move. Made to Be Seen.” Product highlights, brand identity, and mobile-first shopping flow.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
    metrics: { latency: '395ms', uptime: '99.9%', volume: 'Activewear' },
    challenges: 'Capturing an energetic fitness brand identity while keeping product browsing fast and intuitive.',
    solutions: 'Bold typography, responsive product grids, and optimized assets for quick load times on mobile.',
  },
  {
    id: 4,
    title: 'Meri Didha Events',
    category: 'events',
    url: 'https://merididha.netlify.app/',
    desc: 'Event promotion platform for Meri Didha Promotion & Events — upcoming events, promotions, podcast, team, and contact in Addis Ababa.',
    tech: ['React', 'TailwindCSS', 'Netlify'],
    metrics: { latency: '450ms', uptime: '99.9%', volume: '200+ Events' },
    challenges: 'Showcasing diverse events, promotions, and podcast content in one cohesive, easy-to-navigate site.',
    solutions: 'Section-based layout with event cards, promotion highlights, and YouTube podcast integration on Netlify.',
  },
  {
    id: 5,
    title: 'Yeroon Travel',
    category: 'travel',
    url: 'https://yeroon-travel.vercel.app/',
    image: yeroonImg,
    desc: 'Travel agency website for Yeroon Travel in Piassa, Addis Ababa — Dubai packages, flights, destinations, and booking inquiries.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
    metrics: { latency: '400ms', uptime: '99.9%', volume: 'Piassa, AA' },
    challenges: 'Presenting travel packages and destination info in a way that drives inquiries from local customers.',
    solutions: 'Destination-focused pages, clear package pricing sections, and prominent contact CTAs deployed on Vercel.',
  },
  {
    id: 6,
    title: 'Lidya Lifestyle',
    category: 'retail',
    url: 'https://lidu-store.vercel.app/',
    image: liduImg,
    desc: 'Lifestyle e-commerce store — “God Is In The Details.” Curated products, refined brand presentation, and a seamless shopping experience.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
    metrics: { latency: '405ms', uptime: '99.9%', volume: 'Lifestyle' },
    challenges: 'Reflecting a detail-oriented lifestyle brand online while keeping product discovery simple and elegant.',
    solutions: 'Clean product-focused layout, subtle brand styling, and fast Vercel hosting for a polished storefront.',
  },
];

function ProjectVisual({ image, category, title }) {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} website preview`}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    );
  }

  const { icon: Icon, gradient } = projectMeta[category] ?? projectMeta.retail;
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
                  <ProjectVisual image={project.image} category={project.category} title={project.title} />
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
                    View project <ExternalLink size={12} />
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
                  <ProjectVisual
                    image={selectedProject.image}
                    category={selectedProject.category}
                    title={selectedProject.title}
                  />
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

                  <div className="border-t border-[#166804]/10 pt-6 flex flex-wrap gap-3 items-center justify-between">
                    <div className="flex flex-wrap gap-2 items-center">
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
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary !px-4 !py-2 text-xs inline-flex items-center gap-1.5 shrink-0"
                      >
                        Visit Live Site <ExternalLink size={14} />
                      </a>
                    )}
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
