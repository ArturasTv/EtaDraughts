/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Typography from '@/components/ui/Typography/Typography';
import Link from 'next/link';
import AppRoutes from '@/constants/appRoutes';
import SignInForm from './form/form';

function SignIn() {
  return (
    <div className='w-96 space-y-6'>
      <section className='flex flex-col space-y-2 text-center'>
        <Typography type='h1'>
          Sign in to{' '}
          <span className='text-xl font-extrabold uppercase'>@ draughts</span>
        </Typography>
        <Typography type='p'>
          Enter your username and password below to sign in
        </Typography>
      </section>
      <SignInForm />
      <Typography type='p' className='px-12 text-center'>
        <Link
          className='hover:text-primary'
          href={AppRoutes.AUTH.SIGN_IN.PASSWORD_RECOVERY.INDEX}
        >
          Forgot your password?
        </Link>
      </Typography>
    </div>
  );
}

export default SignIn;
