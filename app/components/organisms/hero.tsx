import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl space-y-8 text-center">
        <h1 className="text-xl font-light tracking-wide">
          Hi, I’m{' '}
          <span className="font-serif font-medium text-accent-foreground">
            Noé Tatoud
          </span>{' '}
          — a full-stack{' '}
          <span className="font-serif font-medium text-accent-foreground">
            developer
          </span>{' '}
          with a passion for crafting slick web experiences.
        </h1>

        <div className="flex justify-center gap-4">
          <Button className="tracking-wide uppercase">View Projects</Button>
          <Button variant="outline" className="tracking-wide uppercase">
            Contact Me <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
