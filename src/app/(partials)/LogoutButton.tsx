'use client';

import useSignOut from '@/clientApi/mutations/auth/signOut';
import { Button } from '@/components/ui/Button/Button';

import React from 'react';

function LogoutButton() {
  const { mutate, isPending: isLoading } = useSignOut();

  return (
    <Button
      isLoading={isLoading}
      variant='destructive'
      onClick={() => mutate()}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
