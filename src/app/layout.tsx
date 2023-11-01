import { PropsWithChildren } from 'react';
import './globals.css';

import RootLayout from '@/layouts/RootLayout/RootLayout';
import { Metadata } from 'next';

// TODO: This is temporary until we have a better solution
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Eta Draughts',
  description: 'Play draughts online with friends',
};

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <RootLayout>{children}</RootLayout>;
}

export default Layout;
