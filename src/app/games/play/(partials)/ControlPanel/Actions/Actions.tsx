import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import React from 'react';

function Actions() {
  return (
    <section className='flex w-full space-x-2'>
      <Button size='sm' variant='outline' className='w-full'>
        <Icon name='handshake' className='mr-2 h-4 w-4' />
        Draw
      </Button>
      <Button variant='secondary' size='sm' className='w-full'>
        <Icon name='flag' className='mr-2 h-4 w-4' />
        Resign
      </Button>
    </section>
  );
}

export default Actions;
