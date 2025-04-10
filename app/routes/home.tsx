import HeroSection from '@/components/organisms/hero';
import { ThemeSwitcher } from '@/components/theme-switcher';

export function meta() {
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
