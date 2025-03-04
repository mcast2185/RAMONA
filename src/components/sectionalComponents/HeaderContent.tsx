const HeaderContent = () => {
  return (
    <section className='header-content relative w-full h-[80%] flex flex-row justify-between bg-black text-white z-10 sm:hidden sm:h-0 sm:w-0' aria-details='mission statement section'>
      <div className='w-[80vw] flex flex-row relative mx-[5%] pr-2'>
        <div className=' flex items-end flex-col'>

          <p className="sa-p italic ml-[-5%] z-[150]">
            On a constant search to leave an artistic imprint on
            the world by introducing a unique perspective on art & design.
          </p>
          <div className='h-[1px] w-full border-b flex items-start border-slate-200 absolute px-[10%] bottom-0 '></div>
        </div>
      </div>
    </section>
  );
};

export default HeaderContent;