import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Play | Eta Draughts',
};

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return children;
}

export default Layout;
