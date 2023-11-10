import { useMutation, useQueryClient } from '@tanstack/react-query';
import useColyseusStore from '@/stores/game/useColyseusStore';
import { Client } from 'colyseus.js';
import { QUERIES } from '@/constants/queries';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import useGameLobbyStore from '@/stores/game/useGameLobbyStore';
import useDeleteGame from './deleteGame';

type Payload = {
  client: Client;
  roomId: string;
};

const joinGame = async (payload: Payload) => {
  const { client, roomId } = payload;

  const result = await client.joinById(roomId, {});

  return result;
};

export default function useJoinGame() {
  const deleteGameMutation = useDeleteGame();

  const setJoinedGame = useGameLobbyStore((state) => state.setJoinedGame);
  const createdGame = useGameLobbyStore((state) => state.createdGame);

  const { toast } = useToast();

  const client = useColyseusStore((state) => state.client);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomId: string) => joinGame({ client, roomId }),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: [QUERIES.AVAILABLE_GAMES],
      });

      if (createdGame) {
        deleteGameMutation.mutate({ game: createdGame });
      }

      setJoinedGame(data);

      toast({
        title: 'Game joined',
        description: 'You have joined the game.',
      });
    },
  });
}
