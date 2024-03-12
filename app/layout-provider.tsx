'use client';

import { NextUIProvider } from '@nextui-org/react';

// Other posible background colors: #84b13085 or #faebd7

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className='grid grid-cols-2 gap-1 sm:gap-2 sm:grid-cols-6 h-screen md:h-[800px] md:w-[900px] p-5 bg-[--background] md:rounded-2xl md:border-5 md:border-[--bento-border]'>
        {children}
      </main>
    </NextUIProvider>
  );
};
