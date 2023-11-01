import React from 'react';
import {
  IconBrandGmail,
  IconLoader,
  IconMenu2,
  TablerIconsProps,
  IconUserCircle,
  IconLogout,
  IconCircleCheck,
  IconTrash,
  IconCircleX,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

export type IconNames =
  | 'gmail'
  | 'loader'
  | 'menu'
  | 'user-circle'
  | 'logout'
  | 'check'
  | 'trash'
  | 'cross'
  | 'settings'
  | 'user';
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends TablerIconsProps {
  name: IconNames;
  size?: IconSize;
}

function Icon({ name, size = 'md', ...props }: Props) {
  const mapSize = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  };

  return (
    <>
      {name === 'gmail' && <IconBrandGmail size={mapSize[size]} {...props} />}
      {name === 'loader' && <IconLoader size={mapSize[size]} {...props} />}
      {name === 'menu' && <IconMenu2 size={mapSize[size]} {...props} />}
      {name === 'user-circle' && (
        <IconUserCircle size={mapSize[size]} {...props} />
      )}
      {name === 'logout' && <IconLogout size={mapSize[size]} {...props} />}
      {name === 'check' && <IconCircleCheck size={mapSize[size]} {...props} />}
      {name === 'trash' && <IconTrash size={mapSize[size]} {...props} />}
      {name === 'cross' && <IconCircleX size={mapSize[size]} {...props} />}
      {name === 'settings' && <IconSettings size={mapSize[size]} {...props} />}
      {name === 'user' && <IconUser size={mapSize[size]} {...props} />}
    </>
  );
}

export default Icon;
