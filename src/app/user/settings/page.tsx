import Page from '@/components/containers/Page/Page';

export default function UserSettings() {
  return (
    <Page permission='authenticated'>
      <main>
        <p>User Settings</p>
      </main>
    </Page>
  );
}
