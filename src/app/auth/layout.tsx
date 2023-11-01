import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Authentication | Eta Draughts',
};

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default Layout;
