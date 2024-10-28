import { BiMessage, BiPhone } from "react-icons/bi";
import {motion} from "framer-motion"

const HeroSidebar = () => {
  return (
    <div className="  hidden md:flex items-center gap-1 z-[9999] flex-col fixed bottom-4 right-3">
      <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} className="bg-primary p-2 hover:bg-white transition-all cursor-pointer rounded-full ">
        <BiPhone size={22} className="text-secondary" />
      </motion.div>
      <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="bg-primary p-2 hover:bg-white transition-all cursor-pointer rounded-full ">
        <BiMessage size={22} className="text-secondary" />
      </motion.div>
    </div>
  );
};

export default HeroSidebar;
