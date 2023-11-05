import useGameLobbyStore, { MetaData } from '@/stores/game/useGameLobbyStore';
import { RoomAvailable } from 'colyseus.js';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import useInterval from '../ui/useInterval';

function formatGames(games: RoomAvailable<MetaData>[]) {
  return games.map((game) => ({
    id: game.roomId,
    user: game.metadata?.playerName || 'Unknown',
    rating: game.metadata?.rating || 0,
    timeControl: game.metadata?.timeControl || 0,
    status: game.metadata?.status || 'Unknown',
  }));
}

function useGameLobbyToast() {
  const { toast } = useToast();

  const showErrorToast = (code: number, message: string | undefined) => {
    toast({
      title: `Game error: ${code}`,
      description: message,
      variant: 'destructive',
    });
  };

  const showLeaveGameToast = () => {
    toast({
      title: 'Game left',
      description: 'You have left the game',
    });
  };

  return { showErrorToast, showLeaveGameToast };
}

function useGameLobby() {
  const { showErrorToast, showLeaveGameToast } = useGameLobbyToast();

  const {
    games: unformattedGames,
    getAvailableGames,
    createdGame,
    joinedGame,
    createGame,
    leaveCreatedGame,
    joinGame,
  } = useGameLobbyStore();

  const games = formatGames(unformattedGames);

  createdGame?.onError(showErrorToast);
  createdGame?.onLeave(showLeaveGameToast);

  joinedGame?.onError(showErrorToast);
  joinedGame?.onLeave(showLeaveGameToast);

  // TODO: Think of a better way to do this
  useInterval(() => getAvailableGames(), 1000);

  return {
    games,
    hasCreatedGame: !!createdGame,
    createGame,
    leaveCreatedGame,
    joinGame,
  };
}

export default useGameLobby;
