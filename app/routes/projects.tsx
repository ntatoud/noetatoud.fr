import { banking } from '@/content/projects/banking';
import { ProjectCard } from '@/features/projects/project-card';

export function meta() {
  return [
    { title: 'Noé Tatoud' },
    { name: 'description', content: 'Full-stack web developer portfolio' },
  ];
}

export default function Projects() {
  return <ProjectCard {...banking} />;
}
