import { Room } from 'colyseus.js';
import { create } from 'zustand';

export type Status = 'waiting' | 'inProgress' | 'finished';

export interface Clock {
  id: string;
  timeLeft: number | null;
  moveStart: number | null;
  moveEnd: number | null;
}

export interface Player {
  id: string;
  name: string;
  rating: number;
  clock: Clock;
}

export interface State {
  playerOne: Player;
  playerTwo: Player;
  status: Status;
  turn: string;
  timeControl: number;
}

export type MetaData = {
  playerName: string;
  rating: number;
  timeControl: number;
  status: string;
};

type Games = {
  createdGame: Room<State> | null;
  setCreatedGame: (game: Room<State> | null) => void;
  joinedGame: Room<State> | null;
  setJoinedGame: (game: Room<State> | null) => void;
};

const useGameLobbyStore = create<Games>()((set) => ({
  createdGame: null,
  setCreatedGame: (game) => {
    set(() => ({
      createdGame: game,
      activeGame: game,
    }));
  },
  joinedGame: null,
  setJoinedGame: (game) => {
    set(() => ({
      joinedGame: game,
      activeGame: game,
    }));
  },
}));

export default useGameLobbyStore;
