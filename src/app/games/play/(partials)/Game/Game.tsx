'use client';

import React, { PropsWithChildren } from 'react';
import { useScreenSize } from '@/hooks/ui/useScreenSize';
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
  return (
    <div className='flex flex-col gap-2'>
      <Player className='ml-auto w-48' name='Test1' seconds={100} />
      {children}
      <div className='flex items-center justify-between'>
        <Player className='w-48' name='Player2' seconds={100} />
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
