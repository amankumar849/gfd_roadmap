import React, { createContext, useContext, useState, useEffect } from 'react';
import { gateData } from '../data/gateData';
import { fullStackData } from '../data/fullStackData';
import { dsaData } from '../data/dsaData';

interface ProgressContextType {
  completedTopics: Record<string, boolean>;
  completedQuestions: Record<string, boolean>;
  streak: number;
  lastActiveDate: string | null;
  dailyGoal: number; // target completed topics per day
  customNotes: Record<string, string>;
  toggleTopic: (topicId: string) => void;
  toggleQuestion: (questionId: string) => void;
  saveNotes: (topicId: string, notes: string) => void;
  setDailyGoal: (goal: number) => void;
  getStats: () => {
    gateCompleted: number;
    gateTotal: number;
    gatePercentage: number;
    fsCompleted: number;
    fsTotal: number;
    fsPercentage: number;
    dsaCompleted: number;
    dsaTotal: number;
    dsaPercentage: number;
    questionsCompleted: number;
    totalQuestions: number;
    overallPercentage: number;
  };
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('fb-completed-topics');
    return saved ? JSON.parse(saved) : {};
  });

  const [completedQuestions, setCompletedQuestions] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('fb-completed-questions');
    return saved ? JSON.parse(saved) : {};
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('fb-streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [lastActiveDate, setLastActiveDate] = useState<string | null>(() => {
    return localStorage.getItem('fb-last-active-date');
  });

  const [dailyGoal, setDailyGoalInternal] = useState<number>(() => {
    const saved = localStorage.getItem('fb-daily-goal');
    return saved ? parseInt(saved, 10) : 2;
  });

  const [customNotes, setCustomNotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('fb-custom-notes');
    return saved ? JSON.parse(saved) : {};
  });

  // Keep localStorage updated
  useEffect(() => {
    localStorage.setItem('fb-completed-topics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem('fb-completed-questions', JSON.stringify(completedQuestions));
  }, [completedQuestions]);

  useEffect(() => {
    localStorage.setItem('fb-streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    if (lastActiveDate) {
      localStorage.setItem('fb-last-active-date', lastActiveDate);
    } else {
      localStorage.removeItem('fb-last-active-date');
    }
  }, [lastActiveDate]);

  useEffect(() => {
    localStorage.setItem('fb-daily-goal', dailyGoal.toString());
  }, [dailyGoal]);

  useEffect(() => {
    localStorage.setItem('fb-custom-notes', JSON.stringify(customNotes));
  }, [customNotes]);

  // Handle streak calculations on completion of a topic
  const updateStreak = () => {
    const todayStr = new Date().toISOString().split('T')[0];
    if (lastActiveDate === todayStr) {
      // already active today, no change
      return;
    }

    if (lastActiveDate) {
      const lastDate = new Date(lastActiveDate);
      const todayDate = new Date(todayStr);
      const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Active consecutive day! Increment streak!
        setStreak((prev) => prev + 1);
      } else if (diffDays > 1) {
        // Gaps occurred, reset streak to 1
        setStreak(1);
      }
    } else {
      // First active day ever!
      setStreak(1);
    }
    setLastActiveDate(todayStr);
  };

  // Check if streak was broken (e.g. on application mount, if difference is greater than 1 day from yesterday)
  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    if (lastActiveDate && lastActiveDate !== todayStr) {
      const lastDate = new Date(lastActiveDate);
      const todayDate = new Date(todayStr);
      const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        // Streak decays/broken
        setStreak(0);
      }
    }
  }, [lastActiveDate]);

  const toggleTopic = (topicId: string) => {
    setCompletedTopics((prev) => {
      const isCompleted = !prev[topicId];
      if (isCompleted) {
        updateStreak();
      }
      return {
        ...prev,
        [topicId]: isCompleted,
      };
    });
  };

  const toggleQuestion = (questionId: string) => {
    setCompletedQuestions((prev) => {
      const isCompleted = !prev[questionId];
      if (isCompleted) {
        updateStreak();
      }
      return {
        ...prev,
        [questionId]: isCompleted,
      };
    });
  };

  const saveNotes = (topicId: string, notes: string) => {
    setCustomNotes((prev) => ({
      ...prev,
      [topicId]: notes,
    }));
  };

  const setDailyGoal = (goal: number) => {
    setDailyGoalInternal(goal);
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to delete all learning progress and reset your streak?This cannot be undone.')) {
      setCompletedTopics({});
      setCompletedQuestions({});
      setStreak(0);
      setLastActiveDate(null);
      setCustomNotes({});
      localStorage.removeItem('fb-completed-topics');
      localStorage.removeItem('fb-completed-questions');
      localStorage.removeItem('fb-streak');
      localStorage.removeItem('fb-last-active-date');
      localStorage.removeItem('fb-custom-notes');
    }
  };

  const getStats = () => {
    // Total topics per roadmap
    const gateTotal = gateData.length;
    const fsTotal = fullStackData.length;
    const dsaTotal = dsaData.length;

    // Completed counts per roadmap
    const gateCompleted = gateData.filter(t => completedTopics[t.id]).length;
    const fsCompleted = fullStackData.filter(t => completedTopics[t.id]).length;
    const dsaCompleted = dsaData.filter(t => completedTopics[t.id]).length;

    // Questions counts
    const totalQuestions =
      gateData.reduce((acc, t) => acc + t.practiceQuestions.length, 0) +
      fullStackData.reduce((acc, t) => acc + t.practiceQuestions.length, 0) +
      dsaData.reduce((acc, t) => acc + t.practiceQuestions.length, 0);

    const questionsCompleted = Object.values(completedQuestions).filter(Boolean).length;

    // Percentages
    const gatePercentage = gateTotal > 0 ? Math.round((gateCompleted / gateTotal) * 100) : 0;
    const fsPercentage = fsTotal > 0 ? Math.round((fsCompleted / fsTotal) * 100) : 0;
    const dsaPercentage = dsaTotal > 0 ? Math.round((dsaCompleted / dsaTotal) * 100) : 0;

    const overallTotal = gateTotal + fsTotal + dsaTotal;
    const overallCompleted = gateCompleted + fsCompleted + dsaCompleted;
    const overallPercentage = overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

    return {
      gateCompleted,
      gateTotal,
      gatePercentage,
      fsCompleted,
      fsTotal,
      fsPercentage,
      dsaCompleted,
      dsaTotal,
      dsaPercentage,
      questionsCompleted,
      totalQuestions,
      overallPercentage,
    };
  };

  return (
    <ProgressContext.Provider
      value={{
        completedTopics,
        completedQuestions,
        streak,
        lastActiveDate,
        dailyGoal,
        customNotes,
        toggleTopic,
        toggleQuestion,
        saveNotes,
        setDailyGoal,
        getStats,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
