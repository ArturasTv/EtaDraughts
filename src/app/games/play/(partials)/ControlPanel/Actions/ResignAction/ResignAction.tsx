'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import useModalStore from '@/stores/ui/useModalStore';

function ResignAction() {
  const resignGame = useModalStore((state) => state.resignGame);

  return (
    <Button
      variant='secondary'
      size='sm'
      className='w-full'
      onClick={() => {
        resignGame.open();
      }}
    >
      <Icon name='flag' className='h-4 w-4' />
      <span className='ml-2 hidden sm:block'>Resign</span>
    </Button>
  );
}

export default ResignAction;
