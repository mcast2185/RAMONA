"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Linkedin, Mail } from 'lucide-react';


const ContactInfo = () => {
  const ref = useRef(null);
  const router = useRouter();

  return (
    <div className="h-[100vh] w-[100vw] bg-transparent pr-[9vw] sm:pr-0">
      <div className='pt-[5vh] w-full sm:flex sm:flex-col'>
        <div className='flex flex-row items-center justify-end '>
          <p className="text-[2.5rem] sm:text-xl cursor-default font-PoiretOne text-[--yellow] sm:px-2">
            Reach out
          </p><div className='w-[9rem] sm:w-20 h-[3px] sm:h-[2px] bg-[--yellow] mt-[.5rem] ml-[2rem] sm:ml-0 sm:mr-0 sm:p-0'></div>
        </div>
        <div className='relative flex flex-col pr-[4rem] pl-[2rem] sm:pl-1 sm:pr-[2rem] sm:scale-[.5]'>
          <div className='h-[30vh] w-[90vw] sm:w-[100vw] flex flex-row justify-evenly sm:justify-center sm:items-center mb-[5rem]'>
            <div ref={ref} className=' cursor-default'>
              {/* <motion.div
                animate={titleAnimation}
                variants={contactTitleAnimation}
                initial="hidden"> */}
              <h1 className='text-gray-200 font-NotoSerifDisplay text-[11.5rem] sm:text-[9.5rem] -tracking-[.25rem] font-bold italic pr-4 cursor-default'>
                Say Hello
              </h1>
              {/* </motion.div> */}
            </div>
            <div className="flex w-[29vw] sm:w-[50vw] h-[30vh] items-end p-5 sm:p-1">
              <p className='font-Inter font-light text-xl leading-10 text-gray-200 sm:w-[45vw] sm:ml-[5vw] cursor-default'>
                Reimagine through artistic perspective. Set up a consultation.
              </p>
            </div>
          </div>
          <div className='relative h-[40vh] w-[100vw] flex flex-row  px-[4.5rem] sm:px-0 '>
            <div className="w-[30vw] mt-[4.5rem] sm:scale-[.8]">
              <span onClick={() => router.push("/contact-email")} className='group/arrows cursor-pointer h-[14rem] relative w-[14rem] border 
                border-gray-300 rounded-full flex justify-center items-center transform hover:scale-90 ease-in-out duration-700 hover:border-[--yellow]'>
                <div className=' h-[80px] w-[90px] overflow-hidden flex justify-center flex-col '>
                  <span>
                    <Mail className="w-[90px] h-[80px] text-gray-200 group-hover/arrows:text-[--yellow] transform ease-out duration-[850ms]" />
                  </span>
                </div>
              </span>
            </div>
            <div className='absolute right-[10vw] sm:right-[5vw] flex flex-row w-[50vw] sm:w-[20vw] justify-evenly m-[5rem]'>
              <div className='flex flex-col justify-between'>
                <h2 className='font-Inter font-bold text-md text-gray-200 cursor-default'>
                  Social Media
                </h2>
                <div className='flex flex-col text-gray-200 py-4'>
                  <Link href="/" className='group/link flex flex-row items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-instagram group-hover/link:text-[--yellow] transform ease-out duration-[150ms]">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <p className='group-hover/link:drop-shadow-xl shadow-black drop-shadow transform 
                      ease-out duration-[850ms] px-4 font-Inter font-light text-xl leading-10 text-gray-200'>
                      Instagram
                    </p>
                  </Link>
                  <Link href="/" className='group/link flex flex-row items-center'>
                    <Linkedin className="group-hover/link:text-[--yellow] transform ease-out duration-[150ms]" />
                    <p className='group-hover/link:drop-shadow-xl shadow-black drop-shadow transform 
                      ease-out duration-[850ms] px-4 font-Inter font-light text-xl leading-10 text-gray-200'>
                      LinkedIn
                    </p>
                  </Link>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <h2 className='font-Inter font-bold text-md text-gray-200 cursor-default'>
                  Contact Us
                </h2>
                <div className='flex flex-col text-gray-200 py-4'>
                  <p className='hover:drop-shadow-3xl shadow-black drop-shadow px-4 font-Inter font-light text-xl leading-10 text-gray-200 cursor-default'>
                    design123@gmail.com
                  </p>
                  <p className='hover:drop-shadow-3xl shadow-black drop-shadow px-4 font-Inter font-light text-xl leading-10 text-gray-200 cursor-default'>
                    (555)555-5555
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;