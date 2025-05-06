import { AnimatePresence, motion } from 'motion/react';
import React from 'react';

import { CardContent, CardFooter } from '@/presentation/components/ui/card';
import { BentoCard } from '@/presentation/features/home/about/bento-card';
import { useSound } from '@/presentation/hooks/use-sound';

import GrosHorloge from '/gros-horloge.png';
// [TODO] Use mp3 file
import HintCoinFound from '/sounds/hint_coin.wav';

export function LocationCard() {
  const [showExclamation, setShowExclamation] = React.useState(false);
  const { play } = useSound(HintCoinFound, {
    volume: 0.5,
    onPlay: () => {
      setShowExclamation(true);
      setTimeout(() => setShowExclamation(false), 1000);
    },
  });

  return (
    <BentoCard
      name="location"
      className="flex items-center justify-center pt-2"
    >
      <CardContent className="px-2">
        <div className="relative">
          <div
            onClick={play}
            className="bottom-1/5 absolute left-1/2 size-36 -translate-x-1/2"
          >
            <AnimatePresence>
              {showExclamation && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -40 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  className="absolute bottom-1/2 left-1/2 size-5 -translate-x-1/2 rounded-full bg-yellow-600"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
          <img
            src={GrosHorloge}
            alt="Gros Horloge - Rouen"
            className="mb-6 rounded-lg"
          />
        </div>
        <CardFooter>
          <p>
            📍 I currently live in Rouen, France — a beautiful city rich in
            history... and rain. ☔️
          </p>
        </CardFooter>
      </CardContent>
    </BentoCard>
  );
}
