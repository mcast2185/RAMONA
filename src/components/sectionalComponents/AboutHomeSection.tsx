import React from 'react';
import Image from 'next/image';

import AnimatedButton from '../../components/styledComponents/AnimatedButton';
import DISCOVER from "../../../public/images/discover.svg";

import styles from "../../styles/homecard.module.scss";


const AboutHomeSection = () => {
  return (
    <div className=''>
      <section className='header-content-2 px-[4.6em]' aria-details='about section'>
        <div id="about" className="relative min-h-screen w-[100vw] h-[150vh] sm:mb-0 sm:px-[10vw] pr-[20vw] px-[10vw]">
          <div className='relative mt-[10vh] sm:mt-2 mb-4 sm:mb-0 h-[150vh] 
            sm:h-[75%] w-[70vw] bg-[#fff] mx-auto flex flex-col justify-evenly sm:pt-8'>
            <div className=' w-full lg:mx-auto sm:px-0 sm:mb-[4vh] flex flex-col  leading-[9rem] sm:scale-[.95]'>
              <div className='sm:h-[5vh] h-[25vh] sm:leading-[1] mt-[5vh] cursor-default 
                flex flex-col justify-start items-center lg:w-[100%] lg:tracking-[.19rem] lg:leading-[9rem]'>
                <p className="font-PoiretOne text-[12.5px] tracking-widest font-bold">ANOMAR</p>
                <div style={{ position: 'relative', flexDirection: 'column' }}>
                  <div className=' relative flex flex-row h-full w-full tracking-[1.55] pr-[25px] sm:pr-0'>
                    <h1 className=' font-Imbue sm:text-[1.85rem] md:text-[5rem] text-[2.75rem] font-[500] italic'>
                      AESTHETIC
                    </h1>
                    <div>
                      <span className="flex flex-row h-full  px-4 text-[2.2rem] decoration-slate-200 tracking-[1] hover:scale-[1.1]
                        decoration-2 underline-offset-[6px] font-PinyonScript font-thin sm:text-[1.2rem] md:text-[1.8rem] text-[--yellow] hover:duration-[1500ms] hover:ease-out">
                        {" "}Driven{" "}
                      </span>
                    </div>
                    <h1 className=' font-Imbue text-[2.75rem] sm:text-[1.85rem] md:text-[2rem] font-[500] italic'>
                      RESULTS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-full h-[70%] py-[5vh] sm:py-0 sm:my-0 flex flex-col'>
              <div className='w-full h-[60%] flex flex-row sm:flex-col sm:mx-2 sm:px-auto sm:justify-center pt-2'>
                <div className="flex flex-col w-[49.5%] h-full sm:hidden sm:h-0 sm:w-0 justify-start">
                  <div className='cursor-default pl-[10rem] sm:px-auto pr-[2rem] sm:w-full sm:py-1 flex sm:px-auto'>
                    <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-full">
                      Images carefully photographed in real-time and crafted into artful depictions of light varying through
                      <span className='font-bold text-slate-800'> thoughtful perspective.</span>
                    </p>
                  </div>
                  <div className='h-full w-full flex sm:hidden sm:h-0 sm:w-0 mb-4 scale-75 justify-center'>
                    <div>
                      <div className='w-full font-PoiretOne text-[12.5px] tracking-widest font-bold'>
                        <div className={styles.homeAboutWorkshop}>
                          <Image alt="" src={DISCOVER} className="transform will-change-transform 
                            hover:scale-[.95] ease-out duration-[750ms] py-[20px]" />
                          <span className={styles.homeAboutWorkshopLeft}>VISION</span>
                          <span className={styles.homeAboutWorkshopRight}>VISION</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-[#6b7280] h-full pt-[25%] w-[1px] sm:hidden sm:h-0 sm:w-0 '>

                </div>
                <div className=' w-[49.5%]'>
                  <div className='cursor-default px-4 sm:px-0 sm:w-full sm:py-1 flex 
                    sm:px-auto flex-col justify-start sm:justify-center sm:items-center'>
                    <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%]">
                      We are a design company focused on <span className="underline decoration-[--yellow]">providing</span> your
                      business a unique, artistic allure. The art is inspired by the explored manipulation of light,
                      capturing its fluidity on a sleek metallic canvas.
                    </p>
                    <p className="font-PoiretOne text-[12.5px] tracking-wide font-medium text-gray-500 w-[80%] pt-[20px]">
                      It is through a formless display of light and color that these collective images establish a wondrous presence in the space they occupy.
                    </p>
                    <p className="font-PoiretOne text-[12.5px] tracking-wide 
                          font-medium text-gray-500 w-[80%] pt-[20px] h-full mt-[20%] sm:mt-5">
                      Each item is proudly created to ignite a sense of wonder, similar to our<span className='font-bold text-slate-800'> journey through imagination.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-center cursor-pointer'>
                <AnimatedButton toggleModal text="Hire Me!" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>   
  );
};

export default AboutHomeSection;