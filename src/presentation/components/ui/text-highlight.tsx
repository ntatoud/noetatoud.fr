import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils';

export function TextHighlight({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-accent-foreground font-serif font-medium', className)}
      {...props}
    />
  );
}
