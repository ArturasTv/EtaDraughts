import { Room } from 'colyseus.js';
import { create } from 'zustand';

export type MetaData = {
  playerName: string;
  rating: number;
  timeControl: number;
  status: string;
};

type Games = {
  createdGame: Room<unknown> | null;
  setCreatedGame: (game: Room<unknown> | null) => void;
  joinedGame: Room<unknown> | null;
  setJoinedGame: (game: Room<unknown> | null) => void;
};

const useGameLobbyStore = create<Games>()((set) => ({
  createdGame: null,
  setCreatedGame: (game) => {
    set(() => ({
      createdGame: game,
    }));
  },
  joinedGame: null,
  setJoinedGame: (game) => {
    set(() => ({
      joinedGame: game,
    }));
  },
}));

export default useGameLobbyStore;
