import React from 'react';
import Image from 'next/image';


import IMG1 from "../../../public/images/photography/seven.jpg";
import IMG2 from "../../../public/images/photography/three.jpg";
import IMG3 from "../../../public/images/photography/twenty.jpg";
import IMG4 from "../../../public/images/photography/twenty-one.jpg";
import IMG5 from "../../../public/images/shop_images/jellyfishLights.jpg";
import IMG6 from "../../../public/images/shop_images/loudLights.jpg";
import IMG7 from "../../../public/images/shop_images/trippyLights.jpg";
import IMG8 from "../../../public/images/shop_images/tunnelLights.jpg";


const ImgScrollAnimation = () => {

  return (
    <div>
      <section className="imageScrollAnimation-container flex flex-col scroll-smooth sm:hidden sm:h-0 sm:w-0 sm:bg-none sm:text-transparent">
        <div className="header-images scroll-smooth">
          <div className="sa-img-wrapper">
            <Image src={IMG1} alt="" className="sa-image"  />
          </div>
          <div className="sa-img-wrapper">
            <Image src={IMG2} alt="" className="sa-image"  />
          </div>
          <div className="sa-img-wrapper">
            <Image src={IMG3} alt="" className="sa-image"  />
          </div>
          <div className="sa-img-wrapper">
            <Image src={IMG4} alt="" className="sa-image"  />
          </div>
        </div>
        <div className="header-images-2 scroll-smooth">
          <div className="sa-img-wrapper">
            <Image src={IMG7} alt="" className="sa-image"  />
          </div>
          <div className="sa-img-wrapper">
            <Image src={IMG6} alt="" className="sa-image"  />
          </div>
          <div className="sa-img-wrapper">
            <Image src={IMG5} alt="" className="sa-image"  />
          </div>
          <div className="sa-img-wrapper">
            <Image src={IMG8} alt="" className="sa-image"  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImgScrollAnimation;