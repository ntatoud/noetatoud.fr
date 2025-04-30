import { CardContent } from '@/presentation/components/ui/card';
import { BentoCard } from '@/presentation/features/home/about/bento-card';

export function LocationCard() {
  return (
    <BentoCard name="location" className="flex items-center justify-center">
      <CardContent>
        📍 I currently live in Rouen, France — a beautiful city rich in
        history... and rain. ☔️
      </CardContent>
    </BentoCard>
  );
}
