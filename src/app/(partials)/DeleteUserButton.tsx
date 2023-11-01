'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import useModalStore from '@/stores/useModalStore';

function DeleteUserButton() {
  const { deleteAccount } = useModalStore();

  return (
    <Button variant='destructive' onClick={() => deleteAccount.open()}>
      Delete user
    </Button>
  );
}

export default DeleteUserButton;