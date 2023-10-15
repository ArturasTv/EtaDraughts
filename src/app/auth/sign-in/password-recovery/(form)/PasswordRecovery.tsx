import Typography from '@/components/ui/Typography/Typography';
import React from 'react';
import PasswordRecoveryForm from './form/form';

function PasswordRecovery() {
  return (
    <div className='w-96 space-y-6'>
      <section className='flex flex-col space-y-2 text-center'>
        <Typography type='h1'>Recovery password</Typography>
        <Typography type='p'>
          Enter your email below to recovery your password
        </Typography>
      </section>
      <PasswordRecoveryForm />
    </div>
  );
}

export default PasswordRecovery;
