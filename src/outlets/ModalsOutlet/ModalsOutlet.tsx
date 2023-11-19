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
const ResignGameModal = lazy(
  () =>
    import(
      '@/components/containers/Modals/common/ResignGameModal/ResignGameModal'
    ),
);

function ModalsOutlet() {
  const { deleteAccount, createGame, resignGame } = useModalStore();

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
      <DelayedRender isOpen={resignGame.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <ResignGameModal />
        </Suspense>
      </DelayedRender>
    </>
  );
}

export default ModalsOutlet;
