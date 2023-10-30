import React from 'react';
import {
  IconBrandGmail,
  IconLoader,
  IconMenu2,
  TablerIconsProps,
  IconUserCircle,
  IconLogout,
} from '@tabler/icons-react';

type IconNames = 'gmail' | 'loader' | 'menu' | 'user' | 'logout';
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
      {name === 'user' && <IconUserCircle size={mapSize[size]} {...props} />}
      {name === 'logout' && <IconLogout size={mapSize[size]} {...props} />}
    </>
  );
}

export default Icon;
