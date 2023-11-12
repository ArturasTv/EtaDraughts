import React from 'react';
import { cn } from '@/lib/utils';
import DrawAction from './DrawAction/DrawAction';
import ResignAction from './ResignAction/ResignAction';

interface Props {
  className?: string;
}

function Actions({ className }: Props) {
  return (
    <section className={cn('flex w-full space-x-2', className)}>
      <DrawAction />
      <ResignAction />
    </section>
  );
}

export default Actions;
