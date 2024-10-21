import { MouseEvent, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleConsultationModal = ({
  isOpen,
  onClose,
}: ScheduleConsultationModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-[9999]"
      onClick={handleOverlayClick}
    >
      <div className="bg-primary rounded-md p-5 md:p-[50px] max-w-[560px] relative">
        <button
          onClick={onClose}
          className="absolute top-2   right-4 text-white text-[20px] md:text-2xl"
        >
          <IoMdClose />
        </button>
        <h1 className="text-2xl md:text-[40px] font-semibold md:pb-10 pb-5">
          Get in Touch with Us
        </h1>
        <form>
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="border rounded p-3 w-full font-opensans outline-none text-[12px] md:text-[14px] text-black"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="border rounded p-3 w-full font-opensans outline-none text-[12px] mt-1 md:mt-0 md:text-[14px] text-black"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Enter the subject of your message"
              className="border rounded p-3 font-opensans outline-none text-[12px] md:text-[14px] text-black"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              placeholder="Type your message here"
              className="border rounded p-3 font-opensans outline-none text-[12px] md:text-[14px] text-black"
              required
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white rounded border text-black transition-all hover:bg-primary py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans"
          >
            Request consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleConsultationModal;
