'use client';

import React from 'react';
import Icon from '@/components/ui/Icon/Icon';
import Typography from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import AppRoutes from '@/constants/appRoutes';

function NoResultsDisplay() {
  return (
    <section className='flex w-full flex-col items-center justify-center space-y-4'>
      <div className='rounded-full border p-3'>
        <Icon name='queen' size='xl' stroke={1} />
      </div>
      <Typography type='p'>
        Where is no games yet. Start by creating a new one.
      </Typography>
      <Button variant='default' asChild>
        <Link href={AppRoutes.LOBBY.INDEX}>
          <Icon name='circle-plus' className='mr-2 h-4 w-4' />
          Create
        </Link>
      </Button>
    </section>
  );
}

export default NoResultsDisplay;
