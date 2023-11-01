import Typography from '@/components/ui/Typography/Typography';
import React from 'react';
import DeleteAccountButton from './(partials)/DeleteAccountButton/DeleteAccountButton';

function DeleteAccount() {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold tracking-tight'>Delete Account</h2>
      <Typography type='p' className='flex flex-col space-y-2'>
        <span>
          <strong>Hey there!</strong> Before you proceed with deleting your
          account, here&apos;s some important info:
        </span>
        <span>
          ⚠️ <strong>Warning:</strong> This action is permanent, and
          there&apos;s no turning back.
        </span>
        <span>
          Once you delete your account, it&apos;s gone for good, and you
          won&apos;t be able to restore it.
        </span>
        <span>
          If you&apos;re absolutely sure about it, go ahead and take the plunge.
          If you have any doubts, maybe take a moment to think it over.
        </span>
      </Typography>
      <DeleteAccountButton />
    </div>
  );
}

export default DeleteAccount;
