import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button/Button';
import useGame from '@/hooks/game/useGame';
import { MESSAGE_TYPES } from '@/constants/messages';
import DrawAction from './DrawAction/DrawAction';
import ResignAction from './ResignAction/ResignAction';

interface Props {
  className?: string;
}

function Actions({ className }: Props) {
  const { isMyTurn, activeGame } = useGame();

  // TODO: remove move button couse this is just for testing

  return (
    <section className={cn('flex w-full space-x-2', className)}>
      <DrawAction />
      <ResignAction />
      <Button
        disabled={!isMyTurn}
        variant='secondary'
        size='sm'
        className='w-full'
        onClick={() => {
          activeGame?.send(MESSAGE_TYPES.MAKE_MOVE);
        }}
      >
        <span className='ml-2 hidden sm:block'>Move</span>
      </Button>
    </section>
  );
}

export default Actions;
