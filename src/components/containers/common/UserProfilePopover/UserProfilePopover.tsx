'use client';

import React, { ReactNode } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover/Popover';
import Divider from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import useSignOut from '@/clientApi/mutations/auth/signOut';
import useGetUserDetails from '@/clientApi/queries/userDetails';
import UserProfileNavigation from '../Navigation/UserProfileNavigation/UserProfileNavigation';
import UserInfo from '../UserInfo/UserInfo';

interface Props {
  trigger: ReactNode;
}

function UserProfilePopover({ trigger }: Props) {
  const { data } = useGetUserDetails();

  const user = {
    name: data?.name || '',
    email: data?.email || '',
  };

  const { mutate, isPending: isLoading } = useSignOut();

  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className='space-y-4' align='end'>
        <UserInfo user={user} />
        <Divider />
        <div className='space-y-2'>
          <UserProfileNavigation />
          <Button
            variant='ghost'
            className='w-full justify-start'
            onClick={() => mutate()}
            isLoading={isLoading}
          >
            {!isLoading && <Icon name='logout' className='mr-2' />}
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default UserProfilePopover;
