import React from 'react';
import { Code2, Smartphone, Cloud, Database, Layers, Globe } from 'lucide-react';

const techs = [
  { icon: Code2, name: 'React & Next.js' },
  { icon: Smartphone, name: 'React Native' },
  { icon: Cloud, name: 'AWS & Cloud' },
  { icon: Database, name: 'PostgreSQL' },
  { icon: Layers, name: 'FastAPI & Node' },
  { icon: Globe, name: 'Tailwind CSS' },
  { icon: Code2, name: 'TypeScript' },
  { icon: Database, name: 'Supabase' },
];

export default function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <section className="relative py-8 overflow-hidden border-y border-[#166804]/8 bg-white/40 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f4f9f2] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f4f9f2] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track gap-8 px-4">
        {items.map(({ icon: Icon, name }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card !rounded-full !py-2.5 !px-5 shrink-0"
          >
            <Icon size={16} className="text-[#166804]" />
            <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
