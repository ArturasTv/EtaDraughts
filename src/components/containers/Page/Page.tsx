/* eslint-disable react/jsx-no-useless-fragment */

import React, { PropsWithChildren } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AppRoutes from '@/constants/appRoutes';

export const dynamic = 'force-dynamic';

interface Props extends PropsWithChildren {
  permission?: 'public' | 'authenticated' | 'unauthenticated';
}

async function Page({ children, permission = 'public' }: Props) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();

  switch (permission) {
    case 'public':
      break;

    case 'authenticated':
      if (!data?.user) {
        redirect(AppRoutes.AUTH.SIGN_IN.INDEX);
      }
      break;

    case 'unauthenticated':
      if (data?.user) {
        redirect(AppRoutes.ROOT.INDEX);
      }
      break;

    default:
      break;
  }

  return <>{children}</>;
}

export default Page;
