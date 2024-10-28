import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className="lg:pt-[153px] md:pt-[100px] md:py-0 py-[65px] md:text-start text-center max-w-[720px]">
      <motion.h1 
      initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
      className="text-[28px] md:text-[64px] font-bold leading-[42px] md:leading-[96px]">
        Your Legal Partners for Justice and Fairness
      </motion.h1>
      <motion.p initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="text-[13px] md:text-2xl leading-[19.5px] md:leading-[36px] font-opensans pt-4 md:pt-8 pb-[56px]">
        Delivering exceptional legal services with expertise and compassion,
        tailored to meet your unique needs.
      </motion.p>
      <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1}}
              viewport={{ once: true }} className="flex items-center flex-col md:flex-row md:justify-start justify-center gap-3 md:gap-10">
        <Link to="/attorneys">
          <button className="bg-transparent rounded border text-white transition-all hover:bg-white py-[14px] px-16 md:px-7 hover:text-black text-[14px] md:text-[18px] font-semibold font-opensans">
            Start a case
          </button>
        </Link>
        <Link to="/criminal-law">
          <button className="bg-transparent rounded border text-white transition-all hover:bg-white py-[14px] px-16 md:px-7 hover:text-black text-[14px] md:text-[18px] font-semibold font-opensans">
            Learn more
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
