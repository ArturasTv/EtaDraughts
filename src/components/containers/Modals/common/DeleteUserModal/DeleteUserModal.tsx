'use client';

import React from 'react';
import useModalStore from '@/stores/useModalStore';
import Modal from '../../templates/Modal/Modal';

function DeleteUserModal() {
  const { deleteUser } = useModalStore();

  return (
    <Modal
      handleOpenChange={deleteUser.handleOpenChange}
      details={{
        title: 'Delete User',
        description: 'Are you sure you want to delete this user?',
      }}
      cancelAction={{
        onClick: () => deleteUser.close(),
      }}
      submitAction={{
        onClick: () => deleteUser.close(),
        variant: 'destructive',
        label: 'Delete',
        icon: 'trash',
      }}
      isOpen={deleteUser.isOpen}
      size='sm'
    />
  );
}

export default DeleteUserModal;
