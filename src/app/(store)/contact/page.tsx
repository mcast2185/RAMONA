"use client";

import Image from 'next/image';
import React, {useState} from 'react';
import { motion } from 'framer-motion';

import Modal from '@/components/modal/modal';
import Mouse from '@/components/sectionalComponents/Mouse';
import AnimatedButton from '@/components/styledComponents/AnimatedButton';
import OscillatingTxt from '@/components/styledComponents/OscillatingTxt';

import CAMERA from '../../../public/images/anomar/camera1.png';
import SpaceBackground from '@/components/animatedComponents/SpaceBackground';

const Contact = () => {
  const [listName, setListName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const serviceList = [
    "Art & Consulting", 
    "Photography Services", 
    "Wedding Services", 
    "Events & Others"
  ];


  const toggleModal = (serviceName: string) => {
    setListName(serviceName)
    setShowModal(!showModal);
    showModal && setListName('');
  };

  return (
    <div>
      <Mouse/>
      <div className='absolute top-0 left-0 z-10'>
      </div>
      <main>
        {/* possible space bg here */}
        <SpaceBackground/>
        <section className='section  bg-opacity-[0.5] z-0'>
          <div className='background lg:flex sm:flex bg-[#f4effe] w-[40vw]
            absolute bottom-0 right-[12vw] sm:right-0 top-0 -z-10 max-h-screen'/>
          <div className='mx-auto h-[100vh] overflow-hidden sm:max-w-[585px]'>
            <div className='relative flex flex-row sm:mx-auto h-full
              justify-start sm:flex-col gap-x-8 text-center sm:items-center sm:text-left'>
              <div className='contact-synopsis w-[60vw] sm:w-[100vw] sm:flex-1 
                sm:pt-12 sm:pl-0 pl-[10rem] flex-col flex items-center justify-center'> 
                <div className='relative flex mt-[3rem] cursor-default
                  pt-[5vh] sm:mt-0 sm:mb-[80px] sm:pr-0 sm:py-0'>
                  <h1 className="Gallery-two scale-x-[.9] scale-y-[.8] relative outline outline-1 
                    stroke-black stroke-2 tracking-[-0.4rem] text-[rgb(0,0,0,.9)] text-[11.52rem] px-auto
                    leading-[10.5rem] flex flex-row font-medium font-AbrilFatface sm:text-[6.52rem]">
                    Contact
                    <span className='flex justify-end'>
                      {" "} Us
                    </span> 
                  </h1>
                </div>
                <div className='pt-[5%] sm:pt-0'>
                  <OscillatingTxt/>
                </div>
                <div className='w-[20vw] sm:w-[70vw] px-auto flex justify-center'>
                  <div className="w-[100%] px-auto mt-8 sm:mt-0">
                    <motion.ul className="px-auto flex flex-col justify-center items-center 
                      rounded-md sm:scale-[.7] w-full">
                      {serviceList.map((serviceName, index) => (
                        <motion.li key={index} className='list-element flex 
                          cursor-pointer py-1 w-full justify-center items-center m-[2px]'>
                          <AnimatedButton toggleModal={() => toggleModal(serviceName)} text={serviceName}/>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
              <div className='relative w-[40vw] flex flex-row '>
                <div className='w-full relative sm:hidden sm:w-0 sm:h-0'>
                  <Image src={CAMERA} className="w-[35vw] h-[85vh] absolute bottom-0 right-[14vw]" alt='Camera model image'/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal showModal={showModal} toggleModal={() => toggleModal(listName)} serviceName={listName}/>
      </main>
    </div>
  );
};

export default Contact;