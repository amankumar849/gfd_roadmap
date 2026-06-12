import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from './ProgressContext';
import { fullStackData } from '../data/fullStackData';
import { TopicNode } from '../types';
import { Search, Code, CheckCircle, Clock, BookOpen, ExternalLink, HelpCircle, Save, Edit, LayoutGrid, MonitorCheck, Circle } from 'lucide-react';

interface FullStackPageProps {
  initialTargetTopicId?: string | null;
}

export const FullStackPage: React.FC<FullStackPageProps> = ({ initialTargetTopicId }) => {
  const { completedTopics, completedQuestions, toggleTopic, toggleQuestion, customNotes, saveNotes } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTopic, setActiveTopic] = useState<TopicNode | null>(fullStackData[0]);
  const [noteText, setNoteText] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const activeTopicRef = useRef<HTMLDivElement>(null);

  // Sync notes state when topic changes
  useEffect(() => {
    if (activeTopic) {
      setNoteText(customNotes[activeTopic.id] || '');
    }
  }, [activeTopic, customNotes]);

  // Handle focus from global search redirects
  useEffect(() => {
    if (initialTargetTopicId) {
      const found = fullStackData.find(t => t.id === initialTargetTopicId);
      if (found) {
        setActiveTopic(found);
        setActiveCategory('All');
        setTimeout(() => {
          activeTopicRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [initialTargetTopicId]);

  const handleSaveNotes = () => {
    if (activeTopic) {
      saveNotes(activeTopic.id, noteText);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Projects'];

  const filteredTopics = fullStackData.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in text-left">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-xs bg-linear-to-r from-cyan-650/5 via-blue-500/5 to-transparent">
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
            Complete Career Syllabus
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Full Stack Software Development Roadmap
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive, modular pathway to building production-grade web systems. Learn layout architecture, robust backend APIs, relational databases, containers, and deployment workflows.
          </p>
        </div>
      </div>

      {/* FILTER CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="fs-search"
            type="text"
            placeholder="Search full stack tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-hidden focus:border-cyan-500 text-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Categories togglers */}
        <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`fs-pill-${cat}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 dark:bg-cyan-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-705'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BENTO GRID OF NODE BOXES & SPECIFIC RESOURCES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive nodes grid (Left) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-widest font-bold">
            <span>Syllabus Nodes ({filteredTopics.length})</span>
            <span>Check bullet to track progress</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTopics.map((topic) => {
              const isCompleted = completedTopics[topic.id];
              const isActive = activeTopic?.id === topic.id;

              return (
                <div
                  key={topic.id}
                  id={`fs-node-${topic.id}`}
                  ref={isActive ? activeTopicRef : null}
                  onClick={() => setActiveTopic(topic)}
                  className={`p-4 rounded-xl border flex flex-col justify-between gap-3 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-cyan-500 bg-cyan-500/5 shadow-md scale-[1.01]'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider font-mono">
                        {topic.category}
                      </span>
                      <button
                        id={`btn-complete-fs-${topic.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTopic(topic.id);
                        }}
                        className="p-1 rounded text-slate-400 hover:text-cyan-500 relative cursor-pointer"
                      >
                        {isCompleted ? (
                          <CheckCircle size={16} className="fill-cyan-500 text-white" />
                        ) : (
                          <Circle size={16} />
                        )}
                      </button>
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 dark:text-white line-clamp-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] text-slate-400 font-mono">
                    <div className="flex items-center gap-1">
                      <Clock size={11} />
                      <span>{topic.durationEstimate || 'As needed'}</span>
                    </div>
                    <span>{topic.practiceQuestions.length} standard tasks</span>
                  </div>
                </div>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="col-span-2 py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-400 font-mono">
                No topic results found matching filter constraints.
              </div>
            )}
          </div>
        </div>

        {/* Side study guide drawer (Right) */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          {activeTopic ? (
            <div
              id="fs-detail-drawer"
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 md:p-6 shadow-sm space-y-6 text-left animate-fade-in"
            >
              {/* Drawer Top */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">
                    {activeTopic.category} Module details
                  </span>
                  <h2 className="text-base font-bold text-slate-800 dark:text-white">
                    {activeTopic.title}
                  </h2>
                </div>

                <button
                  id="btn-complete-fs-drawer"
                  onClick={() => toggleTopic(activeTopic.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                    completedTopics[activeTopic.id]
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-medium'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  <CheckCircle size={14} />
                  <span>{completedTopics[activeTopic.id] ? 'Done!' : 'Mark Done'}</span>
                </button>
              </div>

              {/* Explanations */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1.5">
                  <Code size={13} /> Curriculum Scope
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {activeTopic.description}
                </p>
              </div>

              {/* Documentation links */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1">
                  <BookOpen size={13} /> Official Docs & Learning references
                </h4>

                <div className="space-y-2">
                  {activeTopic.resources.map((res) => (
                    <a
                      key={res.id}
                      id={`fs-resource-link-${res.id}`}
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-150 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-850/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-extrabold uppercase text-teal-500 px-1.5 py-0.5 rounded-sm bg-teal-500/10 font-mono">
                          {res.type}
                        </span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-cyan-500">
                          {res.name}
                        </span>
                      </div>
                      <ExternalLink size={12} className="text-slate-400 group-hover:text-slate-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* standard Tasks */}
              {activeTopic.practiceQuestions.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 flex items-center gap-1.5">
                    <MonitorCheck size={14} className="text-cyan-400" /> Practical Hands-on Tasks
                  </h4>

                  <div className="space-y-2.5">
                    {activeTopic.practiceQuestions.map((q) => {
                      const isQCompleted = completedQuestions[q.id];
                      return (
                        <div
                          key={q.id}
                          id={`fs-q-${q.id}`}
                          className="p-3 rounded-lg border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 space-y-1.5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                              {q.text}
                            </p>
                            <button
                              id={`btn-complete-fs-q-${q.id}`}
                              onClick={() => toggleQuestion(q.id)}
                              className="shrink-0 p-0.5 text-slate-400 hover:text-cyan-500 rounded-sm cursor-pointer"
                            >
                              <CheckCircle
                                size={15}
                                className={isQCompleted ? 'fill-cyan-500 text-white' : 'text-slate-300 dark:text-slate-700'}
                              />
                            </button>
                          </div>

                          {q.solutionHint && (
                            <div className="p-2 rounded bg-cyan-500/5 text-[10px] text-cyan-600 dark:text-cyan-400 border border-cyan-500/10 font-mono">
                              💡 Suggestion: {q.solutionHint}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* local notes */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 flex items-center gap-1">
                  <Edit size={13} className="text-cyan-400 animate-pulse" /> My Developer Scratchpad
                </h4>
                <div className="space-y-2">
                  <textarea
                    id="fs-notes-area"
                    rows={4}
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Document installation scripts, setup commands, port configurations or tips..."
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 focus:outline-hidden text-slate-800 dark:text-slate-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">Auto-saved to notes cache.</span>
                    <button
                      id="btn-save-fs-notes"
                      onClick={handleSaveNotes}
                      className="px-3.5 py-1.5 text-xs bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-650 text-white rounded-lg flex items-center gap-1 cursor-pointer font-bold"
                    >
                      <Save size={12} /> {saveSuccess ? 'Saved!' : 'Save Notes'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-xs text-slate-400 font-mono">
              Click any node on the left to read setup commands, checklists, and projects.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
