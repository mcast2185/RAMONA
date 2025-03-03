"use client";

import { motion } from "framer-motion";
import { CircleX } from 'lucide-react';


export const Background = ({children, closeModal}) => (
  <motion.div onClick={closeModal} className="w-full h-full bg-[rgba(0,0,0,0.93)] 
    fixed top-0 left-0 flex justify-center items-center z-[3000]">
    {children}
  </motion.div>
);

export const ModalWrapper = ({children}) => (
  <motion.div className="w-full h-full bg-[rgba(0,0,0,0.7)] 
    fixed top-0 left-0 flex justify-center items-center z-[3500]">
    {children}
  </motion.div>
);

export const CloseModalButton = ({props}) => (
  <button props className="cursor-pointer absolute top-5 right-5 w-8 h-8 p-0 z-10">
    <CircleX/>
  </button>
);