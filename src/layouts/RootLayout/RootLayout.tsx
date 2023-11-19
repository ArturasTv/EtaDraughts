import React, { PropsWithChildren } from 'react';
import { Toaster } from '@/components/ui/Toaster/Toaster';
import { cn } from '@/lib/utils';
import AuthProvider from '@/providers/AuthProvider/AuthProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider/ReactQueryProvider';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Roboto } from 'next/font/google';
import { cookies } from 'next/headers';
import SheetsOutlet from '@/outlets/SheetsOutlet/SheetsOutlet';
import ModalsOutlet from '@/outlets/ModalsOutlet/ModalsOutlet';
import TopLoader from '@/components/ui/TopLoader/TopLoader';
import FabsOutlet from '@/outlets/FabsOutlet/FabsOutlet';

const inter = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

interface Props extends PropsWithChildren {}

async function RootLayout({ children }: Props) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html className='h-full' lang='en'>
      <body className={cn(inter.className, 'flex h-full flex-col')}>
        <TopLoader />
        <ReactQueryProvider>
          <AuthProvider accessToken={accessToken}>
            {children}
            <Toaster />
            <SheetsOutlet />
            <ModalsOutlet />
            <FabsOutlet />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
