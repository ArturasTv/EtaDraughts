import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERIES } from '@/constants/queries';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import { Room } from 'colyseus.js';
import useGameLobbyStore from '@/stores/game/useGameLobbyStore';

type Payload = {
  game: Room<unknown> | null;
};

const deleteGame = async (payload: Payload) => {
  const { game } = payload;

  const result = await game?.leave();

  return result;
};

export default function useDeleteGame() {
  const setCreatedGame = useGameLobbyStore((state) => state.setCreatedGame);

  const { toast } = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGame,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERIES.AVAILABLE_GAMES],
      });

      setCreatedGame(null);

      toast({
        title: 'Game deleted',
        description: 'Your game has been deleted.',
      });
    },
  });
}
