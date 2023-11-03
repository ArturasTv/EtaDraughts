/* eslint-disable react/jsx-no-useless-fragment */
import { ColumnDef } from '@tanstack/react-table';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import { Badge } from '@/components/ui/Badge/Badge';
import { Tournament, TournamentSchema } from './schema';
import DataGridColumnHeader from '../../templates/Partials/DataGridColumnHeader/DataGridColumnHeader';
import Actions, { HeaderAction } from './partials/Actions/Actions';

export const columns: ColumnDef<Tournament>[] = [
  {
    accessorKey: 'ownerUser',
    header: ({ column }) => (
      <DataGridColumnHeader column={column} title='Owner' />
    ),
    cell: ({ row }) => <>{row.getValue('ownerUser')}</>,
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
    accessorKey: 'currentPlayersAmount',
    header: ({ column }) => (
      <DataGridColumnHeader column={column} title='Players' />
    ),
    cell: ({ row }) => {
      const tournament = TournamentSchema.parse(row.original);

      return (
        <>
          {tournament.size}/{tournament.currentPlayersAmount}
        </>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataGridColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const tournament = TournamentSchema.parse(row.original);

      const { status } = tournament;

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
];
