import { Button } from '@/components/ui/Button/Button';
import AppRoutes from '@/constants/appRoutes';
import React from 'react';
import Link from 'next/link';
import Page from '@/components/containers/Page/Page';
import PasswordChange from './(form)/PasswordChange';

function PasswordChangePage() {
  return (
    <Page permission='authenticated'>
      <div className='flex h-full w-full flex-col'>
        <Button className='ml-auto' variant='ghost' asChild>
          <Link href={AppRoutes.AUTH.SIGN_IN.INDEX}>Back</Link>
        </Button>
        <div className='flex h-full items-center justify-center'>
          <PasswordChange />
        </div>
      </div>
    </Page>
  );
}

export default PasswordChangePage;
