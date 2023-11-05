'use client';

import { buttonVariants } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import useSheetStore from '@/stores/ui/useSheetStore';
import { NAVIGATION } from '@/constants/navigation';

function MobileNavigation() {
  const pathname = usePathname();
  const { mobileNavigation } = useSheetStore();

  const handleLinkClick = () => {
    mobileNavigation.close();
  };

  return (
    <nav>
      <ul className='flex flex-col space-y-2 pt-6'>
        {NAVIGATION.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              onClick={handleLinkClick}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === item.path
                  ? 'bg-accent'
                  : 'hover:bg-accent hover:underline',
                'w-full justify-start',
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavigation;
