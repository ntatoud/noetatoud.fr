import React from 'react';

import { CardContent } from '@/presentation/components/ui/card';
import { BentoCard } from '@/presentation/features/home/about/bento-card';

import GrosHorloge from '/gros-horloge.png';

export function LocationCard() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    audioRef.current = new Audio('/sounds/puzzle_found.mp3');
    audioRef.current.volume = 0.5;
  }, []);

  const handleClick = () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
    } catch (error) {
      console.warn('Sound playback failed:', error);
    }
  };

  return (
    <BentoCard name="location" className="flex items-center justify-center">
      <CardContent>
        <div className="relative">
          <div
            onClick={handleClick}
            className="bottom-1/5 absolute left-1/2 size-36 -translate-x-1/2"
          />
          <img
            src={GrosHorloge}
            alt="Gros Horloge - Rouen"
            className="mb-6 rounded-lg"
          />
        </div>
        <p>
          📍 I currently live in Rouen, France — a beautiful city rich in
          history... and rain. ☔️
        </p>
      </CardContent>
    </BentoCard>
  );
}
