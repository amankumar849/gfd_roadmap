import ChatWidget from "./components/ChatWidget";
import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { ProgressProvider, useProgress } from './components/ProgressContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { GatePage } from './components/GatePage';
import { FullStackPage } from './components/FullStackPage';
import { DsaPage } from './components/DsaPage';
import { DashboardView } from './components/DashboardView';
import { Sparkles, GraduationCap, Code, BookOpen, LayoutDashboard, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [homeSubTab, setHomeSubTab] = useState<'overview' | 'dashboard'>('overview');
  const [targetTopicId, setTargetTopicId] = useState<string | null>(null);

  // Cross-navigation algorithm: redirects searches/recs smoothly to pages and focuses topics
  const handleNavigateToTopic = (path: 'gate' | 'fullstack' | 'dsa', topicId: string) => {
    setTargetTopicId(topicId);
    setCurrentTab(path);
  };

  // Reset target topic id whenever we navigate away
  const handleTabChange = (newTab: string) => {
    setTargetTopicId(null);
    setCurrentTab(newTab);
    if (newTab === 'home') {
      setHomeSubTab('overview');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onNavigateToTopic={handleNavigateToTopic}
      />

      {/* Main Core Content Stage */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {currentTab === 'home' && (
              <div className="space-y-10">
                {/* Home Sub-navigation: Marketing overview vs Student stats Cockpit */}
                <div className="flex justify-center border-b border-slate-200 dark:border-slate-800 max-w-sm mx-auto p-1 bg-slate-100 dark:bg-slate-950 rounded-xl">
                  <button
                    id="btn-home-subtab-overview"
                    onClick={() => setHomeSubTab('overview')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      homeSubTab === 'overview'
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    <Compass size={14} />
                    <span>Explore Roadmaps</span>
                  </button>
                  <button
                    id="btn-home-subtab-dashboard"
                    onClick={() => setHomeSubTab('dashboard')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      homeSubTab === 'dashboard'
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    <LayoutDashboard size={14} />
                    <span>My Dashboard Log</span>
                  </button>
                </div>

                {homeSubTab === 'overview' ? (
                  <HomePage setCurrentTab={handleTabChange} />
                ) : (
                  <DashboardView
                    setCurrentTab={handleTabChange}
                    onNavigateToTopic={handleNavigateToTopic}
                  />
                )}
              </div>
            )}

            {currentTab === 'about' && (
              <AboutPage />
            )}

            {currentTab === 'gate' && (
              <GatePage initialTargetTopicId={targetTopicId} />
            )}

            {currentTab === 'fullstack' && (
              <FullStackPage initialTargetTopicId={targetTopicId} />
            )}

            {currentTab === 'dsa' && (
              <DsaPage initialTargetTopicId={targetTopicId} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Floor Footer */}
      <Footer setCurrentTab={handleTabChange} />
       <Footer setCurrentTab={handleTabChange} />
      <ChatWidget />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </ThemeProvider>
  );
}

