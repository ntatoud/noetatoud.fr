// src/presentation/components/Section.tsx
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils'; // or use clsx if you're using that

export function Section({ className, ...props }: ComponentProps<'div'>) {
  return (
    <section
      className={cn('max-w-6xl px-4 py-12 md:py-20', className)}
      {...props}
    />
  );
}

export function SectionHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mb-8 text-center', className)} {...props} />;
}

export function SectionTitle({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('font-mono text-xl font-medium tracking-wide', className)}
      {...props}
    />
  );
}

export function SectionDescription({
  className,
  ...props
}: ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-muted-foreground mx-auto mt-2 max-w-xl', className)}
      {...props}
    />
  );
}
export function SectionContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto', className)} {...props} />;
}
