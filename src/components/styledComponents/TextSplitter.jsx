"use client";

import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';


const TextSplitter = (text) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".split-text", {
      clipPath: "inset(0 0 50% 0)",
      ease: "power3.in",
      transform: "translateY(0%)",
      opacity: 1,
      duration: 1.5
    })

    gsap.to(".split-text", {
      clipPath: "inset(0 0 52% 0)",
      ease: "power4.inOut",
      transform: "translateX(100vw) translateY(0%)",
      delay: 1.5,
      opacity: 0,
      transitionProperty: "transform, opacity",
      transitionDelay: 1.5,
      transitionDuration: 3
    })

    gsap.from(".split-text-two", {
      clipPath: "inset(50% 0 0 0)",
      ease: "power3.in",
      transform: "translateY(0%)",
      opacity: 1,
      duration: 1.5
    })

    gsap.to(".split-text-two", {
      clipPath: "inset(52% 0 0 0)",
      ease: "power4.inOut",
      transform: "translateX(-100vw) translateY(0%)",
      delay: 1.5,
      opacity: 0,
      transitionProperty: "transform, opacity",
      transitionDelay: 1.5,
      transitionDuration: 3
    })
  });

  return (
    <div className="h-screen w-screen">
      <div className='split-text-wrapper relative w-full h-full flex justify-center items-center'>
        <h1 className='absolute will-change-transform split-text text-[16vw] h-[62px] text-blue-600 overflow-hidden'>
          {text}
        </h1>
        <h1 className='absolute will-change-transform split-text-two text-[16vw] h-[62px] text-red-600 overflow-hidden'>
          {text}
        </h1>

      </div>
    </div>
  )
};

export default TextSplitter;