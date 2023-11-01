import Page from '@/components/containers/Page/Page';

export default function UserSettings() {
  return (
    <Page permission='authenticated'>
      <main className='flex h-screen items-center justify-center space-x-4'>
        <p>User Settings</p>
      </main>
    </Page>
  );
}
