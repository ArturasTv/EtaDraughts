import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import Page from '@/components/containers/Page/Page';
import AppRoutes from '@/constants/appRoutes';
import SignUpSecondStep from './(form)/SignUpSecondStep';

function SignUpSecondStepPage() {
  return (
    <Page permission='unauthenticated'>
      <div className='flex h-full w-full flex-col'>
        <Button className='ml-auto' variant='ghost' asChild>
          <Link href={AppRoutes.AUTH.SIGN_IN.INDEX}>Back</Link>
        </Button>
        <div className='flex h-full items-center justify-center'>
          <SignUpSecondStep />
        </div>
      </div>
    </Page>
  );
}

export default SignUpSecondStepPage;
