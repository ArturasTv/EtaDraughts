'use client';

import React from 'react';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import useGameLobby from '@/hooks/game/useGameLobby';
import { GameSchema } from '../../schema';

interface Props<TData> {
  row: Row<TData>;
}

function Actions<TData>({ row }: Props<TData>) {
  const game = GameSchema.parse(row.original);

  const { hasCreatedGame, leaveCreatedGame, joinGame } = useGameLobby();

  if (game.status === 'inProgress') return null;

  const MOCK_CURRENT_USER = 'Player 1';

  if (hasCreatedGame && game.user === MOCK_CURRENT_USER) {
    return (
      <Button
        variant='destructive'
        size='sm'
        onClick={() => leaveCreatedGame()}
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
      onClick={() => joinGame(game.id)}
      className='-mr-3 h-8'
    >
      <span className='hidden sm:block'>Join</span>
      <Icon name='arrow-right' className='h-4 w-4 sm:ml-2' />
    </Button>
  );
}

export function HeaderAction() {
  const { hasCreatedGame, createGame, games } = useGameLobby();

  const payload = {
    playerId: '1',
    timeControl: 300,
  };

  const shouldRenderCreateButton = !hasCreatedGame && games.length > 0;

  if (!shouldRenderCreateButton) return null;

  return (
    <Button
      variant='default'
      size='sm'
      onClick={() => createGame(payload)}
      className='-mr-3 h-8'
    >
      <Icon name='circle-plus' className='h-4 w-4 sm:mr-2' />
      <span className='hidden sm:block'>Create</span>
    </Button>
  );
}

export default Actions;
