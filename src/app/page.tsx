import Page from '@/components/containers/Page/Page';
import LogoutButton from './(partials)/LogoutButton';
import MobileNavigationButton from './(partials)/MobileNavigationButton';

export default function Home() {
  return (
    <Page permission='authenticated'>
      <main className='flex h-screen items-center justify-center'>
        <MobileNavigationButton />
        <LogoutButton />
      </main>
    </Page>
  );
}
