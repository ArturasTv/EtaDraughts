'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import useModalStore from '@/stores/useModalStore';

function DeleteUserButton() {
  const { deleteUser } = useModalStore();

  return (
    <Button variant='destructive' onClick={() => deleteUser.open()}>
      Delete user
    </Button>
  );
}

export default DeleteUserButton;
