import { useState, useEffect } from 'react';
import { ToastAction } from '@/components/ui/Toaster/Toast/Toast';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import { MESSAGE_TYPES } from '@/constants/messages';
import useGameLobbyStore, {
  Clock,
  State,
} from '@/stores/game/useGameLobbyStore';
import { Room } from 'colyseus.js';
import useGetUserDetails from '@/clientApi/queries/userDetails';
import { useRouter } from 'next/navigation';
import AppRoutes from '@/constants/appRoutes';

type PlayerState = {
  id: string;
  name: string;
  timeLeft: number;
  isActive: boolean;
};

type CommonMessage = {
  title: string;
  description: string;
};

function useGame() {
  const router = useRouter();

  const [activeGame, setActiveGame] = useState<Room<State> | null>(null);
  const [activeGameState, setActiveGameState] = useState<State | null>();

  const { data: userDetailsData } = useGetUserDetails();
  const { toast } = useToast();

  const createdGame = useGameLobbyStore((state) => state.createdGame);
  const joinedGame = useGameLobbyStore((state) => state.joinedGame);

  createdGame?.onMessage(MESSAGE_TYPES.GAME_START, () => {
    router.push(AppRoutes.LOBBY.PLAY.INDEX);
  });

  activeGame?.onMessage<CommonMessage>(MESSAGE_TYPES.COMMON, (message) => {
    toast({
      title: message.title,
      description: message.description,
    });
  });

  activeGame?.onMessage(MESSAGE_TYPES.OFFER_DRAW, (message) => {
    const handleAcceptDraw = () => {
      activeGame?.send(MESSAGE_TYPES.ACCEPT_DRAW);
    };

    const handleDeclineDraw = () => {
      activeGame?.send(MESSAGE_TYPES.DECLINE_DRAW);
    };

    toast({
      title: 'Draw offered',
      description: `${message.player} has offered a draw.`,
      onOpenChange: (isOpen) => {
        if (!isOpen) handleDeclineDraw();
      },
      action: (
        <ToastAction onClick={handleAcceptDraw} altText='Accept'>
          Accept
        </ToastAction>
      ),
      onClose: () => handleDeclineDraw(),
      onSwipeEnd: () => handleDeclineDraw(),
    });
  });

  activeGame?.onStateChange((state) => {
    setActiveGameState({ ...state });
  });

  const isMyTurn = activeGameState?.turn === userDetailsData?.user_id;

  function calculateTimeLeft(clock: Clock | undefined): number {
    if (clock?.moveStart) {
      return (
        Math.round(
          (clock.timeLeft || 0) - (Date.now() - clock.moveStart) / 1000,
        ) || 0
      );
    }
    return clock?.timeLeft || 0;
  }

  const playerOneState: PlayerState = {
    id: activeGameState?.playerOne.id || '',
    name: activeGameState?.playerOne.name || '',
    timeLeft: calculateTimeLeft(activeGameState?.playerOne.clock),
    isActive: activeGameState?.turn === activeGameState?.playerOne.id,
  };

  const playerTwoState: PlayerState = {
    id: activeGameState?.playerTwo.id || '',
    name: activeGameState?.playerTwo.name || '',
    timeLeft: calculateTimeLeft(activeGameState?.playerTwo.clock),
    isActive: activeGameState?.turn === activeGameState?.playerTwo.id,
  };

  const myPlayerState =
    playerOneState.id === userDetailsData?.user_id
      ? playerOneState
      : playerTwoState;

  const opponentPlayerState =
    playerOneState.id === userDetailsData?.user_id
      ? playerTwoState
      : playerOneState;

  useEffect(() => {
    if (activeGame) return;

    if (createdGame?.state.status === 'inProgress') {
      setActiveGame(createdGame);
      setActiveGameState(createdGame.state);
    }
    if (joinedGame?.state.status === 'inProgress') {
      setActiveGame(joinedGame);
      setActiveGameState(joinedGame.state);
    }
  }, [createdGame, joinedGame, activeGame]);

  return {
    activeGame,
    createdGame,
    joinedGame,
    isMyTurn,
    myPlayerState,
    opponentPlayerState,
  };
}

export default useGame;
