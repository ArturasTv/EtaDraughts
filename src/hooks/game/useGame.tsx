import { ToastAction } from '@/components/ui/Toaster/Toast/Toast';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import { MESSAGE_TYPES } from '@/constants/messages';
import useGameLobbyStore, { State } from '@/stores/game/useGameLobbyStore';
import { Room } from 'colyseus.js';

type CommonMessage = {
  title: string;
  description: string;
};

function useGame() {
  const { toast } = useToast();

  const createdGame = useGameLobbyStore((state) => state.createdGame);
  const joinedGame = useGameLobbyStore((state) => state.joinedGame);

  let activeGame: Room<State> | null = null;

  if (createdGame?.state.status === 'inProgress') activeGame = createdGame;
  if (joinedGame?.state.status === 'inProgress') activeGame = joinedGame;

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

  return {
    activeGame,
    createdGame,
    joinedGame,
  };
}

export default useGame;
