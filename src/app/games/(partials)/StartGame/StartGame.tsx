'use client';

import useGame from '@/hooks/game/useGame';
import AppRoutes from '@/constants/appRoutes';
import { useRouter } from 'next/navigation';

// TODO: its temporary solution, need to be refactored

function StartGame() {
  const router = useRouter();

  const { activeGame } = useGame();

  if (activeGame) {
    router.push(AppRoutes.GAMES.PLAY.INDEX);
  }

  return null;
}

export default StartGame;
