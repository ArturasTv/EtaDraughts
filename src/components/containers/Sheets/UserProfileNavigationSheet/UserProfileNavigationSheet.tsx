'use client';

import { Sheet, SheetContent, SheetHeader } from '@/components/ui/Sheet/Sheet';
import React from 'react';
import useSheetStore from '@/stores/useSheetStore';
import Logo from '@/components/ui/Logo/Logo';
import Divider from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import useSignOut from '@/_api/mutations/signOut';
import Icon from '@/components/ui/Icon/Icon';
import UserProfileNavigation from '../../common/Navigation/UserProfileNavigation/UserProfileNavigation';
import UserInfo from '../../common/UserInfo/UserInfo';

function UserProfileNavigationSheet() {
  const { userProfileNavigation } = useSheetStore();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      userProfileNavigation.open();
    } else {
      userProfileNavigation.close();
    }
  };

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  const { mutate, isPending: isLoading } = useSignOut();

  return (
    <Sheet open={userProfileNavigation.isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side='right'>
        <SheetHeader className='flex items-center justify-center'>
          <Logo variant='dark' size='sm' />
        </SheetHeader>
        <div className='space-y-4 pt-6'>
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
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default UserProfileNavigationSheet;
