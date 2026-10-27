import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

const typeLabels: Record<string, { label: string; color: string }> = {
  organization: { label: 'Organisasi Kampus', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' },
  committee: { label: 'Kepanitiaan Event', color: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
  lab: { label: 'Asisten Laboratorium', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
  certification: { label: 'Sertifikasi Industri', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  achievement: { label: 'Pencapaian & Prestasi', color: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
};

// Card 1 (idx 0) & Card 3 (idx 2) from Top (y: -70)
// Card 2 (idx 1) & Card 4 (idx 3) from Bottom (y: 70)
const initialYOffsets = [-70, 70, -70, 70];

export default function ExperienceCards() {
  return (
    <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {experiences.map((exp, index) => {
        const typeMeta = typeLabels[exp.type] || typeLabels.organization;
        const isEmpty = !exp.title || exp.title.trim() === '';
        const initialY = initialYOffsets[index % initialYOffsets.length];

        return (
          <motion.div
            key={exp.id || index}
            initial={{ opacity: 0, y: initialY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col"
          >
            {isEmpty ? (
              <div className="interactive-card relative p-8 rounded-2xl bg-slate-900/30 border border-dashed border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[220px] h-full group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-500/40 transition-colors mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors">
                  Card Pengalaman 0{index + 1}
                </h3>
                <p className="text-xs font-mono text-slate-500 group-hover:text-indigo-400 transition-colors mt-1">
                  [Card Kosong — Siap diisi di portfolioData.ts]
                </p>
              </div>
            ) : (
              <div className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Type Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${typeMeta.color}`}>
                      {typeMeta.label}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-indigo-400 mt-0.5 mb-3">
                    {exp.organization}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Multi-Credentials / Certificates list for the same event */}
                  {exp.credentials && exp.credentials.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-800/60">
                      <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>Sertifikat & Kredensial Diperoleh ({exp.credentials.length}):</span>
                      </div>
                      <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                        {exp.credentials.map((cred, cIdx) => (
                          <a
                            key={cIdx}
                            href={cred.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all text-xs font-mono group/cred"
                          >
                            <div className="flex items-center gap-2 text-slate-300 group-hover/cred:text-indigo-300 min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                              <span className="truncate">{cred.name}</span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[11px] text-indigo-400 shrink-0 ml-2">
                              <span>{cred.type === 'pdf' ? 'Lihat PDF' : 'Buka Kredensial'}</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tags and link */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 hover:underline"
                    >
                      <span>Verifikasi Kredensial</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
