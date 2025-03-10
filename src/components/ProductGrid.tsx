"use client";

import { AnimatePresence, motion } from 'framer-motion';

import ProductThumb from "./ProductThumb";
import {Product} from "../../sanity.types";


function ProductGrid({products}: {products: Product[]}) {
  // remove gap an margin once integrated and remove css from motion.div
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
      {products?.map((product) => (
        <AnimatePresence key={product._id}>
          <motion.div
            layout
            initial={{opacity: 0.2}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="">
            <ProductThumb product={product}/>
          </motion.div>

        </AnimatePresence>
      ))}
    </div>
  );
};

export default ProductGrid;