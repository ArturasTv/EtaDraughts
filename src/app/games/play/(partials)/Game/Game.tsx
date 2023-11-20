'use client';

import React, { PropsWithChildren } from 'react';
import { useScreenSize } from '@/hooks/ui/useScreenSize';
import useGame from '@/hooks/game/useGame';
import Board from '../Board/Board';
import ControlPanel from '../ControlPanel/ControlPanel';
import Player from '../ControlPanel/Player/Player';
import Actions from '../ControlPanel/Actions/Actions';

interface Props extends PropsWithChildren {}

function DesktopLayout({ children }: Props) {
  return (
    <div className='flex h-fit'>
      {children}
      <ControlPanel />
    </div>
  );
}

function MobileLayout({ children }: Props) {
  const { myPlayerState, opponentPlayerState } = useGame();

  return (
    <div className='flex flex-col gap-2'>
      <Player
        className='ml-auto w-48'
        name={opponentPlayerState.name}
        timeLeft={opponentPlayerState.timeLeft}
        isActive={opponentPlayerState.isActive}
      />
      {children}
      <div className='flex items-center justify-between'>
        <Player
          className='w-48'
          name={myPlayerState.name}
          timeLeft={myPlayerState.timeLeft}
          isActive={myPlayerState.isActive}
        />
        <Actions className='w-fit sm:w-56' />
      </div>
    </div>
  );
}

function Game() {
  const { isTablet } = useScreenSize();

  return (
    <>
      {!isTablet && (
        <DesktopLayout>
          <Board />
        </DesktopLayout>
      )}
      {isTablet && (
        <MobileLayout>
          <Board />
        </MobileLayout>
      )}
    </>
  );
}

export default Game;
