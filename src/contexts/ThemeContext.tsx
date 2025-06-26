import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

interface ThemeContextType {
  currentTheme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
  resetTheme: () => void;
}

const defaultTheme: ThemeColors = {
  primary: '#D4A574',
  secondary: '#8B4513',
  accent: '#2C2C2C',
  background: '#FEFBF6',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(defaultTheme);

  const setTheme = (theme: ThemeColors) => {
    setCurrentTheme(theme);
  };

  const resetTheme = () => {
    setCurrentTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};