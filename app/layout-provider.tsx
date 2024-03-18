'use client';

import { NextUIProvider } from '@nextui-org/react';

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className='grid grid-cols-2 sm:grid-cols-6 sm:grid-rows-9 gap-1 sm:gap-2 sm:h-[650px] md:w-[750px] p-5 bg-[--background]'>
        {children}
      </main>
    </NextUIProvider>
  );
};
