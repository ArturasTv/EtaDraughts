'use client';

import React from 'react';
import Icon from '@/components/ui/Icon/Icon';
import { Button } from '@/components/ui/Button/Button';
import Logo from '@/components/ui/Logo/Logo';
import useSheetStore from '@/stores/useSheetStore';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

function MobileHeader({ className }: Props) {
  const { mobileNavigation } = useSheetStore();

  return (
    <div className={cn('flex justify-between py-4', className)}>
      <Button
        variant='ghost'
        className='-my-4 h-auto rounded-none'
        onClick={() => mobileNavigation.open()}
      >
        <Icon name='menu' size='xl' />
      </Button>
      <Logo variant='dark' />
      <div />
    </div>
  );
}

export default MobileHeader;
