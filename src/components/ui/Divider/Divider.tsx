import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

function Divider({ className }: Props) {
  return <hr className={cn('h-[1px] w-full bg-gray-500', className)} />;
}

export default Divider;
