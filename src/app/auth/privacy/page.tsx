import Page from '@/components/containers/Page/Page';

export default function Privacy() {
  return (
    <Page permission='unauthenticated'>
      <main className='flex h-screen items-center justify-center space-x-4'>
        <p>privacy</p>
      </main>
    </Page>
  );
}
