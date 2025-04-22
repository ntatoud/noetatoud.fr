import { Bento } from '@/presentation/features/home/bento';
import { HeroSection } from '@/presentation/features/home/hero';
import { ProjectsSection } from '@/presentation/features/home/projects';

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from './_parts/section';

export function PageHome() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <HeroSection />
      <ProjectsSection />
      <Section className="w-full">
        <SectionHeader>
          <SectionTitle>About</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <Bento />
        </SectionContent>
      </Section>
    </div>
  );
}
