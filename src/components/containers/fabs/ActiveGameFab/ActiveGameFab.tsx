'use client';

import React from 'react';
import Fab from '@/components/ui/FabGroup/Fab/Fab';
import useGame from '@/hooks/game/useGame';

function ActiveGameFab() {
  const { activeGame } = useGame();

  if (!activeGame) return null;

  return <Fab icon='queen' variant='outline' />;
}

export default ActiveGameFab;
