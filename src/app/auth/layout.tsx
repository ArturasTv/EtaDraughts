import Logo from '@/components/ui/Logo/Logo';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return (
    <main className='flex h-full'>
      <aside className='hidden bg-[url("https://bogatyr.club/uploads/posts/2023-03/1678186045_bogatyr-club-p-krasivie-shashki-foni-krasivo-57.jpg")] bg-cover bg-center lg:block lg:w-1/2'>
        <div className='flex h-full w-full flex-col justify-between p-10 backdrop-blur-[2px] backdrop-brightness-50'>
          <Logo />
          <blockquote className='space-y-2 text-white'>
            <p className='text-base'>
              “Eternity is a child playing, playing checkers; the kingdom
              belongs to a child”
            </p>
            <footer className='text-sm'>Heraclitus</footer>
          </blockquote>
        </div>
      </aside>
      <aside className='w-full p-4 lg:w-1/2 lg:p-10'>{children}</aside>
    </main>
  );
}

export default Layout;
