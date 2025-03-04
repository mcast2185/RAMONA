"use client";

import Link from 'next/link';
import { PackageIcon, TrolleyIcon } from '@sanity/icons';
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'


function Header() {
  const {user} = useUser();
  const createPassKey =  async () => {
    // this functionality will require us to pay on clerk

    try {
      const response = await user?.createPasskey();
      console.log(response)
    } catch (err) {
      console.error("Error:", JSON.stringify(err,null,2));
    };
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 h-[12vh] bg-gradient-to-b from-black to-transparent sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-50">
      {/* top row */}
      <div className='flex w-full flex-wrap justify-between items-center mb-[2vh]'>
        <Link href="/" 
          className="text-2xl font-bold text-yellow-400 
          hover:opacity-50 cursor-pointer mx-auto 2xl:mx-0 mt-4">
          ANOMAR
        </Link>
        <div className='flex items-center space-x-4 mt-4 2xl:mt-0 flex-1 2xl:flex-none px-4 font-PoiretOne'>
          <Link href="/basket" className='flex items-center'>
            <TrolleyIcon className='w-5 h-5 text-slate-200'/>{' '}  
            <span className='font-semibold text-slate-300'>
              My basket
            </span>
          </Link>

          <ClerkLoaded>
            <SignedIn>
              <Link href="/orders" className='flex items-center'>
                <PackageIcon className='text-slate-200'/>
                <span className='font-semibold text-slate-300'>
                  My orders
                </span>
              </Link>
            </SignedIn>

            {user ? (
              <div className='flex items-center space-x-2'>
                <UserButton/>
                <div className='hidden 2xl:block text-sm'>
                  <p className='text-[--yellow]'>
                    welcome back
                  </p>
                  <p className='font-bold text-slate-300'>
                    {user.fullName}
                  </p>
                </div>
              </div>
              ): (
                <div className='text-[--yellow]'>
                  <SignInButton mode='modal'/>
                </div>
            )}

            {user?.passkeys.length === 0 && (
              <button 
                onClick={createPassKey}
                className='bg-white hover:bg-slate-400 hover:text-[--yellow] animate-pulse rounded border-[--yellow]'>
                create a passkey now
              </button>
            )}

          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;