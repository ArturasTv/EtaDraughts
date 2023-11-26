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
  IconSortAscending,
  IconSortDescending,
  IconArrowsSort,
  IconChevronLeft,
  IconChevronRight,
  IconCirclePlus,
  IconArrowRight,
  IconChessQueen,
  IconSettings,
  IconUser,
  IconHeartHandshake,
  IconFlag,
  IconEye,
} from '@tabler/icons-react';

export type IconNames =
  | 'gmail'
  | 'loader'
  | 'menu'
  | 'user-circle'
  | 'user-circle'
  | 'logout'
  | 'check'
  | 'trash'
  | 'cross'
  | 'settings'
  | 'user'
  | 'sort-ascending'
  | 'sort-descending'
  | 'arrows-sort'
  | 'chevron-left'
  | 'chevron-right'
  | 'circle-plus'
  | 'arrow-right'
  | 'queen'
  | 'handshake'
  | 'flag'
  | 'eye';

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

  // prettier-ignore
  return (
    <>
      {name === 'gmail' && <IconBrandGmail size={mapSize[size]} {...props} />}
      {name === 'loader' && <IconLoader size={mapSize[size]} {...props} />}
      {name === 'menu' && <IconMenu2 size={mapSize[size]} {...props} />}
      {name === 'user-circle' && <IconUserCircle size={mapSize[size]} {...props} />}
      {name === 'logout' && <IconLogout size={mapSize[size]} {...props} />}
      {name === 'check' && <IconCircleCheck size={mapSize[size]} {...props} />}
      {name === 'trash' && <IconTrash size={mapSize[size]} {...props} />}
      {name === 'cross' && <IconCircleX size={mapSize[size]} {...props} />}
      {name === 'settings' && <IconSettings size={mapSize[size]} {...props} />}
      {name === 'user' && <IconUser size={mapSize[size]} {...props} />}
      {name === 'sort-ascending' && <IconSortAscending size={mapSize[size]} {...props} />}
      {name === 'sort-descending' && <IconSortDescending size={mapSize[size]} {...props} />}
      {name === 'arrows-sort' && <IconArrowsSort size={mapSize[size]} {...props} />}
      {name === 'chevron-left' && <IconChevronLeft size={mapSize[size]} {...props} />}
      {name === 'chevron-right' && <IconChevronRight size={mapSize[size]} {...props} />}
      {name === 'circle-plus' && <IconCirclePlus size={mapSize[size]} {...props} />}
      {name === 'arrow-right' && <IconArrowRight size={mapSize[size]} {...props} />}
      {name === 'queen' && <IconChessQueen size={mapSize[size]} {...props} />}
      {name === 'handshake' && <IconHeartHandshake size={mapSize[size]} {...props} />}
      {name === 'flag' && <IconFlag size={mapSize[size]} {...props} />}
      {name === 'eye' && <IconEye size={mapSize[size]} {...props} />}
    </>
  );
}

export default Icon;
