import { Row } from '@tanstack/react-table';
import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import { PlayedGameSchema } from '../../schema';

interface Props<TData> {
  row: Row<TData>;
}

function Actions<TData>({ row }: Props<TData>) {
  const game = PlayedGameSchema.parse(row.original);

  return (
    <Button
      variant='secondary'
      size='sm'
      // eslint-disable-next-line no-console
      onClick={() => console.log(game.id)}
      className='-mr-3 h-8'
    >
      <span className='hidden sm:block'>View</span>
      <Icon name='eye' className='h-4 w-4 sm:ml-2' />
    </Button>
  );
}

export default Actions;
