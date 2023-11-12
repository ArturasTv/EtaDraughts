import Page from '@/components/containers/Page/Page';
import Board from './(partials)/Board/Board';
import ControlPanel from './(partials)/ControlPanel/ControlPanel';

export default function Play() {
  return (
    <Page permission='authenticated'>
      <div className='flex h-full w-full justify-center'>
        <div className='flex h-fit'>
          <Board />
          <ControlPanel />
        </div>
      </div>
    </Page>
  );
}
