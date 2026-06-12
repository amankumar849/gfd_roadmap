import React, { useState } from 'react';
import { useProgress } from './ProgressContext';
import { Sparkles, Flame, CheckCircle, Award, Compass, Timer, RotateCcw, Save, Trash2, Edit, ChevronRight, BookOpen } from 'lucide-react';
import { gateData } from '../data/gateData';
import { fullStackData } from '../data/fullStackData';
import { dsaData } from '../data/dsaData';

interface DashboardViewProps {
  setCurrentTab: (tab: string) => void;
  onNavigateToTopic: (path: 'gate' | 'fullstack' | 'dsa', topicId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ setCurrentTab, onNavigateToTopic }) => {
  const {
    completedTopics,
    completedQuestions,
    streak,
    dailyGoal,
    setDailyGoal,
    customNotes,
    saveNotes,
    resetProgress,
    getStats
  } = useProgress();

  const stats = getStats();
  const [goalInput, setGoalInput] = useState(dailyGoal.toString());
  const [activeNoteTab, setActiveNoteTab] = useState<'gate' | 'fullstack' | 'dsa'>('gate');

  const handleSaveGoal = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(goalInput, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setDailyGoal(parsed);
    }
  };

  // Find some topic recommendations (the first incomplete topic of each path)
  const nextUpGate = gateData.find(t => !completedTopics[t.id]);
  const nextUpFS = fullStackData.find(t => !completedTopics[t.id]);
  const nextUpDSA = dsaData.find(t => !completedTopics[t.id]);

  // Retrieve list of topics that contain notes to display in the Note Shelf
  const getTopicsWithNotes = () => {
    const list: Array<{ id: string; title: string; notes: string; path: 'gate' | 'fullstack' | 'dsa' }> = [];

    gateData.forEach(t => {
      if (customNotes[t.id]) list.push({ id: t.id, title: t.title, notes: customNotes[t.id], path: 'gate' });
    });
    fullStackData.forEach(t => {
      if (customNotes[t.id]) list.push({ id: t.id, title: t.title, notes: customNotes[t.id], path: 'fullstack' });
    });
    dsaData.forEach(t => {
      if (customNotes[t.id]) list.push({ id: t.id, title: t.title, notes: customNotes[t.id], path: 'dsa' });
    });

    return list;
  };

  const topicsWithNotes = getTopicsWithNotes();

  // Progress metrics
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (stats.overallPercentage / 100) * circumference;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Greetings & Streak Hero */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-transparent">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
              Welcome Back, Scholar! 👋
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg">
              Structured paths align learning efforts. Maintain your study streak, challenge mock question sets, and build clean persistent notes as you study!
            </p>
          </div>

          {/* Gamified Circle */}
          <div className="flex items-center gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <Flame size={28} className="fill-amber-500 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-slate-800 dark:text-white font-mono">{streak} Days</div>
              <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                Current Continuous Streak
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CORE STATS BOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radial Completion Meter */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center text-center shadow-xs">
          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-4">
            Overall Progress
          </h3>

          <div className="relative flex items-center justify-center mb-4">
            <svg className="h-32 w-32 -rotate-90">
              {/* Back track */}
              <circle
                cx="64"
                cy="64"
                r={radius}
                className="stroke-slate-150 dark:stroke-slate-800"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Active fill */}
              <circle
                cx="64"
                cy="64"
                r={radius}
                className="stroke-blue-600 dark:stroke-cyan-400 transition-all duration-700 ease-out"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-slate-800 dark:text-white font-mono">
                {stats.overallPercentage}%
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                COMPLETED
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
            Consistently covering subjects prepares core knowledge. Keep ticking off chapters!
          </p>
        </div>

        {/* Breakdown Analytics */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs lg:col-span-2">
          <div>
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-6">
              Syllabus Completion
            </h3>

            <div className="space-y-5">
              {/* GATE */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-white cursor-pointer" onClick={() => setCurrentTab('gate')}>
                    GATE Core CSE ({stats.gateCompleted}/{stats.gateTotal})
                  </span>
                  <span className="font-mono">{stats.gatePercentage}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${stats.gatePercentage}%` }}
                  />
                </div>
              </div>

              {/* Full Stack */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-white cursor-pointer" onClick={() => setCurrentTab('fullstack')}>
                    Full Stack Development ({stats.fsCompleted}/{stats.fsTotal})
                  </span>
                  <span className="font-mono">{stats.fsPercentage}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${stats.fsPercentage}%` }}
                  />
                </div>
              </div>

              {/* DSA */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-white cursor-pointer" onClick={() => setCurrentTab('dsa')}>
                    Data Structures & Algorithms ({stats.dsaCompleted}/{stats.dsaTotal})
                  </span>
                  <span className="font-mono">{stats.dsaPercentage}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${stats.dsaPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>Coding questions checked: <strong className="text-slate-600 dark:text-slate-200">{stats.questionsCompleted}</strong> / {stats.totalQuestions}</span>
            <button
              id="btn-trigger-reset-stats"
              onClick={resetProgress}
              className="text-red-500 hover:text-red-600 flex items-center gap-1 cursor-pointer font-bold"
            >
              <RotateCcw size={12} /> Wipe Progress
            </button>
          </div>
        </div>
      </div>

      {/* MID-BOARD: RECOMMENDATIONS & GOALS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Next Node Recommendations */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
            <Award className="text-blue-500" size={16} /> Up Next For You
          </h3>

          <div className="space-y-3">
            {nextUpGate && (
              <div
                id="recommend-gate"
                onClick={() => onNavigateToTopic('gate', nextUpGate.id)}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-750 transition-all cursor-pointer group"
              >
                <div className="text-blue-500 bg-blue-550/10 p-2 rounded-lg shrink-0">
                  <BookOpen size={16} />
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                    <span>GATE: {nextUpGate.title}</span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {nextUpGate.description}
                  </p>
                </div>
              </div>
            )}

            {nextUpFS && (
              <div
                id="recommend-fs"
                onClick={() => onNavigateToTopic('fullstack', nextUpFS.id)}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-750 transition-all cursor-pointer group"
              >
                <div className="text-cyan-500 bg-cyan-500/10 p-2 rounded-lg shrink-0">
                  <BookOpen size={16} />
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                    <span>Full Stack: {nextUpFS.title}</span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {nextUpFS.description}
                  </p>
                </div>
              </div>
            )}

            {nextUpDSA && (
              <div
                id="recommend-dsa"
                onClick={() => onNavigateToTopic('dsa', nextUpDSA.id)}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-750 transition-all cursor-pointer group"
              >
                <div className="text-amber-500 bg-amber-500/10 p-2 rounded-lg shrink-0">
                  <BookOpen size={16} />
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-between">
                    <span>DSA: {nextUpDSA.title}</span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {nextUpDSA.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Configure Targets */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
              <Timer className="text-cyan-500" size={16} /> Learning Target
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Define the number of topic check-offs you aim for each day. Regular small actions lock in permanent learning gains.
            </p>
          </div>

          <form onSubmit={handleSaveGoal} className="mt-4 flex gap-2">
            <div className="flex-1">
              <label htmlFor="goal-input" className="sr-only">Daily Topic Goal</label>
              <input
                id="goal-input"
                type="number"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                min="1"
                max="20"
                className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-hidden font-mono text-center font-bold text-slate-800 dark:text-slate-100"
              />
            </div>
            <button
              id="btn-save-goal"
              type="submit"
              className="px-4 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-1.5 font-bold cursor-pointer"
            >
              <Save size={14} /> Set Goal
            </button>
          </form>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-3 text-center">
            Daily goal: {dailyGoal} checked items. Consistency triggers streaks!
          </p>
        </div>
      </div>

      {/* NOTE SHELF / PERSONAL SCRATCHPADS */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
          <Edit className="text-amber-500" size={16} /> Personal Note Shelf ({topicsWithNotes.length})
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Below are the summaries, rules, and codes you typed and saved while studying roadmap nodes. Click on any block to jump directly to the topic and revise.
        </p>

        {topicsWithNotes.length === 0 ? (
          <div className="py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-400 font-mono">
            No notes logged yet. Select a syllabus topic, scroll to the Notes panel, and start writing down formulas and explanations!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topicsWithNotes.map((item) => (
              <div
                key={item.id}
                id={`note-shelf-item-${item.id}`}
                onClick={() => onNavigateToTopic(item.path, item.id)}
                className="group p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 hover:border-slate-350 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-white dark:hover:bg-slate-900 transition-all cursor-pointer text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      {item.path}
                    </span>
                    <span className="text-[9px] font-semibold bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded-md">
                      Ref Node
                    </span>
                  </div>
                  <h4 className="text-xs font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-3 mt-1.5 whitespace-pre-line leading-relaxed font-sans italic">
                    "{item.notes}"
                  </p>
                </div>
                <div className="text-[10px] font-bold text-blue-500 group-hover:underline mt-3 flex items-center gap-1">
                  Open topic study guide ➔
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
