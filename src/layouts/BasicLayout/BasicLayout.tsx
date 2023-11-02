import { PropsWithChildren } from 'react';
import Header from '@/components/containers/common/Header/Header';

interface Props extends PropsWithChildren {}

function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='container mx-auto grow p-4 sm:p-6'>{children}</main>
    </>
  );
}

export default BasicLayout;
