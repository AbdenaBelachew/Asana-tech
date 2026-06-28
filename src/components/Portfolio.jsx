import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ExternalLink,
  X,
  HeartPulse,
  ShoppingBag,
  CalendarDays,
  Plane,
  ChevronLeft,
  ChevronRight,
  Globe,
} from 'lucide-react';
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

const categoryLabels = {
  healthcare: 'Healthcare',
  retail: 'Retail & E-Commerce',
  events: 'Events & Media',
  travel: 'Travel',
};

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
    url: 'https://drmotimulatuortho.com/',
    image: drmotiImg,
    desc: 'Professional website for Dr. Moti Mulatu, orthopedic surgeon in Adama — services, credentials, and patient-friendly appointment flow.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
  },
  {
    id: 2,
    title: 'Kan Seenaa Closet',
    category: 'retail',
    url: 'https://kansena-closet.vercel.app/',
    image: kansenaImg,
    desc: 'Fashion e-commerce storefront for Kan Seenaa Closet — brand storytelling, product showcase, and a polished “Wear Your Royalty” experience.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
  },
  {
    id: 3,
    title: 'Womove Active',
    category: 'retail',
    url: 'https://womoveactivewear.com/',
    image: womoveImg,
    desc: 'Activewear brand website — “Built to Move. Made to Be Seen.” Product highlights, brand identity, and mobile-first shopping flow.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
  },
  {
    id: 4,
    title: 'Meri Didha Events',
    category: 'events',
    url: 'https://merididha.netlify.app/',
    desc: 'Event promotion platform for Meri Didha Promotion & Events — upcoming events, promotions, podcast, team, and contact in Addis Ababa.',
    tech: ['React', 'TailwindCSS', 'Netlify'],
  },
  {
    id: 5,
    title: 'Yeroon Travel',
    category: 'travel',
    url: 'https://yeroon-travel.vercel.app/',
    image: yeroonImg,
    desc: 'Travel agency website for Yeroon Travel in Piassa, Addis Ababa — Dubai packages, flights, destinations, and booking inquiries.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
  },
  {
    id: 6,
    title: 'Lidya Lifestyle',
    category: 'retail',
    url: 'https://lidu-store.vercel.app/',
    image: liduImg,
    desc: 'Lifestyle e-commerce store — “God Is In The Details.” Curated products, refined brand presentation, and a seamless shopping experience.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
  },
];

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function ProjectVisual({ image, category, title, variant = 'card' }) {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} website preview`}
        className={variant === 'modal' ? 'project-modal-screenshot' : 'project-card-screenshot'}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const { icon: Icon, gradient } = projectMeta[category] ?? projectMeta.retail;
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <Icon size={40} className="text-white/90 relative z-10" strokeWidth={1.5} />
    </div>
  );
}

function ProjectModal({ project, projects: list, onClose, onNavigate }) {
  const reduceMotion = useReducedMotion();
  const { gradient } = projectMeta[project.category] ?? projectMeta.retail;
  const currentIndex = list.findIndex((p) => p.id === project.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < list.length - 1;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onNavigate(list[currentIndex - 1]);
      if (e.key === 'ArrowRight' && hasNext) onNavigate(list[currentIndex + 1]);
    },
    [onClose, onNavigate, list, currentIndex, hasPrev, hasNext],
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="project-modal-root fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.98 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        className="project-modal-panel relative w-full max-w-sm sm:max-w-md z-10 flex flex-col overflow-hidden rounded-2xl shadow-2xl mx-auto"
      >
        <div className={`project-modal-visual shrink-0 bg-gradient-to-br ${gradient}`}>
          <div className="project-modal-browser">
            <div className="project-modal-browser-bar">
              {project.url && (
                <div className="project-modal-browser-url">
                  <Globe size={11} className="shrink-0 opacity-60" />
                  <span className="truncate">{getHostname(project.url)}</span>
                </div>
              )}
              <button
                type="button"
                onClick={onClose}
                className="project-modal-icon-btn project-modal-icon-btn--close"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>
            <div className="project-modal-browser-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="project-modal-screenshot-wrap"
                >
                  <ProjectVisual
                    image={project.image}
                    category={project.category}
                    title={project.title}
                    variant="modal"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="project-modal-body overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-modal-header">
                <span className="project-modal-category">
                  {categoryLabels[project.category] ?? project.category}
                </span>
                <h3 id="project-modal-title" className="project-modal-title">
                  {project.title}
                </h3>
              </div>

              <p className="project-modal-desc">{project.desc}</p>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-visit-btn"
                >
                  Visit Live Site
                  <ExternalLink size={14} />
                </a>
              )}

              <div className="project-modal-tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="project-modal-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-modal-nav">
                <button
                  type="button"
                  onClick={() => hasPrev && onNavigate(list[currentIndex - 1])}
                  disabled={!hasPrev}
                  className="project-modal-nav-btn"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={15} />
                </button>
                <span className="project-modal-counter">
                  {currentIndex + 1} / {list.length}
                </span>
                <button
                  type="button"
                  onClick={() => hasNext && onNavigate(list[currentIndex + 1])}
                  disabled={!hasNext}
                  className="project-modal-nav-btn"
                  aria-label="Next project"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
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
                  <div className="relative overflow-hidden aspect-[4/3] sm:aspect-video border-b border-[#166804]/8 project-card-media">
                    <ProjectVisual
                      image={project.image}
                      category={project.category}
                      title={project.title}
                      variant="card"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full text-xs font-bold bg-white text-[#166804] shadow-lg flex items-center gap-1.5">
                        View Details <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 text-left flex-1 flex flex-col">
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#166804] transition-colors duration-300 leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
                      {project.desc}
                    </p>
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
            <ProjectModal
              project={selectedProject}
              projects={filteredProjects}
              onClose={() => setSelectedProject(null)}
              onNavigate={setSelectedProject}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
