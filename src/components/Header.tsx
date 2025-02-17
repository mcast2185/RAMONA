"use client";

import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { PackageIcon, TrolleyIcon } from '@sanity/icons';
import Link from 'next/link';

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
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div className='flex w-full flex-wrap justify-between items-center'>
        <Link href="/" 
          className="text-2xl font-bold text-yellow-400 
          hover:opacity-50 cursor-pointer mx-auto sm:mx-0">
          ANOMAR
        </Link>
        <div className='flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none'>
          <Link href="/basket" className='flex items-center'>
            <TrolleyIcon className='w-5 h-5'/>{' '}  
            <span className=''>
            My basket
            </span>
          </Link>

          <ClerkLoaded>
            <SignedIn>
              <Link href="/orders" className='flex items-center'>
                <PackageIcon className=''/>
                <span className=''>
                  my orders
                </span>
              </Link>
            </SignedIn>

            
            {user ? (
              <div className='flex items-center space-x-2'>
                <UserButton/>
                <div className='hidden sm:block text-xs'>
                  <p className='text-gray-400'>
                    welcome back
                  </p>
                  <p className='font-bold'>
                    {user.fullName}
                  </p>
                </div>
              </div>
            ): (
              <SignInButton mode='modal'/>
            )}

            {user?.passkeys.length === 0 && (
              <button 
                onClick={createPassKey}
                className='bg-white hover:bg-slate-400 hover:text-yellow-400 animate-pulse rounded border-yellow-400'>
                create a passkey now
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  )
}

export default Header;