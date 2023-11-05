import { Room, RoomAvailable } from 'colyseus.js';
import { create } from 'zustand';
import useColyseusStore from './useColyseusStore';

type CreateOptions = {
  playerId: string;
  timeControl: number;
};

export type MetaData = {
  playerName: string;
  rating: number;
  timeControl: number;
  status: string;
};

type Games = {
  games: RoomAvailable<MetaData>[];
  getAvailableGames: () => void;
  createdGame: Room<unknown> | null;
  createGame: (options: CreateOptions) => void;
  leaveCreatedGame: () => void;
  joinedGame: Room<unknown> | null;
  joinGame: (gameId: string) => void;
};

const ROOM_NAME = 'game';

const useGameLobbyStore = create<Games>()((set, get) => {
  const { client } = useColyseusStore.getState();

  return {
    games: [],
    getAvailableGames: async () => {
      const result = await client.getAvailableRooms<MetaData>(ROOM_NAME);

      set(() => ({
        games: result,
      }));
    },
    createdGame: null,
    createGame: async (options) => {
      const game = await client.create(ROOM_NAME, options);
      const games = await client.getAvailableRooms<MetaData>(ROOM_NAME);

      set(() => ({
        createdGame: game,
        games,
      }));
    },
    leaveCreatedGame: async () => {
      const { createdGame } = get();

      createdGame?.leave();

      const games = await client.getAvailableRooms<MetaData>(ROOM_NAME);

      set(() => ({
        createdGame: null,
        games,
      }));
    },
    joinedGame: null,
    joinGame: async (gameId: string) => {
      const game = await client.joinById(gameId);
      const { createdGame } = get();

      createdGame?.leave();
      const games = await client.getAvailableRooms<MetaData>(ROOM_NAME);

      set(() => ({
        joinedGame: game,
        createdGame: null,
        games,
      }));
    },
  };
});

export default useGameLobbyStore;
