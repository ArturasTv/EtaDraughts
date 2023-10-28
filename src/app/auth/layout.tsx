import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default Layout;
