import React from 'react';
import NAVIGATION from '@/constants/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/NavigationMenu/NavigationMenu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo/Logo';

const navigationMenuTriggerStyle = cn(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
);

function Header() {
  return (
    <div className='flex items-center justify-between p-4'>
      <Logo variant='dark' />
      <NavigationMenu>
        <NavigationMenuList className='flex justify-between'>
          {NAVIGATION.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/logout' legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle,
                  'text-destructive hover:text-destructive',
                )}
              >
                Logout
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Header;
