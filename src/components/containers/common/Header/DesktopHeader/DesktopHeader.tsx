import React from 'react';
import Logo from '@/components/ui/Logo/Logo';
import { cn } from '@/lib/utils';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';

interface Props {
  className?: string;
}

function DesktopHeader({ className }: Props) {
  return (
    <div className={cn('flex items-center justify-between p-4', className)}>
      <Logo variant='dark' />
      <DesktopNavigation />
      <div />
    </div>
  );
}

export default DesktopHeader;
