import { BiMessage, BiPhone } from "react-icons/bi";
import { motion } from "framer-motion";

const HeroSidebar = () => {
  return (
    <div className="  fixed bottom-4 right-3 z-[9999] hidden flex-col items-center gap-1 md:flex">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white "
      >
        <BiPhone size={22} className="text-secondary" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white "
      >
        <BiMessage size={22} className="text-secondary" />
      </motion.div>
    </div>
  );
};

export default HeroSidebar;
