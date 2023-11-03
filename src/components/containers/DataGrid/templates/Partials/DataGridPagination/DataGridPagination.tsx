import React from 'react';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import { cn } from '@/lib/utils';

interface Props<TData> {
  table: Table<TData>;
  className?: string;
}

function DataGridPagination<TData>({ table, className }: Props<TData>) {
  return (
    <div className={cn('flex items-center px-2', className)}>
      <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </div>
      <div className='flex items-center space-x-2'>
        <Button
          variant='outline'
          className='h-8 w-8 p-0'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <Icon name='chevron-left' className='h-4 w-4' />
        </Button>
        <Button
          variant='outline'
          className='h-8 w-8 p-0'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <Icon name='chevron-right' className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}

export default DataGridPagination;
