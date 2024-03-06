'use client';

import { NextUIProvider } from '@nextui-org/react';

// Other posible background colors: #84b13085 or #faebd7

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className='grid grid-cols-2 grid-rows-12 grid-flow-row h-screen gap-1 p-5 bg-[--background]'>
        {children}
      </main>
    </NextUIProvider>
  );
};
