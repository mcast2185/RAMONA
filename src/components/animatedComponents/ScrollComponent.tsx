"use client";

import gsap from 'gsap';
import React, { ReactElement, ReactHTMLElement } from 'react';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const ScrollComponent = ({children}: HTMLCollection | any) => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  useGSAP(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.4,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = () => {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    };


    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);

    ScrollTrigger.create({
      trigger: ".Portfolio-image-p-tag-two",
      start: "top top",
      end: "50% top",
      onUpdate: (self) => {
        const progress = self.progress;
        const opacity = 4.5 * progress;
        gsap.to(".header-container", {
          opacity: -opacity + 1,
        });
      },
    });
  
    ScrollTrigger.create({
      trigger: ".imageScrollAnimation-container",
      start: "top top",
      end: "top top",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(".header-container", {
          z: -progress + 20,
        });
      },
    });
  
    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });
  
    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top 40%",
      endTrigger: ".header-content",
      end: "bottom bottom",
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".revealer", {
          scale: 0, 
          opacity: 0
        });
        gsap.to(".animation-reveal-1", {rotation});
      }
    });

    ScrollTrigger.create({
      trigger: ".hero",
      start: "top bottom",
      // endTrigger: ".info",
      end: "bottom 20%",
      onUpdate: (self) => {
        const y = 17 * self.progress;
        gsap.to(".top-border-animation", {
          y: `${-37 + 1.75 * y}vh`,
          duration: 0,
          ease: "none",
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-content",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const left = 120 * progress;
        const opacity = 1 * progress;
        gsap.to(".animation-reveal-1", {
          left: `${left}%`,
          ease: "none",
          duration: 1.25,
          opacity: opacity
        });
        gsap.to(".hero", {
          opacity: `${-opacity + 1}`
        });
      }
    });
    
    ScrollTrigger.create({
      start: "top top",
      endTrigger: ".whitespace",
      scrub: 1, 
      end: "top 35%",
      onUpdate: (self) => {
        const x = 125 * self.progress;
        gsap.to(".header-images", {
          duration: 3.75, 
          x: `-${x}px`, 
          ease: (t) => Math.min(1, 1.001 - 2 ** (-13 * t)),
        });
      }
    });

    ScrollTrigger.create({
      start: "top top",
      endTrigger: ".whitespace",
      scrub: 1, 
      end: "top 35%",
      onUpdate: (self) => {
        const x = 75 * self.progress;
        gsap.to(".header-images-2", {
          duration: 3.75, 
          x: `${ -425 + x}px`, 
          ease: (t) => Math.min(1, 1.001 - 2 ** (-13 * t)),
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".header-content",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false
    });
  
    ScrollTrigger.create({
      trigger: ".whitespace",
      start: "top top",
      // endTrigger: ".whitespace",
      end: "50% bottom",
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const y = 150 * progress;
        const opacity = 1 * progress;
        gsap.to(".animation-revealer-1-content", {
          opacity: opacity,
          y: y,
          duration: 0,
          ease: "none",
          delay: .75,
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".whitespace",
      start: "top 50%",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const scaleX = 15 * self.progress;
        const scaleY = 8.5 * self.progress;
        gsap.to(".revealer", {
          scaleX: scaleX,
          scaleY: scaleY,
          ease: "none",
          duration: 0,
          opacity: 1
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".whitespace",
      start: "40% 50%",
      // endTrigger: ".whitespace",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const opacity = 1.5 * progress;
        const x = 0 * progress;
        gsap.to(".animation-revealer-1-side-text .reveal-text", {
          x: `${x}`,
          opacity: opacity,
          duration: 0.5,
          ease: "none",
          delay: .75,
          stagger: .55
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".header-content-2",
      start: "top top",
      endTrigger: ".whitespace-2",
      end: "bottom top",
      onUpdate: (self) => {
        const opacity = 2 * self.progress;
        gsap.to(".top-border-animation", {
          opacity: `${-opacity + 1}`
        })
      }
    });

    ScrollTrigger.create({
      trigger: ".header-content-2",
      start: "top bottom",
      end: "75% 110%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const y = 600 * progress;
        gsap.to(".animation-revealer-1-header .reveal-text-header", {
          y: `-${y}`,
          duration: 0,
          ease: "sine.out",
          stagger: .45
        });
      }
    });
  });

  return (
    <div>{children}</div>
  );
};

export default ScrollComponent;
