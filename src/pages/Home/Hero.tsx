import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[720px] py-[65px] text-center md:py-0 md:pt-[100px] md:text-start lg:pt-[153px]">
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[28px] font-bold leading-[42px] md:text-[64px] md:leading-[96px]"
      >
        Your Legal Partners for Justice and Fairness
      </motion.h1>
      <motion.p
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-[56px] pt-4 font-opensans text-[13px] leading-[19.5px] md:pt-8 md:text-2xl md:leading-[36px]"
      >
        Delivering exceptional legal services with expertise and compassion,
        tailored to meet your unique needs.
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start md:gap-10"
      >
        <Link to="/attorneys">
          <button className="rounded border bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-white transition-all hover:bg-white hover:text-black md:px-7 md:text-[18px]">
            Start a case
          </button>
        </Link>
        <Link to="/criminal-law">
          <button className="rounded border bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-white transition-all hover:bg-white hover:text-black md:px-7 md:text-[18px]">
            Learn more
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
