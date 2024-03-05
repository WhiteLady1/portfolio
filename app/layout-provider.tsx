'use client';

import { NextUIProvider } from '@nextui-org/react';

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className='grid grid-cols-2 grid-rows-12 grid-flow-row h-screen gap-1 p-5 bg-orange-300 text-gray-900'>
        {children}
      </main>
    </NextUIProvider>
  );
};
