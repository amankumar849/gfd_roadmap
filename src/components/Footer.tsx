import React from 'react';
import { Compass, Github, Linkedin, Heart, HelpCircle, FileText, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2 md:col-span-1.5">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab('home')}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-xs">
                <Compass className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-800 dark:text-white">
                GFD <span className="text-blue-600 dark:text-cyan-400 font-semibold">RoadMap</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mt-2">
              Empowering developers and prospective GATE candidates with production-grade roadmap paths, concepts visualizations, and learning progress dashboards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Syllabus Paths
            </h5>
            <button
              onClick={() => setCurrentTab('gate')}
              className="w-fit text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
            >
              GATE Core CSE
            </button>
            <button
              onClick={() => setCurrentTab('fullstack')}
              className="w-fit text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setCurrentTab('dsa')}
              className="w-fit text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
            >
              Data Structures & DSA
            </button>
          </div>

          {/* Platforms */}
          <div className="flex flex-col gap-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Resources & Info
            </h5>
            <button
              onClick={() => setCurrentTab('about')}
              className="w-fit text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-left cursor-pointer"
            >
              About Platform
            </button>
            <a
              href="https://roadmap.sh"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              roadmap.sh <ArrowUpRight size={10} />
            </a>
          </div>

          {/* Social connections */}
          <div className="flex flex-col gap-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Join Our Student Circle
            </h5>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/amankumar849"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-150 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all cursor-pointer"
                title="GitHub Repository"
              >
                <Github size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/amankumar849/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-150 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all cursor-pointer"
                title="LinkedIn Connections"
              >
                <Linkedin size={14} />
              </a>
            </div>
            <span className="text-[10px] text-slate-400 font-mono mt-1 leading-relaxed">
              Serving premium education structures offline.
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[10px] text-slate-400 font-mono">
            © {new Date().getFullYear()} GFD RoadMap. All rights reserved. Built for engineering excellence.
          </p>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <span>Create By ( Aman Gupta )</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
