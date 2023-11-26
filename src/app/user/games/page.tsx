import GamesDataGrid from '@/components/containers/DataGrid/common/GamesDataGrid/GamesDataGrid';
import Page from '@/components/containers/Page/Page';

export default function Games() {
  return (
    <Page permission='authenticated'>
      <main className='space-y-4'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Games</h2>
          <p className='text-muted-foreground'>View your played games.</p>
        </div>
        <GamesDataGrid />
      </main>
    </Page>
  );
}
