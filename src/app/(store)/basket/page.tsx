"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";

import Loader from "@/components/Loader";
import { imageUrl } from '@/lib/imageUrl';
import AddToBasketProductButton from "@/components/ui/AddToBasketProductButton";
import { createCheckoutSession, Metadata } from "../../../../actions/createCheckoutSession";
import { BasketItem, useDesignBasketStore, useProductBasketStore } from "../../../../store/store";
import { ArrowDownLeftSquareIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const BasketPage = () => {
  const groupedItems: BasketItem[] = [];
  const groupedDesignItems = useDesignBasketStore((state) => state.getGroupedItems());
  const groupedProductItems = useProductBasketStore((state) => state.getGroupedItems());


  const {user} = useUser();
  const router = useRouter();
  const {isSignedIn} = useAuth();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setIsClient(true);
    
    groupedDesignItems.map((item, idx) => {
      item.design?._type === "design" 
      ? groupedItems.push(groupedDesignItems[idx]) : null;
    });
    
    groupedProductItems.map((item, idx) => {
      item.product?._type === "product" 
      ? groupedItems.push(groupedProductItems[idx]) : null;
    });

  },[]);


  if (!isClient) {
    return <Loader/>;
  };


  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      }

      const checkoutUrl = await createCheckoutSession(groupedProductItems, metadata);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      };

    } catch (error) {
      console.error("Error creating checkout session: ", error);
    } finally {
      setIsLoading(false);
    };
  };

  
  if (groupedProductItems.length === 0 ) {
    return (
      <div className='container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>
          <p className='text-gray-600 text-lg'>
            Your basket is empty.
          </p>
        </h1>
        <div className='flex flex-col w-full p-6 relative'>
          <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ">
            <Link href='/' className='flex items-center justify-center text-sm'>
              <ArrowDownLeftSquareIcon size={32} className='text-white h-5 w-5' />
              <p className='px-2'>
                Continue Shopping
              </p>
            </Link>
          </button>
        </div>
      </div>
    );
  };


  return (
    <div className='container mx-auto p-4 max-w-6xl'>
      <h1 className='text-2xl font-bold mb-4'>
        Your Basket
      </h1>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-grow'>
          {groupedProductItems!.map((item) => {
            if (item.product) {
              return (
                <div key={item.product?._id} 
                  className='mb-4 p-4 border rounded flex items-center justify-between'>
                  <div className='flex items-center cursor-pointer flex-1 min-w-0' 
                    onClick={() => router.push(`/design/${item.product?.slug?.current}`)}>
                    <div className='w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4'>
                      {item.product?.image && (
                        <Image
                          src={imageUrl(item.product?.image).url()}
                          alt={item.product?.name ?? "Product Image"}
                          className="w-full h-full object-cover rounded"
                          width={96}
                          height={96}
                        />
                      )}
                    </div>
                    <div className='min-w-0'>
                      <h2 className="text-lg sm:text-xl font-semibold truncate">
                        {item.product?.name}
                      </h2>
                      <p className='text-sm sm:text-base'>
                        Price: $
                        {((item.product?.price ?? 0) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center ml-4 flex-shrink-0'>
                    <AddToBasketProductButton product={item.product} />
                  </div>
                </div>
              );
            };
          })}
        </div>

        <div className='w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded 
          order-first lg:order-last fixed bottom-0 left-0 lg:left-auto'>
          <h3 className="text-xl font-semibold">
            Order Summary
          </h3>
          <div className='mt-4 space-y-2'>
            <p className='flex justify-between'>
              <span>Items:</span>
              <span>
                {groupedProductItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            <p className='flex justify-between text-2xl font-bold border-t pt-2'>
              <span>Total:</span>
              <span>
                ${useProductBasketStore.getState().getTotalPrice().toFixed(2)}
              </span>
            </p>
          </div>

          {isSignedIn ? (
            <div className='flex flex-col w-full p-6 relative'>
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 text-sm">
                {isLoading ? "Processing..." : "Checkout"}
              </button>
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ">
                <Link href='/' className='flex items-center justify-center text-sm'>
                  <ArrowDownLeftSquareIcon size={32} className='text-white h-5 w-5'/>
                  <p className='px-2'>
                    Continue Shopping
                  </p>
                </Link>
              </button>
            </div>
            ): (
            <SignInButton mode="modal">
                <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Sign in to Checkout
                </button>
            </SignInButton>
          )}
        </div>
        <div className='h-64 lg:h-0'>
          {/* {spacer for fixed checkout on mobile} */}
        </div>
        {/* <div className='flex flex-row w-full p-6 relative'>
          <button className="absolute bottom-4">
            <Link href='/' className='flex flew-col items-center justify-center'>
              <ArrowDownLeftSquareIcon size={32} className='text-gray-500 mx-auto '/>
              <p className='text-gray-500 text-sm px-2'>
                Continue Shopping
              </p>
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BasketPage;