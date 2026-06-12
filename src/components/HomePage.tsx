import React from 'react';
import { useProgress } from './ProgressContext';
import { Compass, GraduationCap, Code, BookOpen, ArrowRight, Flame, Sparkles, CheckCircle2, Star, Users, MapPin, Award } from 'lucide-react';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentTab }) => {
  const { streak, getStats } = useProgress();
  const stats = getStats();

  const paths = [
    {
      id: 'gate',
      title: 'GATE CSE preparation',
      description: 'Master theoretical computer science core units like Theory of Computation, Compilers, OS, DBMS and Algorithms with previous GATE questions.',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-500',
      tag: 'Academic Track',
      stats: '10 Core Modules'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Learn practical developer skills from vanilla HTML/CSS elements to heavy Next.js layouts, rest routing, databases, and Docker container deployments.',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      tag: 'Industry Track',
      stats: '16 Key Skills'
    },
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      description: 'Acquire rigorous algorithmic depth starting from fundamental Stacks & Queues up into advanced Dynamic Programming and Graph traversals.',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      tag: 'Interview Track',
      stats: '12 DSA Topics'
    }
  ];

  const benefits = [
    { title: 'Structured Learning', desc: 'No more tutorials hell. Study successive curated step-by-step topics structured by experienced mentors.' },
    { title: 'Project-Based Learning', desc: 'Build real-world systems, markdown portfolios, headless secure blogs, and Stripe checkout checkouts.' },
    { title: 'Interview Readiness', desc: 'Practice typical top-tier interview puzzles directly linked to official LeetCode problems.' },
    { title: 'Free Open Source Resources', desc: 'No paywalls. Core reference materials are linked directly to standard open sources (MDN, Wikipedia, YouTube playlists).' },
    { title: 'Progress Tracking', desc: 'Synchronize completed topics, practice questions, daily streaks, goals, and take custom study notes.' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Syllabus Topper (GATE CSE)',
      text: 'The GATE CSE timeline was incredibly organized! Completing DBMS and Theory of Computation in successions gave me absolute confidence in fundamental concepts. Highly recommended.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Full Stack Engineer @ Razorpay',
      text: 'Entering Full Stack web was messy until I found GFD RoadMap. The curriculum starts clean with semantic layouts and moves into Docker orchestrations in perfect order.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      name: 'Aiden Vance',
      role: 'Software Engineer @ Amazon',
      text: 'The interactive visual structures for trees, stacks, and graphs are marvelous. Playing with insertion steps made recursive BST operations make absolute sense.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
    }
  ];

  return (
    <div className="space-y-16 py-4 text-center md:text-left">
      {/* 1. HERO SECTION WITH AMBIENT GRADIENTS */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-800/50 bg-blue-50/50 dark:bg-slate-900/60 p-2 text-xs font-bold text-blue-600 dark:text-cyan-400">
            <Sparkles size={14} className="animate-pulse text-blue-500" />
            <span>Interactive Learning Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 dark:text-white leading-tight">
            Master Your Tech Journey with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-400">
              Structured Roadmaps
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans max-w-xl">
            Succeed step-by-step through professional educational paths for GATE CS, Full Stack Web Engineering, and rigorous Coding Interview DSA patterns.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button
              id="hero-cta-explore"
              onClick={() => setCurrentTab('gate')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 rounded-xl flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Roadmaps
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-cta-start"
              onClick={() => setCurrentTab('about')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-750/90 rounded-xl cursor-pointer transition-colors"
            >
              Why GFD RoadMap?
            </button>
          </div>
        </div>

        {/* HERO QUICK OVERVIEW DASHBOARD */}
        <div className="w-full max-w-sm shrink-0 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900 overflow-hidden shadow-2xl p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-150 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Syllabus Progress</span>
            </div>
            {streak > 0 && (
              <span className="text-xs font-mono font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-md flex items-center gap-1">
                <Flame size={12} className="fill-amber-500" /> {streak}d
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-left bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-150 dark:border-slate-850/60">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed</span>
              <div className="text-xl font-bold text-slate-800 dark:text-white font-mono mt-1">
                {stats.gateCompleted + stats.fsCompleted + stats.dsaCompleted}
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">Syllabus Chapters</p>
            </div>

            <div className="text-left bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-150 dark:border-slate-850/60">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Problems</span>
              <div className="text-xl font-bold text-slate-800 dark:text-white font-mono mt-1">
                {stats.questionsCompleted}
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">LeetCode Solved</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Overall Coverage Percentage</span>
              <span className="font-mono">{stats.overallPercentage}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700"
                style={{ width: `${stats.overallPercentage}%` }}
              />
            </div>
          </div>

          <button
            id="btn-goto-academic-dashboard"
            onClick={() => setCurrentTab('home')} // Home has the stats render panel option
            className="w-full text-xs font-bold py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
          >
            Review Custom Study Notes
          </button>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL PATHS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Choose Your Learning Sandbox
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
            Successive expert-structured paths. Click "Start Syllabus" on any course to jump onto interactive visual layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                id={`home-path-${path.id}`}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-350 dark:hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
                      {path.tag}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-105 dark:bg-slate-800 px-2 py-0.5 rounded-full font-mono">
                      {path.stats}
                    </span>
                  </div>

                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${path.color} text-white w-fit shadow-md`}>
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-white capitalize group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {path.title}
                  </h3>

                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {path.description}
                  </p>
                </div>

                <button
                  id={`btn-home-start-path-${path.id}`}
                  onClick={() => setCurrentTab(path.id)}
                  className="mt-6 w-full text-xs font-bold py-2.5 rounded-xl border border-slate-200 dark:border-slate-805 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-blue-600 dark:hover:text-cyan-400 text-center flex items-center justify-center gap-1 cursor-pointer transition-colors"
                >
                  Start Syllabus Path
                  <ArrowRight size={12} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PEDAGOGICAL BENEFITS SECTION */}
      <section className="bg-slate-100/50 dark:bg-slate-950/20 py-16 border-y border-slate-200 dark:border-slate-850">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-cyan-400 font-mono">
              Learning Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
              Why Engineers Prepare with GFD RoadMap
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              Our curriculum bypasses unorganized video scrolling. Every pathway lists standard conceptual steps, lists direct references, lets you solve typical questions, and provides interactive sandboxes.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-550 dark:text-cyan-400 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESIGN STUDENT TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 py-4">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Endorsed by Top Scholars
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
            Hear from prospective researchers, industry developer candidates, and corporate software engineers who structured their journeys on GFD RoadMap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs text-left flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4 text-left">
                {/* Five star rating */}
                <div className="flex items-center gap-0.5 text-amber-450">
                  {Array.from({ length: test.rating }).map((_, rIdx) => (
                    <Star key={rIdx} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-sans italic">
                  "{test.text}"
                </p>
              </div>

              {/* Author profile */}
              <div className="flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full object-cover border-2 border-blue-500/20"
                />
                <div className="text-left font-sans">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
