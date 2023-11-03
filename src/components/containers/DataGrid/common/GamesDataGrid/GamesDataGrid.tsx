/* eslint-disable function-paren-newline */

'use client';

import React from 'react';
import { generateMock } from '@anatine/zod-mock';
import DataGrid from '../../templates/DataGrid';
import { Game, GameSchema } from './schema';
import { columns } from './columns';
import NoResultsDisplay from './partials/NoResultsDisplay/NoResultsDisplay';

const data: Game[] = Array.from({ length: 10 }).map(() =>
  generateMock(GameSchema),
);

function GamesDataGrid() {
  return (
    <DataGrid data={data} columns={columns} noResults={<NoResultsDisplay />} />
  );
}

export default GamesDataGrid;
