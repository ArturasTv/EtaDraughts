import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import { QUERIES } from '@/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { getLocalStorageItem } from '@/lib/localstorage';
import { PlayedGame } from '@/components/containers/DataGrid/common/GamesDataGrid/schema';
import supabase, { DbResultOk } from '../common/supabase';

type Payload = {
  userId: string;
};

const getResult = (
  isOponentWhitePlayer: boolean,
  isOponentBlackPlayer: boolean,
  result: number,
) => {
  if (isOponentWhitePlayer) {
    if (result === 0) return 'win';
    if (result === 1) return 'draw';
    if (result === 2) return 'loss';
  }

  if (isOponentBlackPlayer) {
    if (result === 0) return 'loss';
    if (result === 1) return 'draw';
    if (result === 2) return 'win';
  }
  return 'draw';
};

const fetchPlayedGames = async (payload: Payload) => {
  const { userId } = payload;

  const gamesQuery = supabase.from('games').select(
    `
    game_id,
    result,
    black_player:profiles!games_black_player_id_fkey ( user_id, name, rating ),
    white_player:profiles!games_white_player_id_fkey ( user_id, name, rating ),
    time_control:time_controls!games_time_control_id_fkey ( id, initial_time )
`,
  );

  type gamesWithPlayersAndTimeControl = DbResultOk<typeof gamesQuery>;

  const { data, error } = await gamesQuery;

  if (error) throw error;

  const games = data as gamesWithPlayersAndTimeControl;

  const formattedGames: PlayedGame[] = games.map((game) => ({
    id: game.game_id.toString(),
    opponent:
      userId === game?.black_player?.user_id
        ? game?.white_player?.name || ''
        : game?.black_player?.name || '',
    rating:
      userId === game?.black_player?.user_id
        ? game?.white_player?.rating || 0
        : game?.black_player?.rating || 0,
    timeControl: game.time_control?.initial_time || 0,
    result: getResult(
      userId === game?.black_player?.user_id,
      userId === game?.white_player?.user_id,
      game?.result || 0,
    ),
  }));

  return formattedGames;
};

function useGetPlayedGames() {
  const userId = getLocalStorageItem<string>(LOCAL_STORAGE_KEYS.USER_ID) || '';

  const payload = { userId };

  return useQuery({
    queryKey: [QUERIES.PLAYED_GAMES],
    queryFn: () => fetchPlayedGames(payload),
  });
}

export default useGetPlayedGames;
