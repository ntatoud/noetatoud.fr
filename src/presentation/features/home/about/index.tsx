import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from '@/presentation/features/home/_parts/section';
import { Bento } from '@/presentation/features/home/about/bento';

export function AboutSection() {
  return (
    <Section className="w-full">
      <SectionHeader>
        <SectionTitle>About</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <Bento />
      </SectionContent>
    </Section>
  );
}
