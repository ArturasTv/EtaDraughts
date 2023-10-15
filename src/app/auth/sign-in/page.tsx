import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import React from 'react';
import AppRoutes from '@/constants/appRoutes';
import SignIn from './(form)/SignIn';

function Page() {
  return (
    <div className='flex h-full w-full flex-col'>
      <Button className='ml-auto' variant='ghost' asChild>
        <Link href={AppRoutes.AUTH.SIGN_UP.FIRST_STEP.INDEX}>Sign up</Link>
      </Button>
      <div className='flex h-full items-center justify-center'>
        <SignIn />
      </div>
    </div>
  );
}

export default Page;
