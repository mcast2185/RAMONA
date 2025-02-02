"use client";

import { useEffect, useState } from "react";

import { Design, Product } from "../../../sanity.types";
import { useDesignBasketStore, useProductBasketStore } from "../../../store/store";


interface AddToBasketDesignButtonProps {
  design: Design;
  disabled?: boolean;
};

const AddToBasketDesignButton = ({ design, disabled }: AddToBasketDesignButtonProps) => {
  const { addDesignItem, removeDesignItem, getDesignItemCount } = useDesignBasketStore();
  const { addProductItem, removeProductItem, getProductItemCount } = useProductBasketStore();


  const itemDesignCount = getDesignItemCount(design._id);


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
          if (design) {
            removeDesignItem(design._id)
          };

        }}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
        ${itemDesignCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={itemDesignCount === 0 || disabled}
      >
        <span className={`text-xl font-bold ${itemDesignCount === 0 ? "text-gray-400" : "text-gray-600"}`}>
          -
        </span>
      </button>
      <span className='w-8 text-center font-semibold'>
        {itemDesignCount}
      </span>
      <button
        onClick={() => addDesignItem(design)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
        ${itemDesignCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={disabled}>
        <span className="text-xl font-bold text-white">
          +
        </span>
      </button>
    </div>
  );
};

export default AddToBasketDesignButton;