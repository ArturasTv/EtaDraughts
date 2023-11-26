import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Games | Eta Draughts',
};

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <BasicLayout>{children}</BasicLayout>;
}

export default Layout;
