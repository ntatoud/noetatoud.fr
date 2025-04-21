import { banking } from '@/domain/projects/banking';
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
      <SectionContent className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <ProjectCard {...banking} />
        <ProjectCard {...banking} />
      </SectionContent>
    </Section>
  );
}
