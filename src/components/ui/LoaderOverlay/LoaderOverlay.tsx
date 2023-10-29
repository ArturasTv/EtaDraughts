import React from 'react';

function LoaderOverlay() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background/20 backdrop-blur-[1px]'>
      <div className='flex gap-2'>
        <div className='h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s] md:h-3 md:w-3' />
        <div className='h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s] md:h-3 md:w-3' />
        <div className='h-2 w-2 animate-bounce rounded-full bg-primary md:h-3 md:w-3' />
      </div>
    </div>
  );
}

export default LoaderOverlay;
