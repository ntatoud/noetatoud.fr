import type { ComponentProps } from 'react';

import '@/presentation/features/home/about/bento.css';

import { job } from '@/domain/about/job';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { cn } from '@/shared/lib/utils';

import { EyeseightCard } from './eyesight';

export function Bento() {
  return (
    <div className="bento min-h-96">
      <BentoCard name="location" className="flex items-center justify-center">
        <CardContent>
          📍 I currently live in Rouen, France — a beautiful city rich in
          history... and rain. ☔️
        </CardContent>
      </BentoCard>
      <BentoCard name="gender">gender</BentoCard>
      <BentoCard name="job" className="flex items-center justify-center">
        <div className="xl:absolute xl:-right-10 xl:top-2 xl:rotate-12">
          {<job.Logo />}
        </div>
        <CardContent>{job.description}</CardContent>
      </BentoCard>
      <BentoCard name="climbing">climbing</BentoCard>
      <BentoCard name="gaming">gaming</BentoCard>
      <BentoCard name="passion">passion</BentoCard>
      <EyeseightCard />
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
      className={cn('bg-background/40 relative', className)}
      style={{ ...style, gridArea: name }}
      {...props}
    />
  );
}
