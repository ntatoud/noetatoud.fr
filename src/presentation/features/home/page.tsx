import { AboutSection } from '@/presentation/features/home/about';
import { HeroSection } from '@/presentation/features/home/hero';
import { ProjectsSection } from '@/presentation/features/home/projects';

export function PageHome() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center overflow-hidden">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
