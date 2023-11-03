import React, { HTMLAttributes } from 'react';
import { Column, SortDirection } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

function SortIcon({ sortType }: { sortType: false | SortDirection }) {
  switch (sortType) {
    case 'desc':
      return <Icon name='sort-descending' className='h-4 w-4 sm:ml-2' />;
    case 'asc':
      return <Icon name='sort-ascending' className='h-4 w-4 sm:ml-2' />;
    default:
      return <Icon name='arrows-sort' className='h-4 w-4 sm:ml-2' />;
  }
}

interface Props<TData, TValue> extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

function DataGridColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: Props<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => column.toggleSorting()}
      className='-ml-3 h-8'
    >
      <span className='hidden sm:block'>{title}</span>
      <SortIcon sortType={column.getIsSorted()} />
    </Button>
  );
}

export default DataGridColumnHeader;
