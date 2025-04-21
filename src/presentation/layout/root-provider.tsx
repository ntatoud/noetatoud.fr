import React from 'react';

import { StarsBackground } from '@/presentation/components/animate-ui/stars-background';
import { ClientOnly } from '@/presentation/components/client-only';
import {
  starColors,
  type Theme,
  ThemeProvider,
} from '@/presentation/components/theme-provider';

/**
 * Wraps the whole application within the body, theme provider and adds background
 */
export function RootProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>('light');

  return (
    <body className={theme}>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <div className="clouds" />
        <ClientOnly>
          <StarsBackground
            starColor={starColors[theme]}
            className="nature:opacity-85 light:opacity-75 absolute inset-0 -z-[5] flex items-center justify-center rounded-xl dark:opacity-60"
          />
        </ClientOnly>
        {children}
      </ThemeProvider>
    </body>
  );
}
