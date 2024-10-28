import { useState } from "react";
import ScheduleConsultationModal from "../components/ScheduleConsultationModal";
import {motion} from "framer-motion"

const ScheduleConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#070D11] text-white py-10 md:py-[70px] xl:px-0   px-4">
      <div className="flex flex-wrap gap-2 items-center justify-evenly">
        <motion.h1 initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="lg:text-[40px] text-2xl font-semibold">
          Schedule a consultation today!
        </motion.h1>
        <motion.button initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          onClick={() => setIsOpen(true)}
          className="bg-white rounded border text-black transition-all hover:bg-[#162834] py-[14px]   px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans"
        >
          Book your consultation
        </motion.button>
      </div>
      <ScheduleConsultationModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ScheduleConsultation;
