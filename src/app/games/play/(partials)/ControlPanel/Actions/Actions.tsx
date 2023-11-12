import React from 'react';
import DrawAction from './DrawAction/DrawAction';
import ResignAction from './ResignAction/ResignAction';

function Actions() {
  return (
    <section className='flex w-full space-x-2'>
      <DrawAction />
      <ResignAction />
    </section>
  );
}

export default Actions;
