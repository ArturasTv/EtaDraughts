import { Button } from '@/components/ui/Button/Button';
import Page from '@/components/containers/Page/Page';
import LogoutButton from './(partials)/LogoutButton';

export default function Home() {
  return (
    <Page permission='authenticated'>
      <main className='flex h-screen items-center justify-center'>
        <Button>clean project</Button>
        <LogoutButton />
      </main>
    </Page>
  );
}
