"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useDesignBasketStore, useProductBasketStore } from "../../../../store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddToBasketDesignButton from "@/components/ui/AddToBasketDesignButton";
import Image from "next/image";
import { imageUrl } from '@/lib/imageUrl';

const BasketPage = () => {
  const groupedProductItems = useProductBasketStore((state) => state.getGroupedItems());
  const groupedDesignItems = useDesignBasketStore((state) => state.getGroupedItems());

  const {isSignedIn} = useAuth();
  const {user} = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (groupedDesignItems.length === 0 || groupedProductItems.length === 0) {
    return (
      <div className='container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>
          <p className='text-gray-600 text-lg'>
            Your basket is empty.
          </p>
        </h1>
      </div>
    );
  };

  console.log("Basket Contents", groupedDesignItems, groupedProductItems);
  return (
    <div className='container mx-auto p-4 max-w-6xl'>
      <h1 className='text-2xl font-bold mb-4'>
        Your Basket
      </h1>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-grow'>
          {groupedDesignItems?.map((item) => (
            <div key={item.design._id} 
              className='mb-4 p-4 border rounded flex items-center justify-between'>
              <div className='flex items-center cursor-pointer flex-1 min-w-0' 
                onClick={() => router.push(`/design/${item.design.slug?.current}`)}>
                <div className='w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4'>
                  {item.design.image && (
                    <Image
                      src={imageUrl(item.design.image).url()}
                      alt={item.design.name ?? "Design Image"}
                      className="w-full h-full object-cover rounded"
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className='min-w-0'>
                  <h2 className="text-lg sm:text-xl font-semibold truncate">
                    {item.design.name}
                  </h2>
                  <p className='text-sm sm:text-base'>
                    Price: $
                    {((item.design.price ?? 0) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              
              <div className='flex items-center ml-4 flex-shrink-0'>
                <AddToBasketDesignButton design={item.design} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default BasketPage;