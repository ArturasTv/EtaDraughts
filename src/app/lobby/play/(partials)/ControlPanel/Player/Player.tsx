'use client';

import React from 'react';
import { AvatarFallback } from '@/components/ui/Avatar/Avatar';
import { getUserInitials } from '@/lib/user';
import { Avatar } from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';
import PlayerClock from './PlayerClock/PlayerClock';

interface Props {
  name: string;
  timeLeft: number;
  isActive: boolean;
  className?: string;
}

function Player({ name, timeLeft, isActive, className }: Props) {
  return (
    <section
      className={cn(
        'flex items-center justify-between space-x-4 bg-primary-foreground',
        className,
      )}
    >
      <Avatar className='h-10 w-10 rounded-none'>
        <AvatarFallback className='rounded-none'>
          {getUserInitials(name)}
        </AvatarFallback>
      </Avatar>
      <PlayerClock isRunning={isActive} timeLeft={timeLeft} />
    </section>
  );
}

export default Player;
