'use client';

import SCREEN_SIZES from '@/constants/screenSizes';
import { useMediaQuery } from './useMediaQuery';

function getMaxWidth(screenSize: number) {
  return `(max-width: ${screenSize}px)`;
}

function useScreenSize() {
  const isMobile = useMediaQuery(getMaxWidth(SCREEN_SIZES.mobile));
  const isTablet = useMediaQuery(getMaxWidth(SCREEN_SIZES.tablet));
  const isDesktop = useMediaQuery(getMaxWidth(SCREEN_SIZES.desktop));

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export { useScreenSize };
