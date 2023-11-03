/* eslint-disable function-paren-newline */

'use client';

import React from 'react';
import { generateMock } from '@anatine/zod-mock';
import { faker } from '@faker-js/faker';
import DataGrid from '../../templates/DataGrid';
import { Game, GameSchema } from './schema';
import { columns } from './columns';
import NoResultsDisplay from './partials/NoResultsDisplay/NoResultsDisplay';

const data: Game[] = Array.from({ length: 10 }).map(() =>
  generateMock(GameSchema, {
    stringMap: {
      status: () => faker.helpers.arrayElement(['inProgress', 'waiting']),
    },
  }),
);

function GamesDataGrid() {
  return (
    <DataGrid data={data} columns={columns} noResults={<NoResultsDisplay />} />
  );
}

export default GamesDataGrid;
