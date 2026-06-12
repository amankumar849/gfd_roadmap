export type ResourceType = 'video' | 'article' | 'book' | 'docs' | 'course';

export interface LearningResource {
  id: string;
  name: string;
  url: string;
  type: ResourceType;
  duration?: string;
}

export interface PracticeQuestion {
  id: string;
  text: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  leetcodeUrl?: string;
  solutionHint?: string;
}

export interface TopicNode {
  id: string;
  title: string;
  description: string;
  durationEstimate?: string;
  resources: LearningResource[];
  practiceQuestions: PracticeQuestion[];
  category?: string; // e.g. "Theory of Computation" or "Frontend" or "Advanced"
  visualExplanationSteps?: string[]; // for DSA visual representation
  interactiveDataSymbol?: string; // used to render an interactive widget for code concepts
}

export interface RoadmapPath {
  id: 'gate' | 'fullstack' | 'dsa';
  title: string;
  description: string;
  icon: string;
  topicsCount: number;
}

export interface ProgressState {
  completedTopics: Record<string, boolean>; // map of topicId -> completed
  streak: number;
  lastCompletedDate: string | null;
  dailyGoal: number; // e.g., 2 topics completed per day
  customNotes: Record<string, string>; // map of topicId -> custom user markdown notes
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: 'gate' | 'fullstack' | 'dsa';
  category?: string;
}
