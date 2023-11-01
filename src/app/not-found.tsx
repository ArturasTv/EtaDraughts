import { buttonVariants } from '@/components/ui/Button/Button';
import AppRoutes from '@/constants/appRoutes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-full items-center justify-center'>
      <section className='bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary dark:text-primary-foreground lg:text-9xl'>
              404
            </h1>
            <p className='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl'>
              Something&apos;s missing.
            </p>
            <p className='mb-4 text-base font-light text-gray-500 dark:text-gray-400 lg:text-lg'>
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.
            </p>
            <Link className={buttonVariants()} href={AppRoutes.ROOT.INDEX}>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
