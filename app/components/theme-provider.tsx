import React, { type PropsWithChildren } from "react";

type ThemeProviderContextValue = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = React.createContext<ThemeProviderContextValue | null>(
  null
);

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({
  theme,
  setTheme,
  children,
}: PropsWithChildren<ThemeProviderContextValue>) {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
