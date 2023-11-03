import { IconNames } from '@/components/ui/Icon/Icon';
import { buttonVariants } from '@/components/ui/Button/Button';
import { VariantProps } from 'class-variance-authority';
import AppRoutes from './appRoutes';

type Navigation = {
  name: string;
  path: string;
  icon?: IconNames;
  variant?: Extract<
    VariantProps<typeof buttonVariants>['variant'],
    'destructive'
  >;
};

export const NAVIGATION: Navigation[] = [
  {
    name: 'Home',
    path: AppRoutes.HOME.INDEX,
  },
  {
    name: 'Games',
    path: AppRoutes.GAMES.INDEX,
  },
  {
    name: 'Tournaments',
    path: AppRoutes.TOURNAMENTS.INDEX,
  },
];

export const USER_PROFILE_NAVIGATION: Navigation[] = [
  {
    name: 'Profile',
    path: AppRoutes.USER.PROFILE.INDEX,
  },
  {
    name: 'Settings',
    path: AppRoutes.USER.SETTINGS.INDEX,
  },
];

export const USER_SETTINGS_NAVIGATION: Navigation[] = [
  {
    name: 'Profile',
    path: AppRoutes.USER.PROFILE.INDEX,
    icon: 'user',
  },
  {
    name: 'Settings',
    path: AppRoutes.USER.SETTINGS.INDEX,
    icon: 'settings',
  },
  {
    name: 'Delete Account',
    path: AppRoutes.USER.SETTINGS.DELETE_ACCOUNT.INDEX,
    icon: 'trash',
  },
];
