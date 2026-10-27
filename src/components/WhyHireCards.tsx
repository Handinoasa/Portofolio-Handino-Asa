import React from 'react';
import { motion } from 'framer-motion';
import { whyHireCards } from '../data/portfolioData';

// Icons mapping helper for clean React SVG rendering
const iconMap: Record<string, React.ReactNode> = {
  Brain: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Layers: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Lightbulb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

// 4 Corner offsets for each card converging to the center
// Card 0: Top-Left Corner (-X, -Y) -> Center (0, 0)
// Card 1: Top-Right Corner (+X, -Y) -> Center (0, 0)
// Card 2: Bottom-Left Corner (-X, +Y) -> Center (0, 0)
// Card 3: Bottom-Right Corner (+X, +Y) -> Center (0, 0)
const cornerPositions = [
  { x: -100, y: -70 }, // 0: Sudut Kiri Atas
  { x: 100, y: -70 },  // 1: Sudut Kanan Atas
  { x: -100, y: 70 },  // 2: Sudut Kiri Bawah
  { x: 100, y: 70 },   // 3: Sudut Kanan Bawah
];

export default function WhyHireCards() {
  return (
    <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      {whyHireCards.map((card, index) => {
        const corner = cornerPositions[index % 4];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: corner.x, y: corner.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="interactive-card spotlight-card relative group p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/60 overflow-hidden cursor-pointer"
          >
            {/* Ambient gradient background inside card */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-50 rounded-2xl pointer-events-none`}></div>

            <div className="relative z-10">
              {/* Top Row: Icon & Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors duration-200">
                  {iconMap[card.icon] || iconMap.Brain}
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-800/50 border border-slate-700/40">
                  0{index + 1} // Value Pillar
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider mt-0.5 mb-2">
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Highlights Tags */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {card.highlights.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
