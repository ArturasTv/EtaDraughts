import React from 'react';
import Logo from '@/components/ui/Logo/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import Typography from '@/components/ui/Typography/Typography';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import UserProfilePopover from '../../UserProfilePopover/UserProfilePopover';

interface Props {
  className?: string;
}

const userName = 'John Doe';

function DesktopHeader({ className }: Props) {
  return (
    <header
      className={cn('flex items-center justify-between p-4 shadow', className)}
    >
      <Logo variant='dark' />
      <DesktopNavigation />
      <section className='flex items-center space-x-4 rounded-l-full rounded-r-full bg-muted pl-4 shadow'>
        <Typography type='span' className='font-medium'>
          {userName}
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
