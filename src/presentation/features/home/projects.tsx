import { banking } from '@/domain/projects/banking';
import { placeholder } from '@/domain/projects/placeholder';
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from '@/presentation/features/home/_parts/section';

import { ProjectCard } from './project-card';

export function Projects() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>My projects</SectionTitle>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <ProjectCard {...banking} />
        <ProjectCard {...placeholder} />
        <ProjectCard {...placeholder} />
        {/* <ProjectCard {...placeholder} /> */}
      </SectionContent>
    </Section>
  );
}
