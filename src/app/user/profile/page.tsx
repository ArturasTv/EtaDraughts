import Page from '@/components/containers/Page/Page';
import ProfileDetails from './(partials)/ProfileDetails/ProfileDetails';

export default function UserProfile() {
  return (
    <Page permission='authenticated'>
      <ProfileDetails />
    </Page>
  );
}
