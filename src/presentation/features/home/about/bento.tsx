import '@/presentation/features/home/about/bento.css';

import { ClientOnly } from '@/presentation/components/client-only';
import { BentoCard } from '@/presentation/features/home/about/bento-card';
import { EyeseightCard } from '@/presentation/features/home/about/eyesight';
import { JobCard } from '@/presentation/features/home/about/job';
import { LocationCard } from '@/presentation/features/home/about/location';

export function Bento() {
  return (
    <div className="bento min-h-96">
      <ClientOnly>
        <LocationCard />
      </ClientOnly>
      <BentoCard name="gender">gender</BentoCard>
      <JobCard />
      <BentoCard name="climbing">climbing</BentoCard>
      <BentoCard name="gaming">gaming</BentoCard>
      <BentoCard name="passion">passion</BentoCard>
      <EyeseightCard />
    </div>
  );
}
