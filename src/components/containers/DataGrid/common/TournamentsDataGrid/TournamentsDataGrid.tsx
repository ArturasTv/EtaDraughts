/* eslint-disable function-paren-newline */

'use client';

import React from 'react';
import { generateMock } from '@anatine/zod-mock';
import { faker } from '@faker-js/faker';
import DataGrid from '../../templates/DataGrid';
import { Tournament, TournamentSchema } from './schema';
import { columns } from './columns';
import NoResultsDisplay from './partials/NoResultsDisplay/NoResultsDisplay';

const data: Tournament[] = Array.from({ length: 10 }).map(() =>
  generateMock(TournamentSchema, {
    stringMap: {
      status: () => faker.helpers.arrayElement(['inProgress', 'waiting']),
    },
  }),
);

function TournamentsDataGrid() {
  return (
    <DataGrid data={data} columns={columns} noResults={<NoResultsDisplay />} />
  );
}

export default TournamentsDataGrid;
