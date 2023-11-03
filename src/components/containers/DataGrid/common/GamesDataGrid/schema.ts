import { z } from 'zod';

export const GameSchema = z.object({
  id: z.string(),
  user: z.string(),
  rating: z.number(),
  timeControl: z.number(),
});

export type Game = z.infer<typeof GameSchema>;
