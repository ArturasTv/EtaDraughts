'use client';

import React from 'react';
import useModalStore from '@/stores/useModalStore';
import Modal from '../../templates/Modal/Modal';

function DeleteAccountModal() {
  const { deleteAccount } = useModalStore();

  return (
    <Modal
      handleOpenChange={deleteAccount.handleOpenChange}
      details={{
        title: 'Delete Account',
        description: 'Are you sure you want to delete this account?',
      }}
      cancelAction={{
        onClick: () => deleteAccount.close(),
      }}
      submitAction={{
        onClick: () => deleteAccount.close(),
        variant: 'destructive',
        label: 'Delete',
        icon: 'trash',
      }}
      isOpen={deleteAccount.isOpen}
      size='sm'
    />
  );
}

export default DeleteAccountModal;
