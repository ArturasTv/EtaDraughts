import React, { PropsWithChildren } from 'react';
import { Toaster } from '@/components/ui/Toaster/Toaster';
import { cn } from '@/lib/utils';
import AuthProvider from '@/providers/AuthProvider/AuthProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider/ReactQueryProvider';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import SheetsOutlet from '@/outlets/SheetsOutlet/SheetsOutlet';
import TopLoader from '@/components/ui/TopLoader/TopLoader';

const inter = Inter({ subsets: ['latin'] });

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
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export default RootLayout;
