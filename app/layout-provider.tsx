'use client';

import { NextUIProvider } from '@nextui-org/react';
import Spline from '@splinetool/react-spline';

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <Spline scene="https://prod.spline.design/9wERW3PBvfavcxiU/scene.splinecode" className='absolute cursor-default' />
      <main className='grid grid-cols-2 grid-rows-12 grid-flow-row h-screen gap-1 p-5 text-gray-900'>
        {children}
      </main>
    </NextUIProvider>
  );
};
