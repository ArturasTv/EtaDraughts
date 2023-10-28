import { PropsWithChildren } from 'react';
import Header from '@/components/containers/common/Header/Header';

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
