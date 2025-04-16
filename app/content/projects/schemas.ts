import type { ReactNode } from 'react';
import z from 'zod';

export type Project = z.infer<ReturnType<typeof zProject>>;
export const zProject = () =>
  z.object({
    title: z.string(),
    // image: z.file(),
    tags: z.array(z.string()),
    description: z.string(),
    content: z.custom<ReactNode>(),
    dates: z.object({ from: z.date(), to: z.date() }),
    isPrivate: z.boolean(),
  });
