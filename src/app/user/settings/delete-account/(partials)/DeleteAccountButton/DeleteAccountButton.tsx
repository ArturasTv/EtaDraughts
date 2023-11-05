'use client';

import { Button } from '@/components/ui/Button/Button';
import React from 'react';
import useModalStore from '@/stores/ui/useModalStore';

function DeleteAccountButton() {
  const { deleteAccount } = useModalStore();

  return (
    <Button onClick={() => deleteAccount.open()} variant='destructive'>
      Delete
    </Button>
  );
}

export default DeleteAccountButton;
