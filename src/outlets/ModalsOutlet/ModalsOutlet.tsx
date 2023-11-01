'use client';

import React, { lazy, Suspense } from 'react';
import DelayedRender from '@/components/containers/common/DelayedRender/DelayedRender';
import LoaderOverlay from '@/components/ui/LoaderOverlay/LoaderOverlay';
import useModalStore from '@/stores/useModalStore';

const DeleteUserModal = lazy(
  () =>
    import(
      '@/components/containers/Modals/common/DeleteUserModal/DeleteUserModal'
    ),
);

function ModalsOutlet() {
  const { deleteUser } = useModalStore();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <DelayedRender isOpen={deleteUser.isOpen}>
        <Suspense fallback={<LoaderOverlay />}>
          <DeleteUserModal />
        </Suspense>
      </DelayedRender>
    </>
  );
}

export default ModalsOutlet;
