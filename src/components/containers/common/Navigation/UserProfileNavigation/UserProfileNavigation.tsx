import { buttonVariants } from '@/components/ui/Button/Button';
import { USER_PROFILE_NAVIGATION } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  handleLinkClick?: () => void;
}

function UserProfileNavigation({ handleLinkClick }: Props) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex flex-col space-y-2'>
        {USER_PROFILE_NAVIGATION.map((item, index) => (
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

export default UserProfileNavigation;
