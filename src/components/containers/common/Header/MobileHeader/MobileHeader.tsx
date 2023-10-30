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
  const { mobileNavigation, userProfileNavigation } = useSheetStore();

  return (
    <header className={cn('flex justify-between py-4 shadow', className)}>
      <Button
        variant='secondary'
        className='-my-4 h-auto rounded-none px-4'
        onClick={() => mobileNavigation.open()}
      >
        <Icon name='menu' size='lg' />
      </Button>
      <Logo variant='dark' size='sm' />
      <Button
        variant='secondary'
        className='-my-4 h-auto rounded-none px-4'
        onClick={() => userProfileNavigation.open()}
      >
        <Icon name='user' size='lg' />
      </Button>
    </header>
  );
}

export default MobileHeader;
