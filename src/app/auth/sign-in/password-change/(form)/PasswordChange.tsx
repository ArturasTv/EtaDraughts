import Typography from '@/components/ui/Typography/Typography';
import React from 'react';
import PasswordChangeForm from './form/form';

function PasswordChange() {
  return (
    <div className='w-96 space-y-6'>
      <section className='flex flex-col space-y-2 text-center'>
        <Typography type='h1'>Change password</Typography>
        <Typography type='p'>
          Enter your new password below to change it
        </Typography>
      </section>
      <PasswordChangeForm />
    </div>
  );
}

export default PasswordChange;
