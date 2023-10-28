'use client';

import React from 'react';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader/MobileHeader';

function Header() {
  return (
    <>
      <MobileHeader className='md:hidden' />
      <DesktopHeader className='hidden md:flex' />
    </>
  );
}

export default Header;
