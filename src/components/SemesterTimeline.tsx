import React, { useState } from 'react';
import { semesters, type Semester } from '../data/portfolioData';

export default function SemesterTimeline() {
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>(5);

  const displayedSemesters: Semester[] =
    selectedSemester === 'all'
      ? semesters
      : semesters.filter((sem) => sem.id === selectedSemester);

  return (
    <section id="timeline" className="py-14 sm:py-20 border-t border-slate-900 bg-slate-950">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Academic & Competency Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perjalanan Kuliah & Progres Kompetensi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Eksplorasi kurikulum mata kuliah, penguasaan konsep esensial, dan proyek praktikum nyata dari Semester 1 hingga Semester 5.
          </p>
        </div>

        {/* Tab Selector (Responsive & Horizontal Scroll for mobile) */}
        <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 py-2 px-1">
          {semesters.map((sem) => (
            <button
              key={sem.id}
              onClick={() => setSelectedSemester(sem.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border active:scale-95 ${
                selectedSemester === sem.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              Semester {sem.id}
            </button>
          ))}
          <button
            onClick={() => setSelectedSemester('all')}
            className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border active:scale-95 ${
              selectedSemester === 'all'
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            Tampilkan Semua (Sem 1-5)
          </button>
        </div>

        {/* Semester Content Display */}
        <div className="mt-12 space-y-12">
          {displayedSemesters.map((sem) => (
            <div
              key={sem.id}
              className="interactive-card relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-xl transition-all duration-300"
            >
              {/* Semester Badge & Theme Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-white"
                      style={{ backgroundColor: sem.accentColor }}
                    >
                      SEMESTER 0{sem.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {sem.theme}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    <strong className="text-slate-200">Output Kompetensi:</strong>{' '}
                    {sem.competencyOutput}
                  </p>
                </div>
              </div>

              {/* Grid 2 Columns: Mata Kuliah & Praktikum/Mini-Projects */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Courses List (7 Cols) */}
                <div className="lg:col-span-7">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    Mata Kuliah Utama & Topik Dipelajari
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {sem.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600/60 transition-colors"
                      >
                        <h5 className="font-semibold text-slate-200 text-sm mb-1.5 flex items-center gap-2">
                          <span className="text-xs font-mono text-indigo-400 font-bold">0{idx + 1}.</span>
                          {course.name}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Mini-Project / Praktikum (5 Cols) */}
                <div className="lg:col-span-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Key Mini-Project / Praktikum Lab
                  </h4>
                  <div className="space-y-3.5">
                    {sem.miniProjects.map((project, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 hover:border-emerald-700/50 transition-colors"
                      >
                        <h5 className="font-semibold text-emerald-300 text-sm mb-1">
                          {project.title}
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-900/40 text-emerald-300 border border-emerald-700/40"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
