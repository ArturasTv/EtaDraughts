import AppRoutes from './appRoutes';

type Navigation = {
  name: string;
  path: string;
};

export const NAVIGATION: Navigation[] = [
  {
    name: 'Home',
    path: AppRoutes.HOME.INDEX,
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
