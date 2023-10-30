import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type TypographyTypes = 'h1' | 'p' | 'span';

interface Props extends PropsWithChildren {
  type: TypographyTypes;
  className?: string;
}

function Typography({ children, className, type }: Props) {
  return (
    <>
      {type === 'span' && (
        <span className={cn('text-sm text-muted-foreground', className)}>
          {children}
        </span>
      )}
      {type === 'h1' && (
        <h1 className={cn('text-2xl font-semibold tracking-tight', className)}>
          {children}
        </h1>
      )}
      {type === 'p' && (
        <p className={cn('text-sm text-muted-foreground', className)}>
          {children}
        </p>
      )}
    </>
  );
}

export default Typography;
