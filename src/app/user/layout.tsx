import '../globals.css';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'User Profile | Eta Draughts',
};

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <BasicLayout>{children}</BasicLayout>;
}

export default Layout;
