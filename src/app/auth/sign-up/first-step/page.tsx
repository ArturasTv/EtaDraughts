import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import AppRoutes from '@/constants/appRoutes';
import Page from '@/components/containers/Page/Page';
import SignUpFirstStep from './(form)/SignUpFirstStep';

function SignUpFirstStepPage() {
  return (
    <Page permission='unauthenticated'>
      <div className='flex h-full w-full flex-col'>
        <Button className='ml-auto' variant='ghost' asChild>
          <Link href={AppRoutes.AUTH.SIGN_IN.INDEX}>Login</Link>
        </Button>
        <div className='flex h-full items-center justify-center'>
          <SignUpFirstStep />
        </div>
      </div>
    </Page>
  );
}

export default SignUpFirstStepPage;
