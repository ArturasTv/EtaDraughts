import Page from '@/components/containers/Page/Page';
import Game from './(partials)/Game/Game';

export default function Play() {
  return (
    <Page permission='authenticated'>
      <div className='flex h-full w-full justify-center'>
        <Game />
      </div>
    </Page>
  );
}
