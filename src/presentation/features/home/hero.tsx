import { TextHighlight } from '@/presentation/components/ui/text-highlight';
import {
  Section,
  SectionContent,
} from '@/presentation/features/home/_parts/section';
import { Socials } from '@/presentation/features/home/socials';

export function HeroSection() {
  return (
    <Section className="space-y-8 text-center">
      <h1 className="text-2xl font-light tracking-wide">
        Hi, I’m <TextHighlight>Noé Tatoud</TextHighlight> — a full-stack{' '}
        <TextHighlight>developer</TextHighlight> with a passion for crafting
        slick web experiences.
      </h1>

      <SectionContent className="flex w-full justify-end">
        <Socials />
      </SectionContent>
    </Section>
  );
}
