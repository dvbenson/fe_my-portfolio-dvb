'use client';
import React, { useEffect } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import DefaultLayout from '@/components/ui/DefaultLayout';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //TODO: add link to open email when click on email address
  return (
    <div>
    <DefaultLayout>
      <main className="relative mx-auto flex min-h-screen flex-col p-4 text-center bg-[#222222] ">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 xxs:-translate-y-[40%]  transform  bg-[#404040] rounded-xl p-4 min-w-[300px] sm:min-w-[420px]">
          <div className="flex flex-col gap-3  shadow-xl bg-gray rounded-lg p-2">
          
            <h1 className="text-center max-sm:text-2xl text-4xl font-semibold leading-relaxed font-heading text-[#121212]">
              Something went wrong... oops! 
            </h1>
            <p className='bg-white rounded-lg mx-4 text-base sm:text-lg font-sans my-2 text-[#E21818] h-full p-2 shadow-md'>{`"${capitalizeFirstLetter(error.message)}"`}</p>
            
            <h2 className="text-base sm:text-lg font-sans">
              Try again {' '}
              <Button
                label={'here'}
                onClick={() => reset()}
                className="text-base sm:text-lg underline decoration-solid decoration-2 underline-offset-2 font-sans font-medium hover:text-electric-lime"
              />{' '}
              or follow the links below to get back on track.
            </h2>
            <p className="text-base sm:text-lg font-medium underline decoration-solid underline-offset-4 font-sans">
              Any questions?
            </p>
            <p className='font-sans text-base sm:text-lg'> danielvb@danielvb.dev</p>
            <div className="my-2 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <Link href="/">
                <Button
                  label={'Home'}
                  variant={'primary'}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  </div>
  );
}
