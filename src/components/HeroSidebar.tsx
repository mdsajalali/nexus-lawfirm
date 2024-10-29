import { useEffect, useState } from "react";
import { BiMessage, BiPhone, BiArrowToTop } from "react-icons/bi";
import { motion } from "framer-motion";

const HeroSidebar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-3 z-[9999] flex flex-col items-center gap-1">
      {showScrollTop && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white"
          onClick={scrollToTop}
        >
          <BiArrowToTop size={22} className="text-secondary" />
        </motion.div>
      )}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white"
      >
        <BiPhone size={22} className="text-secondary" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white"
      >
        <BiMessage size={22} className="text-secondary" />
      </motion.div>
    </div>
  );
};

export default HeroSidebar;
