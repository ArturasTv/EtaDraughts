'use client';

import { buttonVariants } from '@/components/ui/Button/Button';
import NAVIGATION from '@/constants/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import useSheetStore from '@/stores/useSheetStore';

function MobileNavigation() {
  const pathname = usePathname();
  const { mobileNavigation } = useSheetStore();

  const handleLinkClick = () => {
    mobileNavigation.close();
  };

  return (
    <nav className='flex flex-col space-y-2 pt-6'>
      {NAVIGATION.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          onClick={handleLinkClick}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.path
              ? 'bg-accent'
              : 'hover:bg-accent hover:underline',
            'justify-start',
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default MobileNavigation;
