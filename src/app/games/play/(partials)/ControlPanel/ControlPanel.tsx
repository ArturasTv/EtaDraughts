import React from 'react';
import Player from './Player/Player';
import Actions from './Actions/Actions';

function ControlPanel() {
  return (
    <aside className='flex w-56 flex-col justify-between px-4'>
      <Player name='Test1' seconds={100} />
      <Actions />
      <Player name='Player2' seconds={100} />
    </aside>
  );
}

export default ControlPanel;
