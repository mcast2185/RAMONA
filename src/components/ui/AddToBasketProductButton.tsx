"use client";

import { useEffect, useState } from "react";

import { Design, Product } from "../../../sanity.types";
import { useDesignBasketStore, useProductBasketStore } from "../../../store/store";


interface AddToBasketProductButtonProps {
  product: Product;
  disabled?: boolean;
};

const AddToBasketProductButton = ({ product, disabled }: AddToBasketProductButtonProps) => {

  const { addProductItem, removeProductItem, getProductItemCount } = useProductBasketStore();
  
  const itemProductCount = getProductItemCount(product._id);



  const [isClient, setIsClient] = useState(false);


  // update yourself on current hydration and rehydration page rendering.
  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) {
    return null;
  };

  return (
    
    <div className='flex items-center justify-center space-x-2'>

       
      
      <button
        onClick={() => {
          if (product) {
            removeProductItem(product._id)
          };
        }}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
        ${itemProductCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={itemProductCount === 0 || disabled}
      >
        <span className={`text-xl font-bold ${itemProductCount === 0 ? "text-gray-400" : "text-gray-600"}`}>
          -
        </span>
      </button>
      <span className='w-8 text-center font-semibold'>
        {itemProductCount}
      </span>
      <button
        onClick={() => addProductItem(product)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
        ${itemProductCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={disabled}>
        <span className="text-xl font-bold text-white">
          +
        </span>
      </button>

    </div>
  );
};

export default AddToBasketProductButton;