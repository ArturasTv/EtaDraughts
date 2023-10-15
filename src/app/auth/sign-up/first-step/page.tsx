import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import AppRoutes from '@/constants/appRoutes';
import SignUpFirstStep from './(form)/SignUpFirstStep';

function Page() {
  return (
    <div className='flex h-full w-full flex-col'>
      <Button className='ml-auto' variant='ghost' asChild>
        <Link href={AppRoutes.AUTH.SIGN_IN.INDEX}>Login</Link>
      </Button>
      <div className='flex h-full items-center justify-center'>
        <SignUpFirstStep />
      </div>
    </div>
  );
}

export default Page;
