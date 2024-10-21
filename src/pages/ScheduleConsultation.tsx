import { useState } from "react";
import ScheduleConsultationModal from "../components/ScheduleConsultationModal";

const ScheduleConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#070D11] text-white py-10 md:py-[70px] xl:px-0   px-4">
      <div className="flex flex-wrap gap-2 items-center justify-evenly">
        <h1 className="lg:text-[40px] text-2xl font-semibold">
          Schedule a consultation today!
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white rounded border text-black transition-all hover:bg-[#162834] py-[14px] px-10 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans"
        >
          Book your consultation
        </button>
      </div>
      <ScheduleConsultationModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ScheduleConsultation;
