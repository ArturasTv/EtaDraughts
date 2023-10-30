import { Avatar, AvatarFallback } from '@/components/ui/Avatar/Avatar';
import { getUserInitials } from '@/lib/user';
import React from 'react';

interface Props {
  user: {
    name: string;
    email: string;
  };
}

function UserInfo({ user }: Props) {
  const { name, email } = user;

  return (
    <section className='flex items-center space-x-4'>
      <Avatar className='h-14 w-14'>
        <AvatarFallback>{getUserInitials(name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>{name}</h3>
        <p className='text-sm leading-5 text-gray-500'>{email}</p>
      </div>
    </section>
  );
}

export default UserInfo;
