import { useEffect, useRef } from 'react';

interface UseSoundOptions {
  volume?: number;
  onPlay?: () => void;
}

export function useSound(soundPath: string, options: UseSoundOptions = {}) {
  const { volume = 0.5, onPlay } = options;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = volume;
  }, [soundPath, volume]);

  const play = () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
      onPlay?.();
    } catch (error) {
      console.warn('Sound playback failed:', error);
    }
  };

  return { play };
}
