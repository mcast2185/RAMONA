"use client";

import gsap from 'gsap';
import React, {useRef} from 'react';
import { useGSAP } from '@gsap/react';
import SplitTextJS from  "split-text-js";



const OscillatingTxt = () => {

  gsap.registerPlugin(useGSAP);

  const textRef = useRef();
  const currentRef = useRef();
  const parentElementRef = useRef();
  const {contextSafe} = useGSAP({ scope: parentElementRef.current });

  const useHoverEffectIn = contextSafe(() => {
    gsap.set("#paragraph-elem", {
      duration: .35,
      x: 0,
      y:0,
      ease: "power2.out",
      color: "rgba(0,0,0,.9)",
    })

    gsap.to(".oscillating-text-wrapper", {
      duration: .3,
      ease: "power2.out",
      backgroundColor: "white",
    })
    
    gsap.to(".child2", {
      duration: .35,
      ease: "power2.out",
      border: "2px solid rgba(0,0,0,0.9)",
    })
  })

  const useHoverEffectOut = contextSafe(() => {
    gsap.set("#paragraph-elem", {
      duration: .35,
      ease: "sine.in",
      color: "rgba(254,254,254,0.9)",
    })

    gsap.to(".oscillating-text-wrapper", {
      duration: .3,
      ease: "sine.in",
      backgroundColor: "black",
    })
    
    gsap.to(".child2", {
      duration: .35,
      ease: "sine.in",
      border: "2px solid rgba(254,254,254,0.9)",
    })
  });

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
    const titles = gsap.utils.toArray(textRef.current.children);

    titles.forEach((title) => {
      gsap.set(title, {opacity: 1, x: 0, y: 0})
      const splitTitle = new SplitTextJS(title, {type: 'chars'});

      currentRef.current = tl
      .from(splitTitle.chars, {opacity: 0, y: 30, rotateX: -90, stagger: .02, duration: .75, delay: .75, ease: "power4.inOut"}, "<")
      .to(splitTitle.chars, {opacity: 0, y: -30, rotateX: 90, stagger: .02, duration: .75, delay: .75,  ease: "power4.inOut"},"<1");
    })}, { scope: textRef});

  return (
    <div onMouseEnter={useHoverEffectIn} onMouseLeave={useHoverEffectOut} ref={parentElementRef}
      className="oscillating-text-wrapper mx-auto relative h-[9vh] w-[20vw] flex justify-center items-center bg-black sm:flex
      border-2 border-[1px_solid_rgb(0,0,0,.9)] sm:w-[70vw] sm:justify-center sm:items-center sm:tracking-[5.9px] tracking-[-2.5px]">
      <div className='child2 sm:w-[70vw] h-[8vh] w-[20vw] scale-x-95 flex justify-center items-center 
        sm:flex absolute bg-transparent scale-y-90 border-2 border-[2px_solid_rgba(254,254,254,0.9)] z-[10]'/>
      <div ref={textRef} className="tracking-[-2.5px] text-[rgba(254,254,254,0.9)] relative sm:tracking-[5.9px] flex
        sm:flex sm:w-[70vw] h-[9vh] w-[20vw] justify-center items-center sm:justify-center sm:items-center font-NotoSerifDisplay">
        <h4 id="paragraph-elem" className='text-[rgba(254,254,254,0.9)] text-[2rem] sm:text-[1.25rem] opacity-0'>
          Reach Out
        </h4>
        <h4 id="paragraph-elem" className='text-[rgba(254,254,254,0.9)] text-[2rem] sm:text-[1.25rem] opacity-0'>
          Send An Email
        </h4>
        <h4 id="paragraph-elem" className='text-[rgba(254,254,254,0.9)] text-[2rem] sm:text-[1.25rem] opacity-0'>
          Inqueries & More
        </h4>
        <h4 id="paragraph-elem" className='text-[rgba(254,254,254,0.9)] text-[2rem] sm:text-[1.25rem] opacity-0'>
          Ask About Events
        !</h4>
      </div>
    </div>
  );
};

export default OscillatingTxt;