/* eslint-disable consistent-return */

'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  delay?: number;
}

// TODO: When we will have a better animation architecture;
// replace this magic number with animation duration constant

function DelayedRender({ isOpen, delay = 200, children }: Props) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }

    const timeoutId = setTimeout(() => {
      setShouldRender(isOpen);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isOpen, delay]);

  return shouldRender ? children : null;
}

export default DelayedRender;
