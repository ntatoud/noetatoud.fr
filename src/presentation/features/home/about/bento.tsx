import '@/presentation/features/home/about/bento.css';

import { ClimbingCard } from '@/presentation/features/home/about/climbing';
import { EyeseightCard } from '@/presentation/features/home/about/eyesight';
import { JobCard } from '@/presentation/features/home/about/job';
import { LocationCard } from '@/presentation/features/home/about/location';
import { MusicCard } from '@/presentation/features/home/about/music';

export function Bento() {
  return (
    <div className="bento min-h-96">
      <LocationCard />
      <JobCard />
      <ClimbingCard />
      <EyeseightCard />
      <MusicCard />
    </div>
  );
}
