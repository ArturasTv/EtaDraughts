import React from 'react';
import useGame from '@/hooks/game/useGame';
import Player from './Player/Player';
import Actions from './Actions/Actions';

function ControlPanel() {
  const { myPlayerState, opponentPlayerState } = useGame();

  return (
    <aside className='flex w-56 flex-col justify-between px-4'>
      <Player
        name={opponentPlayerState.name}
        timeLeft={opponentPlayerState.timeLeft}
        isActive={opponentPlayerState.isActive}
      />
      <Actions />
      <Player
        name={myPlayerState.name}
        timeLeft={myPlayerState.timeLeft}
        isActive={myPlayerState.isActive}
      />
    </aside>
  );
}

export default ControlPanel;
