'use client';

import { Sheet, SheetContent, SheetHeader } from '@/components/ui/Sheet/Sheet';
import React from 'react';
import useSheetStore from '@/stores/useSheetStore';
import Logo from '@/components/ui/Logo/Logo';
import MobileNavigation from '../../common/Navigation/MobileNavigation/MobileNavigation';

function MobileNavigationSheet() {
  const { mobileNavigation } = useSheetStore();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      mobileNavigation.open();
    } else {
      mobileNavigation.close();
    }
  };

  return (
    <Sheet open={mobileNavigation.isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side='left'>
        <SheetHeader className='flex items-center justify-center'>
          <Logo variant='dark' size='sm' />
        </SheetHeader>
        <MobileNavigation />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigationSheet;
