'use client';

import React, { lazy, Suspense } from 'react';
import DelayedRender from '@/components/containers/common/DelayedRender/DelayedRender';
import LoaderOverlay from '@/components/ui/LoaderOverlay/LoaderOverlay';
import useModalStore from '@/stores/ui/useModalStore';

const CreateGameModal = lazy(
  () =>
    import(
      '@/components/containers/Modals/common/CreateGameModal/CreateGameModal'
    ),
);

const DeleteAccountModal = lazy(
  () =>
    import(
      '@/components/containers/Modals/common/DeleteAccountModal/DeleteAccountModal'
    ),
);

function ModalsOutlet() {
  const { deleteAccount, createGame } = useModalStore();

  return (
    <>
      <DelayedRender isOpen={deleteAccount.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <DeleteAccountModal />
        </Suspense>
      </DelayedRender>
      <DelayedRender isOpen={createGame.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <CreateGameModal />
        </Suspense>
      </DelayedRender>
    </>
  );
}

export default ModalsOutlet;
