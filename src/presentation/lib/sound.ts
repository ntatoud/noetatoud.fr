import type { SoundOptions } from '@/presentation/hooks/use-sound-effect';

interface SoundInstance {
  unload: () => void;
}

type SoundHook = (
  url: string,
  options?: SoundOptions
) => [() => void, { sound: SoundInstance }];

let soundModule: { default: SoundHook } | null = null;

export async function initSound() {
  if (!soundModule) {
    soundModule = await import('use-sound');
  }
  return soundModule.default;
}
