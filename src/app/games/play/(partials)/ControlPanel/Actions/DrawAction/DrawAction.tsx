'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import { MESSAGE_TYPES } from '@/constants/messages';
import useGetUserDetails from '@/clientApi/queries/userDetails';
import useGame from '@/hooks/game/useGame';

function DrawAction() {
  const { activeGame } = useGame();

  const { data: userDetails } = useGetUserDetails();

  const handleOfferDraw = () => {
    activeGame?.send(MESSAGE_TYPES.OFFER_DRAW, {
      userId: userDetails?.user_id,
    });
  };

  return (
    <Button
      size='sm'
      variant='outline'
      className='w-full'
      onClick={() => {
        handleOfferDraw();
      }}
    >
      <Icon name='handshake' className='h-4 w-4' />
      <span className='ml-2 hidden sm:block'>Draw</span>
    </Button>
  );
}

export default DrawAction;
