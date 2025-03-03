"use client";

import React, { useEffect, useRef } from 'react';


const Mouse = () => {
  const Cursor = useRef<any>(null);
  const secondCursor = useRef<any>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  });

  useEffect(() => {
    document.addEventListener("mousemove", event => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef!.current!.mouseX = mouseX - secondCursor!.current!.clientWidth / 2;
      positionRef!.current!.mouseY = mouseY - secondCursor!.current!.clientHeight / 2;

      Cursor!.current!.style!.transform = `translate3d(${mouseX -
        Cursor!.current!.clientWidth / 2}px, ${mouseY -
        Cursor!.current!.clientHeight / 2}px, 0)`;
    });

    return () => { };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef!.current!.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
        key } = positionRef!.current;

      if (!destinationX || !destinationY) {
        positionRef!.current!.destinationX = mouseX;
        positionRef!.current!.destinationY = mouseY;
      } else {
        positionRef!.current!.distanceX = (mouseX - destinationX) * .3;
        positionRef!.current!.distanceY = (mouseY - destinationY) * .3;

        if (Math.abs(positionRef!.current!.distanceX) + Math.abs(positionRef!.current!.distanceY) < .1) {
          positionRef!.current!.destinationX = mouseX;
          positionRef!.current!.destinationY = mouseY;
        } else {
          positionRef!.current!.destinationX += distanceX;
          positionRef!.current!.destinationY += distanceY;
        }
      };

      secondCursor!.current!.style!.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <React.StrictMode>
      <div>
        <div className="main-cursor " ref={Cursor}>
          <div className="main-cursor-background" />
        </div>
        <div className="secondary-cursor" ref={secondCursor}>
          <div className="cursor-background" />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Mouse;