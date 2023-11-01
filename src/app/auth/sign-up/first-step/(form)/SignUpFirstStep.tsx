/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import Strike from '@/components/ui/Strike/Strike';
import Typography from '@/components/ui/Typography/Typography';
import Link from 'next/link';
import AppRoutes from '@/constants/appRoutes';
import SignUpFirstStepForm from './form/form';

// TODO: remove spaces for text in Typography
// TODO: be consistent with button text and icon placement
function SignUpFirstStep() {
  return (
    <div className='w-96 space-y-6'>
      <section className='flex flex-col space-y-2 text-center'>
        <Typography type='h1'>Create an account</Typography>
        <Typography type='p'>
          Enter your email below to create your account
        </Typography>
      </section>
      <SignUpFirstStepForm />
      <Strike>Or continue with</Strike>
      <Button className='w-full space-x-2' variant='outline'>
        <Icon name='gmail' />
        <span>Gmail</span>
      </Button>
      <Typography type='p' className='px-12 text-center'>
        By clicking continue, you agree to our{' '}
        <Link
          className='underline underline-offset-4 hover:text-primary'
          href={AppRoutes.AUTH.TERMS.INDEX}
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          className='underline underline-offset-4 hover:text-primary'
          href={AppRoutes.AUTH.PRIVACY.INDEX}
        >
          Privacy Policy
        </Link>
        .
      </Typography>
    </div>
  );
}

export default SignUpFirstStep;
