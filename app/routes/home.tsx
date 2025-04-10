import { Button } from '@/components/ui/button';

import type { Route } from './+types/home';
import { ThemeSwitcher } from '@/components/theme-switcher';
import HeroSection from '@/components/organisms/hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Noé Tatoud' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <ThemeSwitcher />
      <HeroSection />
    </div>
  );
}
