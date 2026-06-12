import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { useProgress } from './ProgressContext';
import { Search, Sun, Moon, Flame, Menu, X, BookOpen, GraduationCap, Code, Compass, ArrowUpRight } from 'lucide-react';
import { gateData } from '../data/gateData';
import { fullStackData } from '../data/fullStackData';
import { dsaData } from '../data/dsaData';
import { SearchResult } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onNavigateToTopic: (path: 'gate' | 'fullstack' | 'dsa', topicId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onNavigateToTopic }) => {
  const { theme, toggleTheme } = useTheme();
  const { streak } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'gate', label: 'GATE Roadmap', icon: GraduationCap },
    { id: 'fullstack', label: 'Full Stack Roadmap', icon: Code },
    { id: 'dsa', label: 'DSA Roadmap', icon: BookOpen },
  ];

  // Perform search across all roadmaps
  const performSearch = (): SearchResult[] => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search GATE
    gateData.forEach((node) => {
      if (
        node.title.toLowerCase().includes(query) ||
        node.description.toLowerCase().includes(query) ||
        node.category?.toLowerCase().includes(query)
      ) {
        results.push({
          id: node.id,
          title: node.title,
          description: node.description,
          path: 'gate',
          category: node.category,
        });
      }
    });

    // Search Full Stack
    fullStackData.forEach((node) => {
      if (
        node.title.toLowerCase().includes(query) ||
        node.description.toLowerCase().includes(query) ||
        node.category?.toLowerCase().includes(query)
      ) {
        results.push({
          id: node.id,
          title: node.title,
          description: node.description,
          path: 'fullstack',
          category: node.category,
        });
      }
    });

    // Search DSA
    dsaData.forEach((node) => {
      if (
        node.title.toLowerCase().includes(query) ||
        node.description.toLowerCase().includes(query) ||
        node.category?.toLowerCase().includes(query)
      ) {
        results.push({
          id: node.id,
          title: node.title,
          description: node.description,
          path: 'dsa',
          category: `DSA - ${node.category}`,
        });
      }
    });

    return results.slice(0, 7); // Limit performance constraints
  };

  const matchingResults = performSearch();

  const handleResultClick = (res: SearchResult) => {
    onNavigateToTopic(res.path, res.id);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div
            id="navbar-logo-container"
            onClick={() => setCurrentTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <Compass className="h-5 w-5 animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-800 dark:text-white sm:text-lg">
                GFD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-400">RoadMap</span>
              </span>
              <span className="text-[9px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                A Education Engine
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Utility Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Counter */}
            <div
              id="streak-indicator"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                streak > 0
                  ? 'border-amber-400/30 bg-amber-500/10 text-amber-500 animate-pulse'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-400 dark:text-slate-500'
              }`}
              title={streak > 0 ? `Active student streak: ${streak} days!` : 'Complete topics today to spin up learning streaks!'}
            >
              <Flame size={14} className={streak > 0 ? 'fill-amber-500 animate-bounce' : ''} />
              <span className="font-mono">{streak}d Streak</span>
            </div>

            {/* Search Key Button */}
            <button
              id="nav-search-trigger"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Global search syllabus"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Theme Toggle */}
            <button
              id="nav-theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-cyan-400" /> : <Moon className="h-4 w-4 text-blue-600" />}
            </button>

            {/* Hamburger (Mobile) */}
            <button
              id="nav-mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Global Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-24 px-4">
          <div
            id="search-dialog-box"
            className="w-full max-w-xl h-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-fade-in"
          >
            {/* Search Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
              <Search size={18} className="text-slate-400" />
              <input
                id="global-search-input"
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search arrays, API keys, networks, normalization..."
                className="flex-1 bg-transparent text-sm text-slate-800 dark:text-white outline-hidden font-normal"
              />
              <button
                id="btn-close-search"
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* Search Content */}
            <div className="flex-1 max-h-80 overflow-y-auto p-2">
              {searchQuery.trim() === '' ? (
                <div className="py-12 text-center text-xs text-slate-400 font-mono">
                  Type topics to trigger fast lookups...
                </div>
              ) : matchingResults.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-400 font-mono">
                  No topics matching "{searchQuery}"
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Results ({matchingResults.length})
                  </div>
                  {matchingResults.map((res) => (
                    <div
                      key={res.id}
                      id={`search-item-${res.id}`}
                      onClick={() => handleResultClick(res)}
                      className="group flex flex-col gap-1 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                          {res.title}
                        </span>
                        <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 scale-90 border dark:border-slate-850">
                          {res.path} {res.category ? `• ${res.category}` : ''}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-normal line-clamp-1">
                        {res.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 border-b border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto animate-slide-down">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-3 font-medium text-sm rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};
