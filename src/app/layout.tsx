import { PropsWithChildren } from 'react';
import './globals.css';

import RootLayout from '@/layouts/RootLayout/RootLayout';

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <RootLayout>{children}</RootLayout>;
}

export default Layout;
