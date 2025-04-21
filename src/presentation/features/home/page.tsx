import { HeroSection } from '@/presentation/features/home/hero';
import { Projects } from '@/presentation/features/home/projects';

export function PageHome() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <HeroSection />
      <Projects />
    </div>
  );
}
