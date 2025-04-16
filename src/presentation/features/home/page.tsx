import { banking } from '#domain/projects/banking';
import { HeroSection } from '#presentation/features/home/hero';
import { ProjectCard } from '#presentation/features/home/project-card';

export function PageHome() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <HeroSection />
      <div className="mx-20">
        <h2 className="mb-6 mt-8 text-start text-lg font-normal">
          My projects
        </h2>
        <div className="grid grid-cols-2 space-x-8">
          <ProjectCard {...banking} />
          <ProjectCard {...banking} />
        </div>
      </div>
    </div>
  );
}
