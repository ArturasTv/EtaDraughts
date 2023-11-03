import { ColumnDef } from '@tanstack/react-table';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';
import { Game } from './schema';
import DataGridColumnHeader from '../../templates/Partials/DataGridColumnHeader/DataGridColumnHeader';
import Actions, { HeaderAction } from './partials/Actions/Actions';

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: 'user',
    header: ({ column }) => (
      <DataGridColumnHeader column={column} title='User' />
    ),
    cell: ({ row }) => <div>{row.getValue('user')}</div>,
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => (
      <DataGridColumnHeader column={column} title='Rating' />
    ),
    cell: ({ row }) => <div>{row.getValue('rating')}</div>,
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

      return <div>{formattedTime}</div>;
    },
  },
  {
    id: 'actions',
    header: () => <HeaderAction />,
    cell: ({ row }) => <Actions row={row} />,
  },
];
