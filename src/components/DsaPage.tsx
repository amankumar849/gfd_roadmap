import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from './ProgressContext';
import { dsaData } from '../data/dsaData';
import { TopicNode } from '../types';
import { InteractiveVisualizer } from './InteractiveVisualizer';
import { Search, Compass, CheckCircle, Circle, Clock, BookOpen, ExternalLink, Sparkles, Award, Edit, Save, Code, HelpCircle } from 'lucide-react';

interface DsaPageProps {
  initialTargetTopicId?: string | null;
}

export const DsaPage: React.FC<DsaPageProps> = ({ initialTargetTopicId }) => {
  const { completedTopics, completedQuestions, toggleTopic, toggleQuestion, customNotes, saveNotes } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [activeTopic, setActiveTopic] = useState<TopicNode | null>(dsaData[0]);
  const [noteText, setNoteText] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const activeTopicRef = useRef<HTMLDivElement>(null);

  // Sync notes state when topic changes
  useEffect(() => {
    if (activeTopic) {
      setNoteText(customNotes[activeTopic.id] || '');
    }
  }, [activeTopic, customNotes]);

  // Handle focus from searches or recommendations
  useEffect(() => {
    if (initialTargetTopicId) {
      const found = dsaData.find(t => t.id === initialTargetTopicId);
      if (found) {
        setActiveTopic(found);
        setSelectedLevel('All');
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

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTopics = dsaData.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || topic.category === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6 animate-fade-in text-left">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-xs bg-linear-to-r from-amber-650/5 via-orange-500/5 to-transparent">
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
            Algorithms Masterclass
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Data Structures & Algorithms Syllabus Path
          </h1>
          <p className="text-sm text-slate-650 dark:text-slate-400 max-w-2xl">
            Acquire problem-solving maturity phase by phase. Study standard structures, play around with interactive logic simulations, and practice proven LeetCode coding challenges.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href="https://leetcode.com/problemset/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl transition-all hover:scale-[1.01] shadow-xs cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>LeetCode Problems Practice</span>
              <ExternalLink size={12} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl transition-all hover:scale-[1.01] shadow-xs cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>GeeksforGeeks Problems Practice</span>
              <ExternalLink size={12} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* FILTER SEARCH TOOLS */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="dsa-search"
            type="text"
            placeholder="Search patterns or structures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-hidden focus:border-amber-500 font-medium text-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
          {levels.map((level) => (
            <button
              key={level}
              id={`dsa-pill-${level}`}
              onClick={() => setSelectedLevel(level)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedLevel === level
                  ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-705'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* SYLLABUS WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Topic Cards */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Syllabus Nodes ({filteredTopics.length})</span>
            <span>Check bullet to track progress</span>
          </div>

          <div className="space-y-3">
            {filteredTopics.map((topic, index) => {
              const isActive = activeTopic?.id === topic.id;
              const isCompleted = completedTopics[topic.id];

              return (
                <div
                  key={topic.id}
                  id={`dsa-node-${topic.id}`}
                  ref={isActive ? activeTopicRef : null}
                  onClick={() => setActiveTopic(topic)}
                  className={`p-4 rounded-xl border flex items-start justify-between gap-4 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-amber-500 bg-amber-500/5 shadow-md scale-[1.01]'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                  }`}
                >
                  <button
                    id={`btn-complete-dsa-${topic.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTopic(topic.id);
                    }}
                    className="shrink-0 mt-0.5 text-slate-450 hover:text-amber-500 cursor-pointer"
                  >
                    {isCompleted ? (
                      <CheckCircle size={18} className="fill-amber-500 text-slate-950" />
                    ) : (
                      <Circle size={18} className="text-slate-300 dark:text-slate-700" />
                    )}
                  </button>

                  <div className="text-left space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider font-mono">
                        {topic.category} level
                      </span>
                      {topic.interactiveDataSymbol && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-mono scale-90">
                          Interactive Simulator
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-400 line-clamp-2 leading-relaxed font-sans">
                      {topic.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0 text-right">
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                      <Clock size={11} />
                      <span>{topic.durationEstimate || '4 days'}</span>
                    </div>
                    <span className="text-[9px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-md font-mono">
                      {topic.practiceQuestions.length} Problem sets
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-400 font-mono">
                No matching DSA topics found for filter constraints.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Visual Simulator, Problem sets, & Notes */}
        <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
          {activeTopic ? (
            <div
              id="dsa-detail-drawer"
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 md:p-6 shadow-sm space-y-6 text-left animate-fade-in"
            >
              {/* Drawer Title */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-amber-500 tracking-wider font-mono">
                    {activeTopic.category} Tier Syllabus unit
                  </span>
                  <h2 className="text-base font-bold text-slate-800 dark:text-white">
                    {activeTopic.title}
                  </h2>
                </div>

                <button
                  id="btn-complete-dsa-drawer"
                  onClick={() => toggleTopic(activeTopic.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                    completedTopics[activeTopic.id]
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30'
                      : 'bg-amber-500 text-slate-950 font-black hover:bg-amber-600'
                  }`}
                >
                  <CheckCircle size={14} />
                  <span>{completedTopics[activeTopic.id] ? 'Learned!' : 'Mark Learned'}</span>
                </button>
              </div>

              {/* Theory Sheet */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1.5">
                  <BookOpen size={13} className="text-amber-500" /> Topic Theory & Mechanics
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {activeTopic.description}
                </p>

                {/* Conceptual steps bullet items */}
                {activeTopic.visualExplanationSteps && (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 mt-3 text-left">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      How it operates (Step-by-Step):
                    </h5>
                    <ol className="list-decimal list-inside text-xs text-slate-600 dark:text-slate-400 pl-1.5 space-y-1.5 font-sans">
                      {activeTopic.visualExplanationSteps.map((step, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* LIVE SIMULATOR EXCLUSIVES */}
              {activeTopic.interactiveDataSymbol && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-yellow-500 animate-pulse" /> Sandbox Simulator
                  </h4>
                  <InteractiveVisualizer symbol={activeTopic.interactiveDataSymbol} />
                </div>
              )}

              {/* LeetCode Practice List */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 flex items-center gap-1.5">
                  <Code size={13} className="text-amber-500" /> Handpicked LeetCode Problems
                </h4>

                <div className="space-y-3">
                  {activeTopic.practiceQuestions.map((q) => {
                    const isQCompleted = completedQuestions[q.id];
                    return (
                      <div
                        key={q.id}
                        id={`dsa-q-${q.id}`}
                        className="p-3.5 rounded-lg border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 text-left space-y-3"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                                q.difficulty === 'Easy'
                                  ? 'bg-emerald-500/10 text-emerald-500'
                                  : q.difficulty === 'Medium'
                                  ? 'bg-amber-500/10 text-amber-500'
                                  : 'bg-red-500/10 text-red-500'
                              } font-mono`}
                            >
                              {q.difficulty}
                            </span>
                            <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1 leading-normal">
                              {q.text}
                            </h5>
                          </div>

                          <div className="flex items-center gap-2">
                            {q.leetcodeUrl && (
                              <a
                                href={q.leetcodeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                                title="Solve on LeetCode"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                            <button
                              id={`btn-complete-dsa-q-${q.id}`}
                              onClick={() => toggleQuestion(q.id)}
                              className="p-1 rounded text-slate-400 hover:text-amber-500 cursor-pointer"
                            >
                              <CheckCircle
                                size={16}
                                className={isQCompleted ? 'fill-amber-500 text-slate-950' : 'text-slate-300 dark:text-slate-700'}
                              />
                            </button>
                          </div>
                        </div>

                        {q.solutionHint && (
                          <div className="p-2.5 rounded-md bg-amber-500/5 text-[10px] text-amber-600 dark:text-amber-400 border border-amber-500/10 font-mono leading-relaxed">
                            💡 Concept Approach: {q.solutionHint}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Developer Scratch Notes */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 flex items-center gap-1">
                  <Edit size={13} className="text-cyan-400 animate-pulse" /> My Algorithms Scratchpad
                </h4>
                <div className="space-y-2">
                  <textarea
                    id="dsa-notes-area"
                    rows={4}
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Jot down time complexity O(N), space boundary factors, recursion relations or sample snippets..."
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-hidden text-slate-800 dark:text-slate-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">Synched automatically locally.</span>
                    <button
                      id="btn-save-dsa-notes"
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
              Select any topic on the left to spin up the interactive simulator and solve LeetCode algorithms.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
