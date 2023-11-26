import Page from '@/components/containers/Page/Page';
import LobbyDataGrid from '@/components/containers/DataGrid/common/LobbyDataGrid/LobbyDataGrid';

export default function Lobby() {
  return (
    <Page permission='authenticated'>
      <main className='space-y-4'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Lobby</h2>
          <p className='text-muted-foreground'>
            Join available games or create new one.
          </p>
        </div>
        <LobbyDataGrid />
      </main>
    </Page>
  );
}
