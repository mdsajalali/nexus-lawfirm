import { useState } from "react";
import ScheduleConsultationModal from "../components/ScheduleConsultationModal";
import { motion } from "framer-motion";

const ScheduleConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#070D11] px-4 py-10 text-white md:py-[70px]   xl:px-0">
      <div className="flex flex-wrap items-center justify-evenly gap-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold lg:text-[40px]"
        >
          Schedule a consultation today!
        </motion.h1>
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onClick={() => setIsOpen(true)}
          className="rounded border bg-white px-7 py-[14px] font-opensans text-[14px]   font-semibold text-black transition-all hover:bg-[#162834] hover:text-white md:text-[18px]"
        >
          Book your consultation
        </motion.button>
      </div>
      <ScheduleConsultationModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ScheduleConsultation;
