const Hero = () => {
  return (
    <div className="lg:pt-[153px] md:pt-[100px] md:py-0 py-[65px] md:text-start text-center max-w-[720px]">
      <h1 className="text-[28px] md:text-[64px] font-bold leading-[42px] md:leading-[96px]">
        Your Legal Partners for Justice and Fairness
      </h1>
      <p className="text-[13px] md:text-2xl leading-[19.5px] md:leading-[36px] font-opensans pt-4 md:pt-8 pb-[56px]">
        Delivering exceptional legal services with expertise and compassion,
        tailored to meet your unique needs.
      </p>
      <div className="flex items-center flex-col md:flex-row md:justify-start justify-center gap-3 md:gap-10">
        <button className="bg-transparent rounded border text-white transition-all hover:bg-white py-[14px] px-16 md:px-7 hover:text-black text-[14px] md:text-[18px] font-semibold font-opensans">
          Start a case
        </button>
        <button className="bg-transparent rounded border text-white transition-all hover:bg-white py-[14px] px-16 md:px-7 hover:text-black text-[14px] md:text-[18px] font-semibold font-opensans">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
