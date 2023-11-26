'use client';

import React from 'react';
import useGetUserProfile from '@/clientApi/queries/userProfile';
import Divider from '@/components/ui/Divider/Divider';
import UserInfo from '@/components/containers/common/UserInfo/UserInfo';
import useGetUserDetails from '@/clientApi/queries/userDetails';
import ProfileDetailsItem from './ProfileDetailsItem/ProfileDetailsItem';

function ProfileDetails() {
  const { data: userDetailsData } = useGetUserDetails();

  const { data: userProfileData } = useGetUserProfile();

  const user = {
    name: userDetailsData?.name || '',
    email: userDetailsData?.email || '',
  };

  const rating = userDetailsData?.rating || 0;

  const winRate = userProfileData?.winRate || 0;

  return (
    <div className='flex flex-col space-y-4 md:space-y-6 lg:w-96'>
      <div className='flex flex-col space-y-2'>
        <UserInfo user={user} />
        <Divider />
        <div className='flex items-center justify-between'>
          <p className='text-sm text-muted-foreground'>Rating</p>
          <p className='text-sm font-medium'>{rating}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-muted-foreground'>Win Rate</p>
          <p className='text-sm font-medium'>{winRate}%</p>
        </div>
      </div>
      <div className='flex flex-col space-y-2'>
        <ProfileDetailsItem
          value={userProfileData?.wins || 0}
          iconName='queen'
          label='Wins'
        />
        <Divider />
        <ProfileDetailsItem
          iconName='flag'
          label='Losses'
          value={userProfileData?.losses || 0}
        />
        <Divider />
        <ProfileDetailsItem
          iconName='handshake'
          label='Draws'
          value={userProfileData?.draws || 0}
        />
      </div>
    </div>
  );
}

export default ProfileDetails;
