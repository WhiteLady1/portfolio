'use client';

import { NextUIProvider } from '@nextui-org/react';

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className='grid grid-cols-2 sm:grid-cols-6 sm:grid-rows-9 gap-1 sm:gap-2 h-screen sm:h-[750px] md:w-[900px] p-5 bg-[--background] md:rounded-2xl md:border-5 md:border-[--bento-border]'>
        {children}
      </main>
    </NextUIProvider>
  );
};
