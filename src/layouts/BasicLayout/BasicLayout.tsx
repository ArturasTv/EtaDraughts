import { PropsWithChildren } from 'react';
import Header from '@/components/containers/Page/Header/Header';

interface Props extends PropsWithChildren {}

function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='grow '>{children}</main>
    </>
  );
}

export default BasicLayout;
