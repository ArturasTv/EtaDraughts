import { useMutation, useQueryClient } from '@tanstack/react-query';
import useColyseusStore from '@/stores/game/useColyseusStore';
import { Client } from 'colyseus.js';
import { QUERIES } from '@/constants/queries';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import useModalStore from '@/stores/ui/useModalStore';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import useGameLobbyStore, { State } from '@/stores/game/useGameLobbyStore';

type CreateOptions = {
  playerId: string;
  timeControl: number;
};

type Payload = {
  client: Client;
  options: CreateOptions;
};

const ROOM_NAME = 'game';

const createGame = async (payload: Payload) => {
  const { client, options } = payload;

  const result = await client.create<State>(ROOM_NAME, options);

  return result;
};

export default function useCreateGame() {
  const setCreatedGame = useGameLobbyStore((state) => state.setCreatedGame);

  const { createGame: createGameModal } = useModalStore();
  const { toast } = useToast();

  const client = useColyseusStore((state) => state.client);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (options: CreateOptions) => createGame({ client, options }),
    onSuccess: async (game, variables) => {
      const { timeControl } = variables;

      await queryClient.invalidateQueries({
        queryKey: [QUERIES.AVAILABLE_GAMES],
      });

      setCreatedGame(game);

      // TODO: this message logic will be handled in backend

      game.onMessage('joined', (message: { player: string }) => {
        toast({
          title: 'Game joined',
          description: `${message.player} has joined the game.`,
        });
      });

      game.onError((code, message) => {
        toast({
          title: 'Error',
          description: message,
        });
      });

      game.onLeave(() => {
        toast({
          title: 'Game deleted',
          description: 'Your game has been deleted.',
        });
      });

      toast({
        title: 'Game created',
        description: `Your game with ${formatSecondsToMinutesAndSeconds(
          timeControl,
        )} time control has been created.`,
      });

      createGameModal.close();
    },
  });
}
