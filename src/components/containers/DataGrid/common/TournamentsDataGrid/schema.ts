import { z } from 'zod';

export const TournamentSchema = z.object({
  id: z.string(),
  ownerUser: z.string(),
  ownerUserId: z.string(),
  timeControl: z.number(),
  size: z.number(),
  currentPlayersAmount: z.number(),
  status: z.string(),
});

export type Tournament = z.infer<typeof TournamentSchema>;
