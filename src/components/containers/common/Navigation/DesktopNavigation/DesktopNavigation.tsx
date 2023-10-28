import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/NavigationMenu/NavigationMenu';
import NAVIGATION from '@/constants/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const navigationMenuTriggerStyle = cn(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
);

function DesktopNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
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
  );
}

export default DesktopNavigation;
