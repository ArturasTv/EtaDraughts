'use client';

import React from 'react';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import { GameSchema } from '../../schema';

interface Props<TData> {
  row: Row<TData>;
}

const currentUserId = '1';

function Actions<TData>({ row }: Props<TData>) {
  const game = GameSchema.parse(row.original);

  if (game.id === currentUserId) {
    return (
      <Button
        variant='destructive'
        size='sm'
        onClick={() => null}
        className='-mr-3 h-8'
      >
        <Icon name='trash' className='h-4 w-4 sm:mr-2' />
        <span className='hidden sm:block'>Delete</span>
      </Button>
    );
  }

  return (
    <Button
      variant='secondary'
      size='sm'
      onClick={() => null}
      className='-mr-3 h-8'
    >
      <span className='hidden sm:block'>Join</span>
      <Icon name='arrow-right' className='h-4 w-4 sm:ml-2' />
    </Button>
  );
}

export function HeaderAction() {
  // TODO: Implement this logic: button should be hidded if user is alreadu created a game,
  // or where is no games at all
  const shouldShowCreateNewButton = true;

  if (!shouldShowCreateNewButton) return null;

  return (
    <Button
      variant='default'
      size='sm'
      onClick={() => null}
      className='-mr-3 h-8'
    >
      <Icon name='circle-plus' className='h-4 w-4 sm:mr-2' />
      <span className='hidden sm:block'>Create</span>
    </Button>
  );
}

export default Actions;
