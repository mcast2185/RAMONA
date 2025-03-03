const HomeSectionTransition = () => {
  return (
    <div className='sm:hidden sm:h-0 sm:w-0 sm:bg-none sm:transparent'>
      <section className="pinned" aria-details='scroll-about section'>
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
        <div className="animation-reveal-1">
          <div className="animation-revealer-1"></div>
          <div className="animation-revealer-2"></div>
        </div>
        <div className="animation-reveal-2">
          <div className="animation-revealer-1">
            <div className='animation-revealer-1-content'>
              <h1 className='animation-revealer-1-header text-black text-[180px]'>
                <p className='reveal-text-header text-black'>D</p>
                <p className='reveal-text-header text-black'>E</p>
                <p className='reveal-text-header text-black'>S</p>
                <p className='reveal-text-header text-black'>I</p>
                <p className='reveal-text-header text-black'>G</p>
                <p className='reveal-text-header text-black'>N</p>
              </h1>
              <div className='animation-revealer-1-side-text'>
                <p className='reveal-text text-[62px] pl-4 text-black'>A</p>
                <p className='reveal-text text-[62px] pr-4 text-black'>N</p>
                <p className='reveal-text text-[62px] pl-4 text-black'>O</p>
                <p className='reveal-text text-[62px] pr-4 text-black'>M</p>
                <p className='reveal-text text-[62px] pl-4 text-black'>A</p>
                <p className='reveal-text text-[62px] pr-4 text-black'>R</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSectionTransition;