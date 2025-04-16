import { banking } from '@/content/projects/banking';
import { HeroSection } from '@/features/home/hero';
import { ProjectCard } from '@/features/projects/project-card';

export function meta() {
  return [
    { title: 'Noé Tatoud' },
    { name: 'description', content: 'Full-stack web developer portfolio' },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <HeroSection />
      <div className="mx-20">
        <h2 className="mt-8 mb-6 text-start text-lg font-normal">
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
