import { HeroSection } from '@/components/organisms/hero';

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
    </div>
  );
}
