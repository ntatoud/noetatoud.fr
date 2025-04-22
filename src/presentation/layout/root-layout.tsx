import type React from 'react';

import { Header } from '@/presentation/layout/header';

import { WipBanner } from '../features/wip/wip-banner';

/**
 * Global app content with actual layout
 */
export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WipBanner />
      <Header />
      <main className="min-h-[calc(100dvh-4rem)] px-4 py-6">{children}</main>
    </>
  );
}
