import { motion } from 'motion/react';
import { useState } from 'react';

import { CardContent, CardHeader } from '@/presentation/components/ui/card';
import { BentoCard } from '@/presentation/features/home/about/bento';
import { useMovable } from '@/presentation/hooks/use-movable';
import { cn } from '@/shared/lib/utils';

export const DEFAULT_GLASSES_POS = { x: -1, y: -22 };

export function EyeseightCard() {
  const [hasGlasses, setHasGlasses] = useState(true);

  const {
    anchorRef: avatarRef,
    movingRef: glassesRef,
    x,
    y,
    checkOverlap,
  } = useMovable<HTMLImageElement>({
    onOverlapCheck: (areClose) => {
      setHasGlasses(areClose);
    },
    getAnchorOffset({ anchorHeight, anchorWidth }) {
      return {
        offsetRight: (2 / 3) * anchorWidth,
        offsetLeft: (2 / 3) * anchorHeight,
        offsetBottom: (2 / 3) * anchorHeight,
        offsetTop: (2 / 5) * anchorHeight,
      };
    },
    defaultX: DEFAULT_GLASSES_POS.x,
    defaultY: DEFAULT_GLASSES_POS.y,
  });

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
