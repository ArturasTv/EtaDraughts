import { QUERIES } from '@/constants/queries';
import useColyseusStore from '@/stores/game/useColyseusStore';
import { MetaData } from '@/stores/game/useGameLobbyStore';
import { useQuery } from '@tanstack/react-query';
import { Client } from 'colyseus.js';

const ROOM_NAME = 'game';

type Payload = {
  client: Client;
};

const fetchAvailableGames = async (payload: Payload) => {
  const { client } = payload;

  const result = await client.getAvailableRooms<MetaData>(ROOM_NAME);

  return result || [];
};

function useGetAvailableGames() {
  const client = useColyseusStore((state) => state.client);

  return useQuery({
    queryKey: [QUERIES.AVAILABLE_GAMES],
    queryFn: () => fetchAvailableGames({ client }),
  });
}

export default useGetAvailableGames;
