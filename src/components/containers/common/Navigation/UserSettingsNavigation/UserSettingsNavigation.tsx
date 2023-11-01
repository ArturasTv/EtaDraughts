'use client';

import React from 'react';
import { buttonVariants } from '@/components/ui/Button/Button';
import { USER_SETTINGS_NAVIGATION } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon/Icon';

interface Props {
  handleLinkClick?: () => void;
}

function UserSettingsNavigation({ handleLinkClick }: Props) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex flex-col space-y-2'>
        {USER_SETTINGS_NAVIGATION.map((item, index) => {
          const defaultVariant = 'ghost';

          const variant = item.variant || defaultVariant;

          const isCurrentPath = pathname === item.path;

          return (
            <li key={index}>
              <Link
                href={item.path}
                onClick={handleLinkClick}
                className={cn(
                  buttonVariants({ variant }),
                  {
                    'bg-accent': isCurrentPath && variant === defaultVariant,
                    'hover:bg-accent hover:underline':
                      !isCurrentPath && variant === defaultVariant,
                  },
                  'w-full justify-start',
                )}
              >
                {item.icon && <Icon name={item.icon} className='mr-2' />}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default UserSettingsNavigation;
