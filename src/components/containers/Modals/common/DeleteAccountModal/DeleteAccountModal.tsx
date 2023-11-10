'use client';

import React from 'react';
import useModalStore from '@/stores/ui/useModalStore';
import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import useDeleteAccount from '@/clientApi/mutations/user/deleteAccount';
import { getLocalStorageItem } from '@/lib/localStorage';
import Modal from '../../templates/Modal/Modal';

function DeleteAccountModal() {
  const { deleteAccount } = useModalStore();

  const userId = getLocalStorageItem<string>(LOCAL_STORAGE_KEYS.USER_ID) || '';

  const { mutate, isPending: isLoading } = useDeleteAccount();

  const handleSubmit = () => {
    if (userId) {
      mutate({ userId });
    }
  };

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
        onClick: handleSubmit,
        variant: 'destructive',
        label: 'Delete',
        icon: 'trash',
        isLoading,
      }}
      isOpen={deleteAccount.isOpen}
      size='sm'
    />
  );
}

export default DeleteAccountModal;
