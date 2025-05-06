import { job } from '@/domain/about/job';
import { CardContent } from '@/presentation/components/ui/card';
import { BentoCard } from '@/presentation/features/home/about/bento-card';

export function JobCard() {
  return (
    <BentoCard name="job" className="flex items-center justify-center">
      <div className="xl:absolute xl:-right-10 xl:top-2 xl:rotate-12">
        {<job.Logo />}
      </div>
      <CardContent>{job.description}</CardContent>
    </BentoCard>
  );
}
