/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable function-paren-newline */

'use client';

import React, { useMemo } from 'react';
import useGameLobby from '@/hooks/game/useGameLobby';
import { Badge } from '@/components/ui/Badge/Badge';
import { ColumnDef } from '@tanstack/react-table';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import DataGrid from '../../templates/DataGrid';
import NoResultsDisplay from './partials/NoResultsDisplay/NoResultsDisplay';
import DataGridColumnHeader from '../../templates/Partials/DataGridColumnHeader/DataGridColumnHeader';
import Actions, { HeaderAction } from './partials/Actions/Actions';
import { Game, GameSchema } from './schema';

function GamesDataGrid() {
  const { games } = useGameLobby();

  const columns: ColumnDef<Game>[] = useMemo(
    () => [
      {
        accessorKey: 'user',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='User' />
        ),
        cell: ({ row }) => <>{row.getValue('user')}</>,
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
        accessorKey: 'status',
        header: ({ column }) => (
          <DataGridColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
          const game = GameSchema.parse(row.original);

          const { status } = game;

          if (status === 'inProgress') {
            return <Badge variant='secondary'>In Progress</Badge>;
          }

          if (status === 'waiting') {
            return <Badge variant='default'>Waiting</Badge>;
          }

          return <>{status}</>;
        },
      },

      {
        id: 'actions',
        header: () => <HeaderAction />,
        cell: ({ row }) => <Actions row={row} />,
      },
    ],
    [],
  );

  const data = games;

  return (
    <DataGrid data={data} columns={columns} noResults={<NoResultsDisplay />} />
  );
}

export default GamesDataGrid;
