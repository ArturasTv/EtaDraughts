'use client';

/* eslint-disable indent */
import React, { ReactNode, useState } from 'react';

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/Table/Table';
import { cn } from '@/lib/utils';
import DataGridPagination from './Partials/DataGridPagination/DataGridPagination';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  noResults?: ReactNode;
}

const PAGE_SIZE = 7;

function DataGrid<TData, TValue>({
  columns,
  data,
  noResults = 'No results.',
}: Props<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: PAGE_SIZE,
      },
      columnPinning: { right: ['actions'] },
    },
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className={cn({
                  'text-right': header.id === 'actions',
                })}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  className={cn('h-[64px]', {
                    // TODO: Fix this in the future
                    'text-right': cell.id.split('_').at(-1) === 'actions',
                  })}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className='h-56 text-center align-middle sm:h-96'
            >
              {noResults}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter
        className={cn({
          hidden: data.length < PAGE_SIZE,
        })}
      >
        <TableRow className='border-none'>
          <TableCell className='p-2 pr-0' colSpan={columns.length}>
            <DataGridPagination className='float-right' table={table} />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default DataGrid;
