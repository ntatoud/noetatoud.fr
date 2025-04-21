import type React from 'react';

import { Header } from '@/presentation/layout/header';

/**
 * Global app content with actual layout
 */
export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-4rem)] px-4 py-6">{children}</main>
    </>
  );
}
