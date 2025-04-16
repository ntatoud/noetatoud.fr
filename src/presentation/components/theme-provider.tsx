import { Moon, Sun } from 'lucide-react';
import React, { type PropsWithChildren } from 'react';

export const themes = [
  {
    label: 'Light',
    value: 'light',
    Icon: Sun,
  },
  {
    label: 'Dark',
    value: 'dark',
    Icon: Moon,
  },
] as const;
export type Theme = (typeof themes)[number]['value'];

export const starColors = {
  light: '#684eea',
  dark: '#ffee8c',
  nature: '#6fc276',
} as const;

type ThemeProviderContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeProviderContextValue | null>(
  null
);

export function useTheme() {
  const context = React.use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({
  theme,
  setTheme,
  children,
}: PropsWithChildren<ThemeProviderContextValue>) {
  const value = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
