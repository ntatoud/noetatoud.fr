import { PageHome } from '#presentation/features/home/page';

export function meta() {
  return [
    { title: 'Noé Tatoud' },
    { name: 'description', content: 'Full-stack web developer portfolio' },
  ];
}

export default function Home() {
  return <PageHome />;
}
