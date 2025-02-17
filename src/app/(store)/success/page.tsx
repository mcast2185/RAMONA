'use client'


import Link from 'next/link';
import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
// import { getSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';


import { Button } from '@/components/ui/button';
import { useProductBasketStore } from '../../../../store/store';



function Success() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useProductBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    };
  }, [orderNumber, clearBasket]);

  return (
    <div className='bg-gray-100 h-screen flex flex-col items-center justify-center'>

      <main className='max-w-screen-lg mx-auto bg-white'>
        <div className='flex flex-col items-center justify-center p-10 '>
          <div className='p-12 max-w-2xl w-full mx-4 flex flex-col items-center justify-center'>
            <CheckCircle2 className='text-white h-8 w-8 bg-green-600 rounded-full' />
            <h1 className='text-xl text-gray-600'>
              Thank you, your order has been confirmed and will be shipped shortly!
            </h1>
          </div>
          <div className='space-y-4'>
            <p className='text-gray-700 text-sm'>
              A confirmation email has been sent to your registered email address.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild className='bg-green-600 hover:bg-green-700'>
                <Link href="/orders">View Order Details</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success;


// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   };
// };