import useGameLobbyStore, { MetaData } from '@/stores/game/useGameLobbyStore';
import { RoomAvailable } from 'colyseus.js';
import useGetAvailableGames from '@/clientApi/queries/game/availableGames';

function formatGames(games?: RoomAvailable<MetaData>[]) {
  return (
    games?.map((game) => ({
      id: game.roomId,
      user: game.metadata?.playerName || 'Unknown',
      rating: game.metadata?.rating || 0,
      timeControl: game.metadata?.timeControl || 0,
      status: game.metadata?.status || 'Unknown',
    })) || []
  );
}

function useGameLobbyNew() {
  const createdGame = useGameLobbyStore((state) => state.createdGame);
  const joinedGame = useGameLobbyStore((state) => state.joinedGame);

  // eslint-disable-next-line no-console
  console.log('createdGame', createdGame);
  // eslint-disable-next-line no-console
  console.log('joinedGame', joinedGame);

  const { data: unformattedGames } = useGetAvailableGames();

  const games = formatGames(unformattedGames);

  return {
    createdGame,
    hasCreatedGame: !!createdGame,
    hadJoinedGame: !!joinedGame,
    games,
  };
}

export default useGameLobbyNew;
