import '@/presentation/features/home/about/bento.css';

import { ClimbingCard } from '@/presentation/features/home/about/climbing';
import { EyeseightCard } from '@/presentation/features/home/about/eyesight';
import { JobCard } from '@/presentation/features/home/about/job';
import { LocationCard } from '@/presentation/features/home/about/location';
import { MusicCard } from '@/presentation/features/home/about/music';

import Cosmo from '/cosmo-doodle.png';
import Planet from '/planet-doodle.png';

export function Bento() {
  return (
    <div className="bento min-h-96">
      <LocationCard />
      <div
        style={{ gridArea: 'none' }}
        className="hidden items-center justify-center xl:flex"
      >
        <img src={Planet} alt="Planet" className="h-1/2" />
      </div>
      <div
        style={{ gridArea: 'empty' }}
        className="hidden items-center justify-center xl:flex"
      >
        <img src={Cosmo} alt="Cosmonaut" className="floating h-2/3" />
      </div>
      <JobCard />
      <ClimbingCard />
      <EyeseightCard />
      <MusicCard />
    </div>
  );
}
