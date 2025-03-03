'use client';

import { gsap } from "gsap";
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { ReactRef, useGSAP } from '@gsap/react';
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";



export default function Menu() {
  const tl = useRef(null) as ReactRef;
  const ref = useRef(null) as ReactRef;
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const dynamicLinks = (path: string, pageName: string) => {
    return (
      <div className='menuLinkItem'>
        <div className='menuLinkContainer font-inter'>
          <h1 onClick={() => router.push(path)} 
            aria-details={`Link to page ${pageName}`}
            className='menuLink cursor-pointer'>
            {pageName}
          </h1>
        </div>
      </div>
    );
  };


  useGSAP(() => {
    
    gsap.set(".menuLinkContainer", {y: 75});
    tl.current = gsap.timeline({paused: true}).to(".menuOverlay", {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    }).to(".menuLinkContainer", {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75,
    });

  }, {scope: ref});


  useIsomorphicLayoutEffect(() => {
    if (menuIsOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuIsOpen]);


  
  return (
    <div ref={ref} className='menu-bar-container z-20 sm:hidden sm:invisible sm:w-0 md:hidden md:invisible md:w-0'>
      <div className="menuBar">
        <div className="relative">
 
          <div className='absolute top-0 flex justify-center h-[100vh] items-center'>
            <div onClick={toggleMenu} className='menuBurger group/burgerLines cursor-pointer 
              w-[9vw] h-[50px] overflow-hidden relative flex flex-row justify-center transform ease-in'>
              <div className='w-[190px] flex flex-row relative justify-around '>          
                <div className='menuBurgerDefault h-[50px] w-[65px] absolute flex justify-evenly flex-col'>
                  <div className='menuBurgerLine num1 delay-1000 transform-none w-[65px] 
                    ease-in-out duration-[850ms] group-hover/burgerLines:border-b-[#d0b20b]'/>
                  <div className='menuBurgerLine num2 delay-1000 transform-none w-[65px] 
                    ease-in-out duration-[950ms] group-hover/burgerLines:border-b-[#d0b20b]'/>
                  <div className='menuBurgerLine num3 delay-1000 transform-none w-[31px] 
                    ease-in-out duration-[1050ms] group-hover/burgerLines:border-b-[#d0b20b]'/>
                </div>
                <div className='menuBurgerActive h-[50px] w-[65px] 
                  absolute overflow-hidden flex justify-evenly flex-col'>
                  <div className='menuBurgerLine num4 group-hover/burgerLines:translate-x-[65px] 
                    group-hover/burgerLines:border-b-[#d0b20b] transform-none ease-in-out duration-[850ms] w-[65px]'/>
                  <div className='menuBurgerLine num5 group-hover/burgerLines:translate-x-[65px] 
                    group-hover/burgerLines:border-b-[#d0b20b] transform-none ease-in-out duration-[950ms] w-[65px]'/>
                  <div className='menuBurgerLine num6 group-hover/burgerLines:translate-x-[65px] 
                    group-hover/burgerLines:border-b-[#d0b20b] transform-none ease-in-out duration-[1050ms] w-[31px]'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menuOverlay">
        <div className="menuOverlayBar">
          <div className="menuLogo">
            {/* <span onClick={toggleMenu} className="flex flex-col">
              <Home className="cursor-pointer text-[#000]"/>
              <p>Close</p>
            </span> */}
          </div>
        </div>
        <div className="menuCloseIcon">
          <p>&#x2715;</p>
        </div>
        <div className="menuCopy">
          <div className="menuLinks">
            {dynamicLinks("/", "Intro")}
            {dynamicLinks("/gallery", "Gallery")}
            {dynamicLinks("/checkout", "Checkout")}
            {dynamicLinks("/contact", "Contact Us")}
          </div>
          <div className="menuInfo">
            <div className="menuInfoCol">
              <span className='flex flex-row items-start font-inter'>
                <a href="#" aria-details={`social media link to `}>
                  X </a><a href='/'><ArrowUpRight className='h-[1rem]'/>
                </a>
              </span>
              <span className='flex flex-row items-start font-inter'>
                <a href="#" aria-details=''>
                  Instagram </a><a href='/'><ArrowUpRight className='h-[1rem]'/>
                </a>
              </span>
              <span className='flex flex-row items-start font-inter'>
                <a href="#" aria-details=''>
                  LinkedIn </a><a href='/'><ArrowUpRight className='h-[1rem]'/>
                </a>
              </span>
            </div>
            <div className="menuInfoCol">
              <p className='font-inter'>
                myemail@gmail.com
              </p>
              <p className='font-inter'>
               555-555-5555
              </p>
            </div>
          </div>
        </div>
        <div className="menuPreview">
          <div className='text-[#000] font-inter flex items-center text-xs space-x-6 mx-[9vw] whitespace-nowrap'>
          
          </div>
        </div>
      </div>
    </div>
  );
};