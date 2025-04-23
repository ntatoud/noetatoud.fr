import type { ComponentProps } from 'react';

import '@/presentation/features/home/about/bento.css';

import { job } from '@/domain/about/job';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { cn } from '@/shared/lib/utils';

export function Bento() {
  return (
    <div className="bento min-h-96">
      <BentoCard name="location">location</BentoCard>
      <BentoCard name="gender">gender</BentoCard>
      <BentoCard name="job">
        <div className="xl:absolute xl:-right-10 xl:top-2 xl:rotate-12">
          {<job.Logo />}
        </div>
        <CardContent>{job.description}</CardContent>
      </BentoCard>
      <BentoCard name="climbing">climbing</BentoCard>
      <BentoCard name="gaming">gaming</BentoCard>
      <BentoCard name="passion">passion</BentoCard>
      <BentoCard name="eyesight">eyesight</BentoCard>
    </div>
  );
}

interface BentoCardProps extends ComponentProps<'div'> {
  name: string;
}

export function BentoCard({
  className,
  name,
  style,
  ...props
}: BentoCardProps) {
  return (
    <Card
      className={cn(
        'bg-background/40 relative flex items-center justify-center',
        className
      )}
      style={{ ...style, gridArea: name }}
      {...props}
    />
  );
}
