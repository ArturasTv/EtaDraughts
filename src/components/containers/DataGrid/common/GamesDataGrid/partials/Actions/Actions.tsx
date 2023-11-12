'use client';

import React from 'react';
import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import useGameLobbyNew from '@/hooks/game/useGameLobby';
import useModalStore from '@/stores/ui/useModalStore';
import useDeleteGame from '@/clientApi/mutations/game/deleteGame';
import useGetUserDetails from '@/clientApi/queries/userDetails';
import useJoinGame from '@/clientApi/mutations/game/joinGame';
import { GameSchema } from '../../schema';

interface Props<TData> {
  row: Row<TData>;
}

function Actions<TData>({ row }: Props<TData>) {
  const game = GameSchema.parse(row.original);

  const { data: userDetails } = useGetUserDetails();

  const deleteGameMutation = useDeleteGame();
  const joinGameMutation = useJoinGame();

  const { hasCreatedGame, createdGame } = useGameLobbyNew();

  if (game.status === 'inProgress') return null;

  if (hasCreatedGame && game.user === userDetails?.name) {
    return (
      <Button
        variant='destructive'
        size='sm'
        onClick={() => deleteGameMutation.mutate({ game: createdGame })}
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
      onClick={() => joinGameMutation.mutate(game.id)}
      className='-mr-3 h-8'
    >
      <span className='hidden sm:block'>Join</span>
      <Icon name='arrow-right' className='h-4 w-4 sm:ml-2' />
    </Button>
  );
}

export function HeaderAction() {
  const { createGame } = useModalStore();

  const { games } = useGameLobbyNew();
  const { hasCreatedGame } = useGameLobbyNew();

  const shouldRenderCreateButton = !hasCreatedGame && games.length > 0;

  if (!shouldRenderCreateButton) return null;

  return (
    <Button
      variant='default'
      size='sm'
      onClick={() => createGame.open()}
      className='-mr-3 h-8'
    >
      <Icon name='circle-plus' className='h-4 w-4 sm:mr-2' />
      <span className='hidden sm:block'>Create</span>
    </Button>
  );
}

export default Actions;
