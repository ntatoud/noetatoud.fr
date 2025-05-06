import { CardContent, CardFooter } from '@/presentation/components/ui/card';

import { BentoCard } from './bento-card';

import Climbing from '/public/climbing.jpeg';

export function ClimbingCard() {
  return (
    <BentoCard name="climbing" className="pt-2">
      <CardContent className="px-2">
        <div className="w-full">
          <img
            src={Climbing}
            className="aspect-video w-full object-cover"
            alt="Me climbing in Arkose Nanterre"
          />
        </div>
      </CardContent>
      <CardFooter>
        <p>
          I love climbing and will climb any wall I can find. I discovered this
          sport in 2021 and have not stopped loving it since.
        </p>
      </CardFooter>
    </BentoCard>
  );
}
