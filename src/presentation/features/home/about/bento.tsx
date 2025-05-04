import '@/presentation/features/home/about/bento.css';

import { BentoCard } from '@/presentation/features/home/about/bento-card';
import { ClimbingCard } from '@/presentation/features/home/about/climbing';
import { EyeseightCard } from '@/presentation/features/home/about/eyesight';
import { JobCard } from '@/presentation/features/home/about/job';
import { LocationCard } from '@/presentation/features/home/about/location';

export function Bento() {
  return (
    <div className="bento min-h-96">
      <LocationCard />
      <BentoCard name="gender">gender</BentoCard>
      <JobCard />
      <ClimbingCard />
      <BentoCard name="gaming">gaming</BentoCard>
      <BentoCard name="passion">passion</BentoCard>
      <EyeseightCard />
    </div>
  );
}
