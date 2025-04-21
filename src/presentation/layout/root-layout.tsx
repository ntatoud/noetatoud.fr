import type React from 'react';

import { Header } from '@/presentation/layout/header';

/**
 * Global app content with actual layout
 */
// TODO: Do actual layout
export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
