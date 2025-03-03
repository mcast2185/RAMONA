"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { formVariant } from '../variants/modalVariants';


const Result = () => {
  return (
    <p className='font-PoiretOne'>
      Your message was successfully sent.
    </p>
  );
};


const FormTest = (serviceName: string) => {
	const [result, showResult] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    
		emailjs.sendForm(
      'service_project-x', 
      'template_kfhlp09', 
      e.target, 
      'OZTTUDEJQcLGrsGa3')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: Response) => {
        console.log(error.text);
      }
		);

    e!.target.reset();
    showResult(true);
  };

  return (
    <div className='p-clamp rounded-[30px] w-[50vw] flex justify-center py-16'>
			<div className='w-full max-w-[1300px] my-0 mx-auto py-0 px-[50px] sm:py-0 sm:px-7'>
				<div className='flex justify-center px-[-15px] pb-[-15px] pt-0 flex-wrap items-center'>
					<div className='mb-[15px] py-0 px-[15px] flex flex-[1] max-w-[80%]
            flex-col sm:!max-w-[100%] basis-full justify-center items-center h-[100vh]'>
            <motion.form
							variants={formVariant}
							initial="initial"
							animate="animate"
							exit="exit"
							className='max-w-[540px] sm:w-[55vw] pt-0 w-[80%]
              h-[60vh] sm:p-3 '
              method="POST"
              onSubmit={sendEmail}>
              <div className='flex justify-center flex-col items-stretch mb-5'>
                <label className="inline-block text-base mb-1 text-[#dcdcdc]">
                  Name:
                </label>
                <br />
                <input
                  className='bg-transparent pl-[10px] text-[#fff] 
									rounded-sm h-[40px] w-full border-x-[none] border-t-[none] 
									border-b-2 border-b-white border-solid text-base font-inter decoration-transparent'
                  type="text"
                  placeholder="Full name here"
                  name="fullName"
                  required />
              </div>
              <div className='flex justify-center flex-col items-stretch mb-5'>
                <label className="inline-block text-base mb-1 text-[#dcdcdc]">
                  Phone Number:
                </label>
                <br />
                <input
                  type="tel"
                  className='bg-transparent text-[#fff] border-b-2
									border-x-[none] border-t-[none] border-b-white font-inter
                  border-solid text-base rounded-sm h-[40px] w-full pl-[10px] decoration-transparent'
                  placeholder="Number here"
                  name="phone"
                  required />
              </div>
              <div className='flex justify-center flex-col items-stretch mb-5'>
                <label className="inline-block text-base mb-1 text-[#dcdcdc]">
                  Email:
                </label>
                <br />
                <input
                  className='bg-transparent pl-[10px] text-[#fff] 
                  rounded-sm h-[40px] w-full border-x-[none] border-t-[none] border-b-2 
                  border-b-white border-solid text-base font-inter decoration-transparent'
                  type="text"
                  placeholder="Email here"
                  name="email"
                  required />
              </div>
              <div className='flex justify-center flex-col items-stretch mb-5'>
                <label className="inline-block text-base mb-1 text-[#dcdcdc]">
                  Message:
                </label>
                <br />
                <textarea
                  className='bg-transparent pl-[10px] text-[#fff] rounded-sm h-[40px] w-full border-x-[none] 
                  border-t-[none] border-b-2 border-b-white border-solid text-base font-inter decoration-transparent'
                  placeholder="Enter message here"
                  name="message"
                  required />
              </div>
							<motion.button 
								type="button"
								className='bg-[#FAFDFD] w-full text-xs tracking-[.75px] uppercase
								rounded-3xl shadow-button text-center text-[#3b3b3b] font-bold cursor-pointer 
								hover:bg-[#dedede] [transition:background-color_0.4s_ease-in] mt-8 h-10 leading-7'
								whileHover={{ scale: 1.15 }}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 17
								}}>
								Submit
							</motion.button>
							<div className='test'>
								{result && <Result/>}
							</div>
            </motion.form>
					</div>
				</div>
			</div>
		</div>
  );
};

export default FormTest;