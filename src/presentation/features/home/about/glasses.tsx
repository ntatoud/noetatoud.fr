import { motion, useMotionValue } from 'motion/react';
import { useRef, useState } from 'react';

import { CardContent, CardHeader } from '@/presentation/components/ui/card';
import { cn } from '@/shared/lib/utils';

import { BentoCard } from './bento';

export const DEFAULT_GLASSES_POS_X = -1;
export const DEFAULT_GLASSES_POS_Y = -22;

export function Glasses() {
  const x = useMotionValue(DEFAULT_GLASSES_POS_X);
  const y = useMotionValue(DEFAULT_GLASSES_POS_Y);
  const avatarRef = useRef<HTMLImageElement>(null);
  const glassesRef = useRef<HTMLImageElement>(null);

  const [hasGlasses, setHasGlasses] = useState(true);
  const checkOverlap = () => {
    const avatarRect = avatarRef.current?.getBoundingClientRect();
    const glassesRect = glassesRef.current?.getBoundingClientRect();

    if (avatarRect && glassesRect) {
      const headWidth = (1 / 2) * avatarRect.width;
      const headHeight = (1 / 2) * avatarRect.height;
      const areGlassesClose = !(
        avatarRect.right - (4 / 3) * headWidth < glassesRect.left ||
        avatarRect.left + (4 / 3) * headWidth > glassesRect.right ||
        avatarRect.bottom - (4 / 3) * headHeight < glassesRect.top ||
        avatarRect.top + (4 / 5) * headHeight > glassesRect.bottom
      );

      setHasGlasses(areGlassesClose);
      if (areGlassesClose) {
        x.set(DEFAULT_GLASSES_POS_X);
        y.set(DEFAULT_GLASSES_POS_Y);

        return;
      }
    }
  };

  return (
    <BentoCard name="eyesight" className="gap-3 pb-0">
      <CardHeader>
        <p>
          I have very bad eyesight. I can't live without my pair of glasses !!
        </p>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="relative flex h-full w-64 flex-col items-center justify-center">
          {/* Avatar with glasses */}
          {hasGlasses ? (
            <img
              ref={avatarRef}
              src="/with-glasses.png"
              alt="Me with glasses"
            />
          ) : (
            <img
              ref={avatarRef}
              src="/without-glasses.png"
              alt="Me without glasses"
            />
          )}

          {/* Draggable glasses */}
          <motion.img
            ref={glassesRef}
            drag
            onDragEnd={checkOverlap}
            dragElastic={0.2}
            dragMomentum={false}
            style={{ x, y }}
            whileDrag={{ scale: 1.05 }}
            src="/glasses.png"
            className={cn(
              'absolute h-[68px] w-[130px] cursor-grab object-cover transition-transform duration-300 ease-out hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] focus:outline-none focus:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] active:cursor-grabbing'
            )}
            alt="My glasses"
          />
        </div>
      </CardContent>
    </BentoCard>
  );
}
