import { CardContent } from '@/presentation/components/ui/card';
import { BentoCard } from '@/presentation/features/home/about/bento-card';

import GrosHorloge from '/gros-horloge.png';

export function LocationCard() {
  return (
    <BentoCard name="location" className="flex items-center justify-center">
      <CardContent>
        <img
          src={GrosHorloge}
          alt="Gros Horloge - Rouen"
          className="mb-6 rounded-lg"
        />
        <p>
          📍 I currently live in Rouen, France — a beautiful city rich in
          history... and rain. ☔️
        </p>
      </CardContent>
    </BentoCard>
  );
}
