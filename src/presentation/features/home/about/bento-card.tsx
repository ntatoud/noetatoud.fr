import type { ComponentProps } from 'react';

import type { AboutKeys } from '@/domain/about';
import { Card } from '@/presentation/components/ui/card';
import { cn } from '@/shared/lib/utils';

interface BentoCardProps extends ComponentProps<'div'> {
  name: AboutKeys;
}

export function BentoCard({
  className,
  name,
  style,
  ...props
}: BentoCardProps) {
  return (
    <Card
      className={cn('bg-background/40 relative', className)}
      style={{ ...style, gridArea: name }}
      {...props}
    />
  );
}
