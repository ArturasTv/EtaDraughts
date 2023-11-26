import Icon, { IconNames } from '@/components/ui/Icon/Icon';
import React from 'react';

interface Props {
  iconName: IconNames;
  label: string;
  value: number;
}

function ProfileDetailsItem({ iconName, label, value }: Props) {
  return (
    <section className='flex w-fit items-center space-x-2 rounded-md'>
      <div className='rounded-full border p-2'>
        <Icon name={iconName} className='h-5 w-5' />
      </div>
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>{label}</p>
        <p className='text-sm text-muted-foreground'>{value || 0}</p>
      </div>
    </section>
  );
}

export default ProfileDetailsItem;
