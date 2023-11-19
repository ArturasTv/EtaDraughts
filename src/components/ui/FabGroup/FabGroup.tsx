import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

function FabGroup({ children }: Props) {
  return (
    <section className='absolute bottom-4 right-4 flex flex-col space-y-4'>
      {children}
    </section>
  );
}

export default FabGroup;
