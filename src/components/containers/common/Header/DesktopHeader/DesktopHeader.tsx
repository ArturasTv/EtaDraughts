'use client';

import React from 'react';
import Logo from '@/components/ui/Logo/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import Typography from '@/components/ui/Typography/Typography';
import useGetUserDetails from '@/clientApi/queries/userDetails';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import UserProfilePopover from '../../UserProfilePopover/UserProfilePopover';

interface Props {
  className?: string;
}

function DesktopHeader({ className }: Props) {
  const { data } = useGetUserDetails();

  const username = data?.name || '';

  return (
    <header
      className={cn('flex items-center justify-between p-4 shadow', className)}
    >
      <Logo variant='dark' />
      <DesktopNavigation />
      <section className='flex items-center space-x-4 rounded-l-full rounded-r-full bg-muted pl-4 shadow'>
        <Typography type='span' className='font-medium'>
          {username}
        </Typography>
        <UserProfilePopover
          trigger={
            <Button variant='outline' size='icon' className='rounded-full'>
              <Icon name='user-circle' size='lg' />
            </Button>
          }
        />
      </section>
    </header>
  );
}

export default DesktopHeader;
