import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../../Button/Button';
import Icon, { IconNames } from '../../Icon/Icon';

interface Props {
  icon: IconNames;
  variant: VariantProps<typeof buttonVariants>['variant'];
  className?: string;
}

function Fab({ variant, icon, className }: Props) {
  return (
    <Button
      size='icon'
      className={cn('h-auto w-auto rounded-full p-3', className)}
      variant={variant}
    >
      <Icon size='lg' name={icon} />
    </Button>
  );
}

export default Fab;
