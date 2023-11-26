import React, { PropsWithChildren } from 'react';
import UserSettingsNavigation from '@/components/containers/common/Navigation/UserSettingsNavigation/UserSettingsNavigation';
import Divider from '@/components/ui/Divider/Divider';

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return (
    <div className='space-y-6'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Profile</h2>
        <p className='text-muted-foreground'>
          See your profile and manage your account settings.
        </p>
      </div>
      <Divider className='my-6' />
      <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <aside className='-mx-4 lg:w-1/5'>
          <UserSettingsNavigation />
        </aside>
        <div className='lg:w-4/5'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
