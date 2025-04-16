import { PageProjects } from '#presentation/features/projects/page';

export function meta() {
  return [
    { title: 'Noé Tatoud' },
    { name: 'description', content: 'Full-stack web developer portfolio' },
  ];
}

export default function Projects() {
  return <PageProjects />;
}
