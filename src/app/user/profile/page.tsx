import Page from '@/components/containers/Page/Page';

export default function UserProfile() {
  return (
    <Page permission='authenticated'>
      <main className='flex h-screen items-center justify-center space-x-4'>
        <p>User Profile</p>
      </main>
    </Page>
  );
}