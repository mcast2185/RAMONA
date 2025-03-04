import HeaderContent from '@/components/sectionalComponents/HeaderContent';
import SpaceBackground from '../components/animatedComponents/SpaceBackground';
import AboutHomeSection from '../components/sectionalComponents/AboutHomeSection';
import ImgScrollAnimation from '../components/animatedComponents/ImgScrollAnimation';
import HomeSectionTransition from '../components/sectionalComponents/HomeSectionTransition';
import PortfolioImageRevealer from '../components/sectionalComponents/PortfolioImageRevealer';


export default function Home() {

  return (
    <div className="w-screen bg-transparent relative cursor-default">
      <SpaceBackground />
      <div className='z-10 '>
        <div className='top-border-animation w-screen h-[20vh] bg-black z-0 translate-y-[-20vh] fixed top-0'></div>
        <section className="hero bg-[url(../../public/images/photography/three.jpg)]" aria-details='hero section'>
          <h1 className='uppercase font-normal tracking-[-4px] text-[200px] sm:text-[100px]'>
            ANOMAR
          </h1>
        </section>
        <section className="info font-inter" aria-details='header section'>
          <div className="header-rows">
            <div className="header-row flex flex-row py-0 px-[2em] sm:px-[1em] w-full h-[250px] sm:h-[175px] text-[#fff]">
              <h1 id="h-1" className="sa-h1 font-[700] sm:!text-[70px]">inspired</h1>
              <h3 id="h-3" className="sa-h1 font-Megrim italic sm:text-[16px] uppercase">design</h3>
            </div>
            <div className="header-row flex flex-row py-0 px-[2em] sm:px-[1em] w-full h-[250px] sm:h-[175px] text-[#fff]">
              <h3 id="h-4" className="sa-h1 font-inter font-[700] tracking-[.25rem] sm:tracking-[.10rem] uppercase sm:text-[16px]">design</h3>
              <h1 id="h-2" className="sa-h1 font-Megrim italic -skew-x-12 font-[300] sm:!text-[60px]">perspective</h1>
            </div>
          </div>
          <PortfolioImageRevealer />
        </section>
        <HeaderContent />
        <ImgScrollAnimation />
        <section className="whitespace bg-gradient-to-b from-black to-transparent sm:hidden sm:h-0 sm:w-0"></section>
        <HomeSectionTransition />
        <AboutHomeSection />
      </div>
    </div>
  );
};