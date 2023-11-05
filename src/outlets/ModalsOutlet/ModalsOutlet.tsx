'use client';

import React, { lazy, Suspense } from 'react';
import DelayedRender from '@/components/containers/common/DelayedRender/DelayedRender';
import LoaderOverlay from '@/components/ui/LoaderOverlay/LoaderOverlay';
import useModalStore from '@/stores/ui/useModalStore';

const DeleteAccountModal = lazy(
  () =>
    import(
      '@/components/containers/Modals/common/DeleteAccountModal/DeleteAccountModal'
    ),
);

function ModalsOutlet() {
  const { deleteAccount } = useModalStore();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <DelayedRender isOpen={deleteAccount.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <DeleteAccountModal />
        </Suspense>
      </DelayedRender>
    </>
  );
}

export default ModalsOutlet;
