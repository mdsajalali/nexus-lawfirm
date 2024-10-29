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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-[560px] rounded-md bg-primary p-5 md:p-[50px]">
        <button
          onClick={onClose}
          className="absolute right-4   top-2 text-[20px] text-white md:text-2xl"
        >
          <IoMdClose />
        </button>
        <h1 className="pb-5 text-2xl font-semibold md:pb-10 md:text-[40px]">
          Get in Touch with Us
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-[10px] md:flex-row md:gap-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded border p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="mt-1 w-full rounded border p-3 font-opensans text-[12px] text-black outline-none md:mt-0 md:text-[14px]"
              required
            />
          </div>

          <div className="mb-4 flex flex-col">
            <input
              type="text"
              placeholder="Enter the subject of your message"
              className="rounded border p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <textarea
              placeholder="Type your message here"
              className="rounded border p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
              required
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded border bg-white px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-primary hover:text-white md:px-7 md:text-[18px]"
          >
            Request consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleConsultationModal;
