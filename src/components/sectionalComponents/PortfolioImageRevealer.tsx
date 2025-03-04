'use client';

import gsap from 'gsap';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';


import AnimatedButton from '../styledComponents/AnimatedButton';
import TypeWriterWrapper from '../styledComponents/TypeWriterWrapper';

import IMG from "../../../public/images/headshot/ProImgTj.png";
import TWITTER from "../../../public/images/social_media/twitter.png";
import LINKEDIN from "../../../public/images/social_media/linkedin.png";
import FACEBOOK from "../../../public/images/social_media/facebook.png";
import INSTAGRAM from "../../../public/images/social_media/instagram.png";




const PortfolioImageRevealer = () => {

  useGSAP(() => {
    function isInViewport (element: Element) {
      const el = element;
      const rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 && 
        rect.left >= 0 && 
        rect.bottom <= 
          (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= 
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    

    const rows = document.querySelectorAll(".Portfolio-image-row");

    rows.forEach((row) => {
      if (isInViewport(row)) {
        let img = row.querySelector(".Portfolio-image-revealer");
        if (row.querySelector(".Portfolio-image-left")) {
          gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          });
        } else {
          gsap.to(img, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          });
        };
      };
    });

    
    gsap.utils.toArray(".Portfolio-image-container.Portfolio-image-right .Portfolio-image-revealer")
      .forEach((img: Element | any) => {
        gsap.to(img, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scrollTrigger: {
            trigger: img,
            start: "top 75%",
            end: "bottom 70%",
            scrub: true
          }
        });
    });


    gsap.utils.toArray(".Portfolio-image-container-two.Portfolio-image-left-two #Portfolio-image-row-2")
      .forEach((img: Element | any) => {
        gsap.to(img, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scrollTrigger: {
            trigger: img,
            start: "top 75%",
            end: "bottom 70%",
            scrub: true,
          },
          delay: 2,
          duration: 1.25
        });
    });


    gsap.utils.toArray(".Portfolio-image-container-two.Portfolio-image-left-two .Portfolio-image-p-tag-two")
      .forEach((text: Element | any) => {
        gsap.from(text, {
          opacity: 0,
          y: 40,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
    });


    gsap.utils.toArray(".Portfolio-image-container.Portfolio-image-right .Portfolio-image-p-tag")
      .forEach((text: Element | any) => {
        gsap.to(text, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: text,
            start: "top bottom",
            toggleActions: "play none none reverse"
          }
        });
    });
  });


  return (
    <div className='Portfolio-image-reveal-wrapper font-inter px-[10%] cursor-default'>
      <div className="Portfolio-image-reveal-container mt-[10vh] w-full">
        
        <div className="Portfolio-image-row" id="Portfolio-image-row-1">
          <div className="Portfolio-image-col">
            <div className="Portfolio-image-container Portfolio-image-right sm:!w-[500px]">
              <Image 
                src={IMG} 
                height={150} 
                width={700} 
                alt='photography by anomar' 
                className='Portfolio-image-revealer sm:!w-[500px]'/>
              <div className='Portfolio-image-p-tag sm:justify-center sm:items-center sm:w-[100%]'>
                <div className='flex flex-col w-full h-full'>
                  <h2 className='text-3xl italic font-extralight uppercase'>Hello,</h2>
                    <p className='flex flex-col '>
                      <span>My Name Is <span className='italic underline underline-offset-4'>TeeJ.</span> I am A </span>
                      <span className='italic font-extralight'>
                        <TypeWriterWrapper words={['Photographer', 'Designer', 'Producer', 'Content Creator']} />
                      </span>
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Portfolio-image-col"></div>
        </div>

        <div className="Portfolio-image-row-two sm:!w-[100vw]" id="Portfolio-image-row-2">
          <div className="Portfolio-image-col"></div>
          <div className="Portfolio-image-col-two h-[500px] w-screen flex flex-row justify-end sm:justify-center z-10">
            <div className="Portfolio-image-container-two Portfolio-image-left-two w-screen flex sm:flex-col sm:justify-center sm:items-start">

              <div className='w-[80vw] h-[300px] flex justify-end items-end flex-col relative pr-2'>

                <div className='sm:w-full sm:h-[60px] sm:flex sm:flex-row sm:items-center sm:justify-between flex flex-row justify-between  w-[80vw]'>
                  <div className='relative pt-[2px] overflow-hidden flex flex-col h-[50px] sm:h-[50px] pb-8 sm:pb-0 w-[35vw] sm:w-[35vw] gap-[2rem] items-start justify-start sm:justify-start '>
                    <div className='Portfolio-image-p-tag-two flex flex-row h-[275px] w-[30vw] sm:w-[35vw] sm:h-[50px] justify-start sm:justify-end items-start pt-1 pb-0'>
                      <div className='relative h-[60px] w-[10%] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] justify-center items-start sm:w-[100%]'>
                        <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                          <Image src={LINKEDIN} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                        </Link>
                      </div>
                      <div className='relative h-[60px] w-[10%] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] justify-center items-start sm:w-[100%]'>
                        <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                          <Image src={TWITTER} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                        </Link>
                      </div>
                      <div className='relative h-[60px] w-[10%] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] justify-center items-start sm:w-[100%]'>
                        <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                          <Image src={FACEBOOK} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                        </Link>
                      </div>
                      <div className='relative h-[60px] w-[10%] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] justify-center items-start sm:w-[100%]'>
                        <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                          <Image src={INSTAGRAM} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='Portfolio-button w-[11vw] sm:w-[125px] pb-[5px] flex justify-end items-end '>
                    <AnimatedButton toggleModal text="Hire Me!" border="#e5e7eb" color="#d0b20b"/>
                  </div>
                </div>
                  
                  <div className='h-[1px] w-full border-b border-slate-200 mb-[25px]'></div>
                  <div>
                    <h3 className="text-slate-200 text-4xl">
                      [aes·thet·ic]
                    </h3>
                  </div>
              </div>

              {/* <div className='relative h-[275px] w-[5vw] pt-[2px] overflow-hidden flex flex-col sm:h-[50px] pb-8 sm:pb-0 sm:w-[35vw] gap-[2rem] items-start justify-end sm:justify-between sm:items-start '>
                <div className='Portfolio-image-p-tag-two flex flex-col h-[275px] w-[5vw] sm:w-[35vw] sm:h-[50px] justify-end items-start pt-1 sm:pb-0 sm:flex-row'>
                  <div className='relative h-[60px] w-[35px] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                      <Image src={LINKEDIN} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                    </Link>
                  </div>
                  <div className='relative h-[60px] w-[35px] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                      <Image src={TWITTER} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                    </Link>
                  </div>
                  <div className='relative h-[60px] w-[35px] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                      <Image src={FACEBOOK} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                    </Link>
                  </div>
                  <div className='relative h-[60px] w-[35px] pt-[17px] sm:pt-[35px] overflow-hidden flex flex-col gap-[2rem] items-start sm:justify-center sm:items-start sm:w-[100%]'>
                    <Link className='h-[8vh] sm:h-[70px] w-[30px] sm:w-[25px] cursor-pointer' href="/">
                      <Image src={INSTAGRAM} alt="" className="h-full w-full flex justify-start items-start ease-in duration-500 transition-all delay-150 hover:translate-y-[-48px] text-[#a7a7a7] hover:text-inherit" />
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Portfolio-image-whitespace-img-revealer"></div>
    </div>
  );
};

export default PortfolioImageRevealer;