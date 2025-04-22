import type { ComponentProps } from 'react';

import '@/presentation/features/home/bento.css';

import { Card } from '@/presentation/components/ui/card';
import { cn } from '@/shared/lib/utils';
interface BentoCardProps extends ComponentProps<'div'> {
  gridArea: string;
}

export function BentoCard({
  className,
  gridArea,
  style,
  ...props
}: BentoCardProps) {
  return (
    <Card
      className={cn('bg-background/40', className)}
      style={{ ...style, gridArea }}
      {...props}
    />
  );
}
export function Bento() {
  return (
    <div className="bento h-80">
      <BentoCard
        className="flex items-center justify-center"
        gridArea="location"
      >
        location
      </BentoCard>
      <BentoCard className="flex items-center justify-center" gridArea="gender">
        gender
      </BentoCard>
      <BentoCard className="flex items-center justify-center" gridArea="work">
        work
      </BentoCard>
      <BentoCard
        className="flex items-center justify-center"
        gridArea="climbing"
      >
        climbing
      </BentoCard>
      <BentoCard className="flex items-center justify-center" gridArea="gaming">
        gaming
      </BentoCard>
      <BentoCard
        className="flex items-center justify-center"
        gridArea="passion"
      >
        passion
      </BentoCard>
      <BentoCard
        className="flex items-center justify-center"
        gridArea="eyesight"
      >
        eyesight
      </BentoCard>
    </div>
  );
}
