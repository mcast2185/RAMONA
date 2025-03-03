'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

import FormTest from '../forms/formTest';
import { Background } from './modalComponents';
import { backgroundVariants } from '../variants/modalVariants';


const Modal = ({showModal, toggleModal, serviceName}) => {
  const modalRef = useRef(null);
  const formRef = useRef(null);

  const closeModal = (e) => {

		formRef.current !== null && modalRef.current;
		
		if (e.target == modalRef.current.firstChild) {
			toggleModal();
		} else {
			e.target == formRef.current.firstChild || 
			formRef.current.firstChild.children[0] &&
			console.log("Toggle Successful.");
		}
  };


  useEffect(() => {
		document.querySelector("#modalID")?.addEventListener("mousedown", closeModal);
		document.getElementById("spin")?.remove();
    return ()=> document.querySelector("#modalID")?.removeEventListener('mousedown', closeModal);
  }, [closeModal]);


  return (
    <AnimatePresence>
      {showModal && (
				<div id="modalID" ref={modalRef}>
					<Background
						variants={backgroundVariants}
						animate="animate"
						initial="initial"
						exit={{
							opacity: 0,
						}}>
						<div ref={formRef}>	
							<FormTest serviceName={serviceName}/>
						</div>
							{/* <CloseModalButton aria-label="Close modal" onClick={toggleModal} /> */}
					</Background>
				</div>
      )}
    </AnimatePresence>
  );
};

export default Modal;