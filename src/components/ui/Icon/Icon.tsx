import React from 'react';
import { IconBrandGmail, TablerIconsProps } from '@tabler/icons-react';

type IconNames = 'gmail';
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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {name === 'gmail' && <IconBrandGmail size={mapSize[size]} {...props} />}
    </>
  );
}

export default Icon;
