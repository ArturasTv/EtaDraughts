import Page from '@/components/containers/Page/Page';
import TournamentsDataGrid from '@/components/containers/DataGrid/common/TournamentsDataGrid/TournamentsDataGrid';

export default function Games() {
  return (
    <Page permission='authenticated'>
      <main className='space-y-4'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Tournaments</h2>
          <p className='text-muted-foreground'>
            Join available tournaments or create new one.
          </p>
        </div>
        <TournamentsDataGrid />
      </main>
    </Page>
  );
}
