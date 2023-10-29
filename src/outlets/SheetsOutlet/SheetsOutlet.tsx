'use client';

import React, { lazy, Suspense } from 'react';
import DelayedRender from '@/components/containers/common/DelayedRender/DelayedRender';
import useSheetStore from '@/stores/useSheetStore';
import LoaderOverlay from '@/components/ui/LoaderOverlay/LoaderOverlay';

const MobileNavigationSheet = lazy(
  () =>
    import(
      '@/components/containers/Sheets/MobileNavigationSheet/MobileNavigationSheet'
    ),
);

function SheetsOutlet() {
  const { mobileNavigation } = useSheetStore();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <DelayedRender isOpen={mobileNavigation.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <MobileNavigationSheet />
        </Suspense>
      </DelayedRender>
    </>
  );
}

export default SheetsOutlet;
