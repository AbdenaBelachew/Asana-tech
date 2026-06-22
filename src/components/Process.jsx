import React from 'react';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery Call',
    desc: 'We learn your goals, users, and timeline — no jargon, just a clear conversation.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Plan',
    desc: 'Wireframes, architecture, and a milestone roadmap so you know what comes next.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Build & Iterate',
    desc: 'Agile sprints with weekly demos. You see progress early and give feedback.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    desc: 'Deployment, training, and ongoing support — we stay close after go-live.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">From Idea to Production in 4 Steps</h2>
          <p className="section-desc">
            A transparent, battle-tested process that keeps you in the loop at every stage.
          </p>
        </ScrollReveal>

        <div className="process-steps-grid grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-[3.25rem] left-[12%] right-[12%] h-px process-line" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.step} delay={i * 0.08}>
                <div className="glass-card mobile-grid-card p-4 sm:p-6 lg:p-7 h-full flex flex-col hover:-translate-y-1 relative">
                  <div className="grid grid-cols-[auto_1fr] sm:flex sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-5">
                    <div className="icon-box w-10 h-10 sm:w-12 sm:h-12">
                      <Icon size={20} />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#166804]/15 font-display text-right sm:text-left">{s.step}</span>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-extrabold text-slate-900 mb-1.5 sm:mb-2 font-display">{s.title}</h3>
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
