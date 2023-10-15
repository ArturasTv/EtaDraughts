/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Typography from '@/components/ui/Typography/Typography';
import SignUpSecondStepForm from './form/form';

function SignUpSecondStep() {
  return (
    <div className='w-96 space-y-6'>
      <section className='flex flex-col space-y-2 text-center'>
        <section className='flex flex-col space-y-2 text-center'>
          <Typography type='h1'>
            Sign up to{' '}
            <span className='text-xl font-extrabold uppercase'>@ draughts</span>
          </Typography>
          <Typography className='text-left' type='p'>
            Enter your email, username and password below to create your new
            account
          </Typography>
        </section>
      </section>
      <SignUpSecondStepForm />
    </div>
  );
}

export default SignUpSecondStep;
