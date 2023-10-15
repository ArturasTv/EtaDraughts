import { Button } from '@/components/ui/Button/Button';
import AppRoutes from '@/constants/appRoutes';
import React from 'react';
import Link from 'next/link';
import PasswordRecovery from './(form)/PasswordRecovery';

function Page() {
  return (
    <div className='flex h-full w-full flex-col'>
      <Button className='ml-auto' variant='ghost' asChild>
        <Link href={AppRoutes.AUTH.SIGN_IN.INDEX}>Back</Link>
      </Button>
      <div className='flex h-full items-center justify-center'>
        <PasswordRecovery />
      </div>
    </div>
  );
}

export default Page;
