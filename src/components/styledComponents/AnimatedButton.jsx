"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";


const AnimatedButton = ({ toggleModal, text="Hire Me", border="#000", color="#000"}) => {
  const xTo = useRef();
  const yTo = useRef();
  const buttonRef = useRef();
  const divRef = useRef();


  const { contextSafe } = useGSAP(() => {
    xTo.current = gsap.quickTo(divRef.current, "x", { duration: 0.5, ease: "power4.inOut" });
    yTo.current = gsap.quickTo(divRef.current, "y", { duration: 0.5, ease: "power4.inOut" });

    gsap.to(divRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      zIndex: -10,
    })
  }, { scope: buttonRef });


  const handleMouseEnter = contextSafe(() => {
    gsap.set(divRef.current, { opacity: 1 });
    gsap.to(divRef.current, {
      scale: 3.5,
      duration: 0.75,
    });

    gsap.to(".button-text", {
      color: "#fff",
      duration: 0.35,
    });

  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 0,
      duration: 0.5,
    });

    gsap.to(".button-text", {
      color: `${color}`,
      scale: 1,
      duration: 0.75,
    });
  });



  const handleMouseMove = contextSafe((e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const { top, left } = rect;
    xTo.current(e.clientX - left);
    yTo.current(e.clientY - top);
  });

  return (
    <button
      id="button"
      onClick={toggleModal}
      ref={buttonRef}
      className={`relative px-5 py-2 w-[10vw] h-[5vh] border border-[${border}] hover:scale-[.95] hover:duration-700 
      hover:ease-out rounded-3xl text-[#d0b20b] font-light overflow-hidden hover:text-[#000]  bg-transparent`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e) => { handleMouseMove(e) }}>
      <div ref={divRef} className="absolute w-[300px] h-[150px] bg-[#5d1da1] opacity-0
        left-0 top-0 wrapperElement pointer-events-none rounded-[50%]">
      </div>
      <span className="z-10 font-Inter flex flex-row justify-between py-auto px-2 text-xl w-full">
        <p className="button-text text-[#d0b20b] w-full flex justify-center items-center">{text}</p>
      </span>
    </button>
  );
};

export default AnimatedButton;