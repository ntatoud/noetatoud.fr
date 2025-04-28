import { useMotionValue } from 'motion/react';
import { useRef } from 'react';

interface UseMovableProps {
  defaultX: number;
  defaultY: number;
  onOverlapCheck?: (areClose: boolean) => void;
  getAnchorOffset?: ({
    anchorWidth,
    anchorHeight,
  }: {
    anchorWidth: number;
    anchorHeight: number;
  }) => {
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
    offsetBottom?: number;
  };
}

export function useMovable<
  TAnchor extends HTMLElement = HTMLElement,
  TMoving extends HTMLElement = TAnchor,
>({ getAnchorOffset, defaultX, defaultY, onOverlapCheck }: UseMovableProps) {
  const x = useMotionValue(defaultX);
  const y = useMotionValue(defaultY);
  const anchorRef = useRef<TAnchor>(null);
  const movingRef = useRef<TMoving>(null);

  const checkOverlap = () => {
    const anchorRect = anchorRef.current?.getBoundingClientRect();
    const movingRect = movingRef.current?.getBoundingClientRect();

    if (!anchorRect || !movingRect) return;

    const {
      offsetLeft = 0,
      offsetBottom = 0,
      offsetRight = 0,
      offsetTop = 0,
    } = getAnchorOffset
      ? getAnchorOffset({
          anchorHeight: anchorRect.height,
          anchorWidth: anchorRect.width,
        })
      : { offsetLeft: 0, offsetBottom: 0, offsetRight: 0, offsetTop: 0 };

    console.log(offsetLeft, offsetBottom);
    const areClose = !(
      anchorRect.right - offsetRight < movingRect.left ||
      anchorRect.left + offsetLeft > movingRect.right ||
      anchorRect.bottom - offsetBottom < movingRect.top ||
      anchorRect.top + offsetTop > movingRect.bottom
    );

    console.log(areClose);
    onOverlapCheck?.(areClose);
    if (areClose) {
      x.set(defaultX);
      y.set(defaultY);
    }
  };

  return {
    checkOverlap,
    anchorRef,
    movingRef,
    x,
    y,
  };
}
