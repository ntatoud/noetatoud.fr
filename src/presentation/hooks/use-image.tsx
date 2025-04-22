import { useEffect, useState } from 'react';

import { PLACEHOLDER_URL } from '@/shared/constants';

interface UseImageProps {
  src: string;
  fallback?: string;
}
export function useImage({ src, fallback = PLACEHOLDER_URL }: UseImageProps) {
  const [img, setImg] = useState(src);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => setImg(src);
    img.onerror = () => setImg(fallback);
  }, [src, fallback]);

  return img;
}
