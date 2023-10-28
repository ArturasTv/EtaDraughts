'use client';

import { Button } from '@/components/ui/Button/Button';
import React from 'react';
import useSheetStore from '@/stores/useSheetStore';

function MobileNavigationButton() {
  const { mobileNavigation } = useSheetStore();

  return (
    <Button onClick={() => mobileNavigation.open()}>open navigation</Button>
  );
}

export default MobileNavigationButton;
