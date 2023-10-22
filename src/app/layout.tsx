import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Toaster } from '@/components/ui/Toaster/Toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props extends PropsWithChildren {}

function RootLayout({ children }: Props) {
  return (
    <html className='h-full' lang='en'>
      <body className={cn(inter.className, 'h-full')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
