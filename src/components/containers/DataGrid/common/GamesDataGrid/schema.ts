import { z } from 'zod';

export const PlayedGameSchema = z.object({
  id: z.string(),
  opponent: z.string(),
  rating: z.number(),
  timeControl: z.number(),
  result: z.enum(['loss', 'draw', 'win']),
});

export type PlayedGame = z.infer<typeof PlayedGameSchema>;
