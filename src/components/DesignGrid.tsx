"use client";

import { Design } from "../../sanity.types";
import { AnimatePresence, motion } from 'framer-motion';
import DesignThumb from "./DesignThumb";


function DesignGrid({ designs }: { designs: Design[] }) {
  // remove gap an margin once integrated and remove css from motion.div
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {designs?.map((design) => (
        <AnimatePresence key={design._id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="">
            <DesignThumb design={design} />
          </motion.div>

        </AnimatePresence>
      ))}
    </div>
  )
}

export default DesignGrid;