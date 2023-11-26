/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-useless-fragment */
import { ColumnDef } from '@tanstack/react-table';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import { Badge } from '@/components/ui/Badge/Badge';
import { useMemo } from 'react';
import { Game, GameSchema } from './schema';
import DataGridColumnHeader from '../../templates/Partials/DataGridColumnHeader/DataGridColumnHeader';
import Actions, { HeaderAction } from './partials/Actions/Actions';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const columns: ColumnDef<Game>[] = useMemo(
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
