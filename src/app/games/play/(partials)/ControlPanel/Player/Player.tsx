'use client';

import React from 'react';
import { AvatarFallback } from '@/components/ui/Avatar/Avatar';
import { getUserInitials } from '@/lib/user';
import { Avatar } from '@radix-ui/react-avatar';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';

interface Props {
  name: string;
  seconds: number;
}

function Player({ name, seconds }: Props) {
  return (
    <section className='flex items-center justify-between space-x-4 bg-primary-foreground'>
      <Avatar className='h-10 w-10 rounded-none'>
        <AvatarFallback className='rounded-none'>
          {getUserInitials(name)}
        </AvatarFallback>
      </Avatar>
      <h3 className='pr-4 text-sm font-normal leading-6 text-muted-foreground'>
        {formatSecondsToMinutesAndSeconds(seconds)}
      </h3>
    </section>
  );
}

export default Player;
