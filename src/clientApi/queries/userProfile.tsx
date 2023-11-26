import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import { QUERIES } from '@/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { getLocalStorageItem } from '@/lib/localstorage';
import supabase from '../common/supabase';

type Payload = {
  userId: string;
};

type ResultsData = {
  result: number | null;
  black_player_id: string | null;
  white_player_id: string | null;
};

const countResults = ({
  data,
  userId,
}: {
  data: ResultsData[];
  userId: string;
}) => {
  const result = {
    wins: 0,
    losses: 0,
    draws: 0,
  };

  data.forEach((game) => {
    if (game.result === 1) {
      result.draws += 1;
    } else if (game.result === 2 && game.white_player_id === userId) {
      result.wins += 1;
    } else if (game.result === 0 && game.black_player_id === userId) {
      result.wins += 1;
    } else {
      result.losses += 1;
    }
  });

  return result;
};

const calculateWinRate = ({
  losses,
  wins,
  draws,
}: {
  losses: number;
  wins: number;
  draws: number;
}) => {
  const total = wins + losses + draws;

  if (total === 0) return 0;

  return Math.round((wins / total) * 100);
};

const fetchUserProfile = async (payload: Payload) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userId } = payload;

  const { data, error } = await supabase
    .from('games')
    .select('result, black_player_id, white_player_id', { count: 'exact' })
    .or(`black_player_id.eq.${userId},or(white_player_id.eq.${userId})`);

  if (error) throw error;

  const results = countResults({ data: data || [], userId });

  const winRate = calculateWinRate(results);

  return {
    ...results,
    winRate,
  };
};

function useGetUserProfile() {
  const userId = getLocalStorageItem<string>(LOCAL_STORAGE_KEYS.USER_ID) || '';

  const payload = { userId };

  return useQuery({
    queryKey: [QUERIES.USER_PROFILE],
    queryFn: () => fetchUserProfile(payload),
  });
}

export default useGetUserProfile;
