'use client';

import {
  type HTMLMotionProps,
  motion,
  type SpringOptions,
  type Transition,
  useMotionValue,
  useSpring,
} from 'motion/react';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

interface StarLayerProps extends HTMLMotionProps<'div'> {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
}

const generateStars = (count: number, starColor: string) => {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px 0 ${starColor}`);
  }
  return shadows.join(', ');
};

const defaultTransition = {
  repeat: Infinity,
  duration: 50,
  ease: 'linear',
} as const;
const defaultSpringTransition = { stiffness: 50, damping: 20 } as const;

const StarLayer = ({
  ref,
  count = 1000,
  size = 1,
  transition = defaultTransition,
  starColor = '#fff',
  className,
  ...props
}: StarLayerProps & { ref?: React.RefObject<HTMLDivElement | null> }) => {
  const boxShadow = React.useMemo(
    () => generateStars(count, starColor),
    [count, starColor]
  );

  return (
    <motion.div
      ref={ref}
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={cn('absolute left-0 top-0 h-[2000px] w-full', className)}
      {...props}
    >
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute top-[2000px] rounded-full bg-transparent"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
};

StarLayer.displayName = 'StarLayer';

interface StarsBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  starColor?: string;
}

const StarsBackground = ({
  ref,
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = defaultSpringTransition,
  starColor = '#fff',
  ...props
}: StarsBackgroundProps & { ref?: React.RefObject<HTMLDivElement | null> }) => {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor]
  );

  return (
    <div
      ref={ref}
      className={cn('relative size-full overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div style={{ x: springX, y: springY }}>
        <StarLayer
          count={1000}
          size={1}
          transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
          starColor={starColor}
        />
        <StarLayer
          count={400}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: 'linear',
          }}
          starColor={starColor}
        />
        <StarLayer
          count={200}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 3,
            ease: 'linear',
          }}
          starColor={starColor}
        />
      </motion.div>
      {children}
    </div>
  );
};

StarsBackground.displayName = 'StarsBackground';

export {
  StarLayer,
  type StarLayerProps,
  StarsBackground,
  type StarsBackgroundProps,
};
