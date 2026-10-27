import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project, type ProjectCategory } from '../data/portfolioData';

const categories: ProjectCategory[] = [
  'All',
  'Full-Stack Web',
  'Frontend/UI',
  'Backend & Database',
  'AI & Data',
];

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-14 sm:py-20 border-t border-slate-900 bg-slate-950 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured Engineering Projects
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Koleksi Proyek Nyata & Studi Kasus Teknis
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
            Setiap proyek dilengkapi dokumentasi arsitektur perangkat lunak dengan metode STAR (Situation, Task, Action, Result) untuk pembuktian kompetensi teknis.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scroll on mobile) */}
        <div className="mt-8 flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 py-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border active:scale-95 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Compact & Space-Efficient */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => {
            const isTopRow = idx < 3;
            const isPlaceholder = project.id.startsWith('project-slot');

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isTopRow ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`interactive-card spotlight-card group flex flex-col rounded-2xl overflow-hidden ${
                  isPlaceholder
                    ? 'bg-slate-900/30 border-2 border-dashed border-slate-800/80 hover:border-slate-700 transition-all duration-300'
                    : 'bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/60 cursor-pointer'
                }`}
              >
                {isPlaceholder ? (
                  /* Placeholder Slot Card (Card 5-6) - Compact */
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between items-center text-center min-h-[250px]">
                    <div className="w-full flex justify-between items-center text-slate-500 text-xs font-mono">
                      <span>Slot #{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] border border-slate-700/60 font-medium">
                        Segera Hadir
                      </span>
                    </div>

                    <div className="my-auto py-4 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:scale-110 group-hover:text-indigo-400 group-hover:border-indigo-500/40 transition-all duration-300 shadow-inner">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                        {project.title.split('—')[0].trim()}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-500 max-w-xs leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="w-full pt-3 border-t border-slate-800/60 flex items-center justify-center">
                      <span className="text-[10px] font-mono text-slate-500">
                        Edit portfolioData.ts untuk menambahkan
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Standard Active Project Card - Compact */
                  <>
                    {/* Card Header Banner / Gradient */}
                    <div className={`h-28 w-full bg-gradient-to-tr ${project.imageGradient} p-3 sm:p-4 flex flex-col justify-between relative`}>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-950/70 text-white backdrop-blur-md border border-white/10">
                          Semester {project.semester}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/20 text-white backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      <div className="text-white font-bold text-base drop-shadow-md">
                        {project.title.split('—')[0]}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-2">
                          {project.summary}
                        </p>

                        {/* Tech Badges */}
                        <div className="mt-3 flex flex-wrap gap-1">
                          {project.techStack.map((tech, badgeIdx) => (
                            <span
                              key={badgeIdx}
                              className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${tech.color}`}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all duration-200"
                        >
                          <span>Studi Kasus STAR</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        <div className="flex items-center gap-2">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                              title="Live Demo"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                              title="Source Code GitHub"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* STAR Method Modal Pop-up */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-900/90">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Metode STAR Case Study
                    </span>
                    <span className="text-xs text-slate-400">
                      Semester {selectedProject.semester}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
                  aria-label="Tutup Modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 space-y-6 overflow-y-auto no-scrollbar">
                
                {/* Situation & Problem */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    1. Situation & Problem (Tantangan Awal)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.star.situation}
                  </p>
                </div>

                {/* Architecture & Action */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    2. Architecture & Technical Action (Pendekatan Solusi)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.star.architecture}
                  </p>
                </div>

                {/* Key Technical Highlights & Result */}
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    3. Key Results & Engineering Impact (Hasil Akhir)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.star.result}
                  </p>
                </div>

                {/* Tech Stack in Modal */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Teknologi yang Diterapkan:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-xs font-mono border ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                    >
                      <span>Lihat Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                    >
                      <span>Source Code</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
