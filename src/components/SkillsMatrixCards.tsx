import React from 'react';
import { motion } from 'framer-motion';
import { skills, type SkillCategory } from '../data/portfolioData';

const categories: SkillCategory[] = [
  'Languages',
  'Frontend & Mobile',
  'Backend, Databases & Cloud',
  'Tools, DevOps & Workflow',
];

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  Languages: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'Frontend & Mobile': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  'Backend, Databases & Cloud': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  'Tools, DevOps & Workflow': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const levelBadgeStyles = {
  Core: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
  Intermediate: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  Learning: 'bg-slate-700/30 text-slate-400 border-slate-700/50',
};

export default function SkillsMatrixCards() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat, idx) => {
        const catSkills = skills.filter((s) => s.category === cat);
        // Card 1 (idx 0): dari atas (-70)
        // Card 2 (idx 1): dari bawah (70)
        // Card 3 (idx 2): dari atas (-70)
        // Card 4 (idx 3): dari bawah (70)
        const startY = idx % 2 === 0 ? -70 : 70;

        return (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: startY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="interactive-card spotlight-card p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Group Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80 mb-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  {categoryIcons[cat]}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-white truncate">{cat}</h3>
                  <span className="text-[11px] font-mono text-slate-400">{catSkills.length} tools</span>
                </div>
              </div>

              {/* Skills List in Group */}
              <div className="space-y-2">
                {catSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/30 flex items-center justify-between gap-2 hover:bg-slate-800/80 hover:border-slate-600/60 transition-all duration-150"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold text-slate-100 block truncate">{skill.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono block truncate">
                        {skill.context.split('—')[0]}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-mono border ${levelBadgeStyles[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
