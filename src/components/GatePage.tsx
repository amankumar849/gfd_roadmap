import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from './ProgressContext';
import { gateData } from '../data/gateData';
import { TopicNode } from '../types';
import { Search, Compass, CheckCircle, Circle, BookOpen, Clock, HelpCircle, ExternalLink, ArrowRight, MessageSquareCode, Edit, Save } from 'lucide-react';

interface GatePageProps {
  initialTargetTopicId?: string | null;
}

export const GatePage: React.FC<GatePageProps> = ({ initialTargetTopicId }) => {
  const { completedTopics, completedQuestions, toggleTopic, toggleQuestion, customNotes, saveNotes } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTopic, setActiveTopic] = useState<TopicNode | null>(gateData[0]);
  const [noteText, setNoteText] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const activeTopicRef = useRef<HTMLDivElement>(null);

  // Synchronize note local state when active topic changes
  useEffect(() => {
    if (activeTopic) {
      setNoteText(customNotes[activeTopic.id] || '');
    }
  }, [activeTopic, customNotes]);

  // Navigate to and focus target topic if initialized from search/recommendation
  useEffect(() => {
    if (initialTargetTopicId) {
      const found = gateData.find(t => t.id === initialTargetTopicId);
      if (found) {
        setActiveTopic(found);
        // Scroll to container top smoothly
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

  // Extract unique categories for filtering
  const categories = ['All', ...Array.from(new Set(gateData.map((t) => t.category).filter(Boolean))) as string[]];

  // Filtering criteria
  const filteredTopics = gateData.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Panel */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                15% Weight Aptitude + 85% Technical
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
              GATE CSE Computer Science Syllabus Path
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-405 max-w-2xl">
              An interactive chronological outline representing all 10 core subjects inside Graduate Aptitude Test in Engineering. Filter topics, review reference resources, and check off completed chapters.
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="gate-search"
            type="text"
            placeholder="Search core subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-1 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-pill-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CORE WORKSPACE: NODE TREE (LEFT) & STUDY DRAWER (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Grid Map / Timeline (Left) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Syllabus Nodes ({filteredTopics.length})</span>
            <span>Click node to study details</span>
          </div>

          <div className="relative pl-6 space-y-4 border-l border-slate-200 dark:border-slate-800 ml-4 py-2">
            {filteredTopics.map((topic, index) => {
              const isTopicActive = activeTopic?.id === topic.id;
              const isCompleted = completedTopics[topic.id];

              return (
                <div
                  key={topic.id}
                  id={`gate-node-${topic.id}`}
                  ref={isTopicActive ? activeTopicRef : null}
                  onClick={() => setActiveTopic(topic)}
                  className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-start justify-between gap-4 select-none ${
                    isTopicActive
                      ? 'border-blue-600 dark:border-cyan-400 bg-blue-600/5 dark:bg-cyan-400/5 shadow-md scale-[1.01]'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-900/10'
                  }`}
                >
                  {/* Bullet Indicator */}
                  <div className="absolute -left-[31px] top-1/2 -translate-y-1/2 z-10">
                    <button
                      id={`btn-toggle-topic-${topic.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopic(topic.id);
                      }}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-cyan-400 shadow-sm cursor-pointer hover:scale-110 active:scale-95 transition-all"
                    >
                      {isCompleted ? (
                        <CheckCircle size={14} className="fill-blue-600 dark:fill-cyan-400 text-white" />
                      ) : (
                        <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                      )}
                    </button>
                  </div>

                  {/* Body details */}
                  <div className="text-left space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest font-mono">
                        Subject {index + 1}
                      </span>
                      {topic.category && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {topic.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-800 dark:text-white">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {/* Right badges */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0 text-right">
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                      <Clock size={12} />
                      <span>{topic.durationEstimate}</span>
                    </div>
                    <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-md bg-blue-600/5 text-blue-500 dark:text-cyan-300">
                      {topic.practiceQuestions.length} Questions
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-400 font-mono">
                No syllabus matches for your search.
              </div>
            )}
          </div>
        </div>

        {/* Detailed Study Drawer (Right) */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          {activeTopic ? (
            <div
              id="gate-detail-panel"
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 md:p-6 shadow-sm space-y-6"
            >
              {/* Node Title & Action */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="text-left space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-blue-600 dark:text-cyan-400 tracking-wider">
                    {activeTopic.category} syllabus guide
                  </span>
                  <h2 className="text-base font-bold text-slate-800 dark:text-white">
                    {activeTopic.title}
                  </h2>
                </div>

                <button
                  id="btn-drawer-complete"
                  onClick={() => toggleTopic(activeTopic.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                    completedTopics[activeTopic.id]
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <CheckCircle size={14} />
                  <span>{completedTopics[activeTopic.id] ? 'Completed!' : 'Mark Completed'}</span>
                </button>
              </div>

              {/* Comprehensive Description */}
              <div className="text-left space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400">
                  Syllabus Context
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {activeTopic.description}
                </p>
              </div>

              {/* Reference Resources */}
              <div className="text-left space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1">
                  <BookOpen size={13} /> Recommended Study Materials
                </h4>

                <div className="space-y-2">
                  {activeTopic.resources.map((res) => (
                    <a
                      key={res.id}
                      id={`resource-${res.id}`}
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-850/60 font-sans transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase text-slate-400 px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 font-mono">
                          {res.type}
                        </span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                          {res.name}
                        </span>
                      </div>
                      <ExternalLink size={12} className="text-slate-400 group-hover:text-slate-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Typical GATE Questions */}
              <div className="text-left space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1.5">
                  <HelpCircle size={14} className="text-orange-500" /> Syllabus Quiz Exercises
                </h4>

                <div className="space-y-2.5">
                  {activeTopic.practiceQuestions.map((q) => {
                    const isQCompleted = completedQuestions[q.id];
                    return (
                      <div
                        key={q.id}
                        id={`q-item-${q.id}`}
                        className="p-3 rounded-lg border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 text-left space-y-2"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs text-slate-800 dark:text-slate-200 leading-normal font-mono">
                            {q.text}
                          </p>
                          <button
                            id={`btn-complete-q-${q.id}`}
                            onClick={() => toggleQuestion(q.id)}
                            className="shrink-0 p-1 text-slate-400 hover:text-blue-500 rounded-sm cursor-pointer"
                          >
                            <CheckCircle
                              size={16}
                              className={isQCompleted ? 'fill-blue-500 text-white' : 'text-slate-300 dark:text-slate-700'}
                            />
                          </button>
                        </div>

                        {q.solutionHint && (
                          <div className="p-2 rounded bg-amber-500/5 text-[10px] text-amber-600 border border-amber-500/10 font-mono leading-relaxed">
                            💡 Hint: {q.solutionHint}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Markdown/Study Notes Pad */}
              <div className="text-left space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1">
                  <Edit size={13} className="text-cyan-400 animate-pulse" /> Custom Syllabus Notes
                </h4>
                <div className="space-y-2">
                  <textarea
                    id="syllabus-notes-area"
                    rows={4}
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Write explanations, formulas, or standard definitions. Notes are synchronized automatically..."
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-hidden"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">Notes are saved locally.</span>
                    <button
                      id="btn-save-syllabus-notes"
                      onClick={handleSaveNotes}
                      className="px-3.5 py-1.5 text-xs bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg flex items-center gap-1 cursor-pointer font-bold"
                    >
                      <Save size={12} /> {saveSuccess ? 'Saved!' : 'Save Notes'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-xs text-slate-400 font-mono">
              Click any subject on the left to review documentation, practice exercise sets, and type notes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
