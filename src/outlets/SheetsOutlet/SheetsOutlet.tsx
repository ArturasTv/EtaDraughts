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
const UserProfileNavigationSheet = lazy(
  () =>
    import(
      '@/components/containers/Sheets/UserProfileNavigationSheet/UserProfileNavigationSheet'
    ),
);

function SheetsOutlet() {
  const { mobileNavigation, userProfileNavigation } = useSheetStore();

  return (
    <>
      <DelayedRender isOpen={mobileNavigation.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <MobileNavigationSheet />
        </Suspense>
      </DelayedRender>
      <DelayedRender isOpen={userProfileNavigation.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <UserProfileNavigationSheet />
        </Suspense>
      </DelayedRender>
    </>
  );
}

export default SheetsOutlet;
