import React from 'react';
import Icon from '@/components/ui/Icon/Icon';
import Typography from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';

function NoResultsDisplay() {
  return (
    <section className='flex w-full flex-col items-center justify-center space-y-4'>
      <div className='rounded-full border p-3'>
        <Icon name='queen' size='xl' stroke={1} />
      </div>
      <Typography type='p'>
        Where is no tournaments yet. Start by creating a new one.
      </Typography>
      <Button variant='default' onClick={() => null}>
        <Icon name='circle-plus' className='h-4 w-4 sm:mr-2' />
        Create
      </Button>
    </section>
  );
}

export default NoResultsDisplay;
