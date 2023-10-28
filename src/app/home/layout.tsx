import '../globals.css';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return <BasicLayout>{children}</BasicLayout>;
}

export default Layout;
