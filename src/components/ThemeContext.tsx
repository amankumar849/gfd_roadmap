import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('fb-roadmap-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // fallback to dark preferred by default, as tech interfaces are polished in dark format
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('fb-roadmap-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark text-slate-100' : 'text-slate-800'}>
        <div className="min-h-screen transition-colors duration-300 bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
