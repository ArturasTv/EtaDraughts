import { useMutation, useQueryClient } from '@tanstack/react-query';
import useColyseusStore from '@/stores/game/useColyseusStore';
import { Client } from 'colyseus.js';
import { QUERIES } from '@/constants/queries';
import useGameLobbyStore, { State } from '@/stores/game/useGameLobbyStore';
import useDeleteGame from './deleteGame';

type JoinOptions = {
  playerId: string;
};
type Payload = {
  client: Client;
  roomId: string;
  options: JoinOptions;
};

const joinGame = async (payload: Payload) => {
  const { client, roomId, options } = payload;

  const result = await client.joinById<State>(roomId, options);

  return result;
};

export default function useJoinGame() {
  const deleteGameMutation = useDeleteGame();

  const setJoinedGame = useGameLobbyStore((state) => state.setJoinedGame);
  const createdGame = useGameLobbyStore((state) => state.createdGame);

  const client = useColyseusStore((state) => state.client);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      roomId,
      options,
    }: {
      roomId: string;
      options: JoinOptions;
    }) => joinGame({ client, roomId, options }),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: [QUERIES.AVAILABLE_GAMES],
      });

      if (createdGame) {
        deleteGameMutation.mutate({ game: createdGame });
      }

      setJoinedGame(data);
    },
  });
}
