import Page from '@/components/containers/Page/Page';
import GamesDataGrid from '@/components/containers/DataGrid/common/GamesDataGrid/GamesDataGrid';
import StartGame from './(partials)/StartGame/StartGame';

export default function Games() {
  return (
    <Page permission='authenticated'>
      <main className='space-y-4'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Games</h2>
          <p className='text-muted-foreground'>
            Join available games or create new one.
          </p>
        </div>
        <GamesDataGrid />
        <StartGame />
      </main>
    </Page>
  );
}
