/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable function-paren-newline */

'use client';

import React, { useMemo } from 'react';
import { Badge } from '@/components/ui/Badge/Badge';
import { ColumnDef } from '@tanstack/react-table';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import useGetPlayedGames from '@/clientApi/queries/playedGames';
import DataGrid from '../../templates/DataGrid';
import NoResultsDisplay from './partials/NoResultsDisplay/NoResultsDisplay';
import DataGridColumnHeader from '../../templates/Partials/DataGridColumnHeader/DataGridColumnHeader';
import Actions from './partials/Actions/Actions';
import { PlayedGame, PlayedGameSchema } from './schema';

function GamesDataGrid() {
  const { data, isPending } = useGetPlayedGames();

  const columns: ColumnDef<PlayedGame>[] = useMemo(
    () => [
      {
        accessorKey: 'opponent',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='Opponent' />
        ),
        cell: ({ row }) => <>{row.getValue('opponent')}</>,
      },
      {
        accessorKey: 'rating',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='Rating' />
        ),
        cell: ({ row }) => <>{row.getValue('rating')}</>,
      },
      {
        accessorKey: 'timeControl',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='Time control' />
        ),
        cell: ({ row }) => {
          const formattedTime = formatSecondsToMinutesAndSeconds(
            row.getValue('timeControl'),
          );

          return <>{formattedTime}</>;
        },
      },
      {
        accessorKey: 'result',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='Result' />
        ),
        cell: ({ row }) => {
          const playedGame = PlayedGameSchema.parse(row.original);

          const { result } = playedGame;

          if (result === 'draw') {
            return (
              <Badge className='bg-yellow-500 hover:bg-yellow-600'>Draw</Badge>
            );
          }

          if (result === 'win') {
            return (
              <Badge className='bg-green-500 hover:bg-green-600'>Win</Badge>
            );
          }

          if (result === 'loss') {
            return <Badge className='bg-red-500 hover:bg-red-600'>Loss</Badge>;
          }

          return null;
        },
      },
      {
        id: 'actions',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='View' />
        ),
        cell: ({ row }) => <Actions row={row} />,
      },
    ],
    [],
  );

  return (
    <DataGrid
      data={data || []}
      isLoading={isPending}
      columns={columns}
      noResults={<NoResultsDisplay />}
    />
  );
}

export default GamesDataGrid;
