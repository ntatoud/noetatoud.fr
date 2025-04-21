import { Socials } from '@/presentation/features/home/socials';

export function HeroSection() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-4">
      <div className="w-full max-w-5xl space-y-8 text-center">
        <h1 className="text-xl font-light tracking-wide">
          Hi, I’m{' '}
          <span className="text-accent-foreground font-serif font-medium">
            Noé Tatoud
          </span>{' '}
          — a full-stack{' '}
          <span className="text-accent-foreground font-serif font-medium">
            developer
          </span>{' '}
          with a passion for crafting slick web experiences.
        </h1>

        <Socials />
      </div>
    </section>
  );
}
