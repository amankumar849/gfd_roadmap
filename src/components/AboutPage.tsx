import React from 'react';
import { useProgress } from './ProgressContext';
import { Users, Landmark, BookOpen, Compass, Shield, Award, Sparkles, Target, GraduationCap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { getStats } = useProgress();
  const stats = getStats();

  const statistics = [
    { label: 'Enrolled Students', value: '10,000+', icon: Users, desc: 'Active scholars studying daily' },
    { label: 'Structured Roadmaps', value: '3 Active paths', icon: Landmark, desc: 'GATE CS, Full Stack, and DSA' },
    { label: 'Verified Resources', value: '100+ References', icon: BookOpen, desc: 'NPTEL, standard books, official docs' },
    { label: 'Concept Simulators', value: '7 Sandboxes', icon: Sparkles, desc: 'Interactive visual testing tools' }
  ];

  return (
    <div className="space-y-12 animate-fade-in text-left">
      {/* 1. HERO HEADER */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-xs bg-linear-to-b from-blue-600/5 via-cyan-500/5 to-transparent">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 font-mono">
            Platform Vision
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            About GFD RoadMap
          </h1>
          <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-sans">
            GFD RoadMap is an interactive open-source syllabus library built to guide prospective engineering candidates, college scholars, and professional builders through consecutive, rigorous computer science subjects.
          </p>
        </div>
      </section>

      {/* 2. STATS CARDS GRID */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statistics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="h-9 w-9 rounded-lg bg-blue-50 dark:bg-slate-850 text-blue-600 dark:text-cyan-450 flex items-center justify-center">
                <Icon size={18} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white font-mono">
                  {item.value}
                </div>
                <h4 className="text-xs font-bold text-slate-600 dark:text-slate-300 mt-1">
                  {item.label}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5 max-w-[140px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. CORE MISSION & VISION PHILOSOPHY (BENTO CELLS) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Mission Cell */}
        <div className="p-6 rounded-2xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 flex flex-col justify-between text-left">
          <div className="space-y-3">
            <div className="h-8 w-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Target size={18} />
            </div>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-white">
              Our Mission
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed font-sans">
              To eliminate tutorial stagnation and random video browsing. By organizing technology curriculums into clear, interactive logical sequences, we empower students to learn at high speed while practicing typical problems with zero ambiguity.
            </p>
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-4 leading-normal font-semibold">
            ✦ Streamlining computer science concepts since 2026.
          </span>
        </div>

        {/* Vision Cell */}
        <div className="p-6 rounded-2xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 flex flex-col justify-between text-left">
          <div className="space-y-3">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <Compass size={18} />
            </div>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-white">
              Our Vision
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed font-sans">
              To democratize world-class technical curriculum layout guides for free. Every prospective engineer deserve high-fidelity education maps, reference materials, sample tests, and visual concept playgrounds under an outstanding unified dashboard.
            </p>
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-4 leading-normal font-semibold">
            ✦ Open source materials, linked directly to verified standards.
          </span>
        </div>
      </section>

      {/* 4. WHY ROADMAPS & LEARNING METHODOLOGY */}
      <section className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6 text-left">
        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
          <GraduationCap className="text-blue-600 dark:text-cyan-400" size={16} /> Learning Methodology
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
              <span className="h-5 w-5 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-300 text-xs font-bold font-mono rounded-full flex items-center justify-center">1</span>
              Theoretical Synthesis
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We aggregate reference chapters from standard textbooks, MDN Web elements, and NPTEL professors so you always start with absolute technical foundation.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
              <span className="h-5 w-5 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-300 text-xs font-bold font-mono rounded-full flex items-center justify-center">2</span>
              Interactive Exploration
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Play with real arrays shifters, vertical stack frames, FIFO queues, and search trees. Visual sandboxes make algorithms click faster than scrolling codes.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
              <span className="h-5 w-5 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-300 text-xs font-bold font-mono rounded-full flex items-center justify-center">3</span>
              Practical Hardening
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Solidify theory by solving handpicked exercises or standard LeetCode problems, typing summaries onto your personal scratchpad.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FUTURE PLANS */}
      <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-linear-to-r from-blue-600/5 to-cyan-500/5 backdrop-blur-md text-left space-y-4">
        <h3 className="text-sm font-bold text-slate-805 dark:text-slate-205 uppercase tracking-wider flex items-center gap-2">
          <Award className="text-blue-600" size={16} /> Upcoming Milestones & Next Phases
        </h3>
        <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed font-sans max-w-3xl">
          We are committed to continuously expanding and updating GFD RoadMap. Our future blueprints include launching active in-browser compile environments for Javascript execution, introducing competitive test metrics with live leaderboards, and providing AI study tutoring grounded in direct GATE questions.
        </p>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {['In-Browser Code compilers', 'Certification Badges', 'AI Grounded Tutoring', 'Mock Exam Terminals'].map((tag, idx) => (
            <span key={idx} className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400">
              ✓ {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
