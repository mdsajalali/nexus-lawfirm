import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";

const SocialContact = () => {
  return (
    <div className="pb-10 md:pb-[100px]">
      <div className="flex flex-wrap items-center justify-evenly gap-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold md:text-[40px]"
        >
          Connect with social media
        </motion.h1>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <BsTwitterX
            size={20}
            className="cursor-pointer transition-all hover:text-secondary"
          />
          <BsLinkedin
            size={20}
            className="cursor-pointer transition-all hover:text-secondary"
          />
          <FaFacebook
            size={20}
            className="cursor-pointer transition-all hover:text-secondary"
          />
          <BsInstagram
            size={20}
            className="cursor-pointer transition-all hover:text-secondary"
          />
        </motion.div>
      </div>
      <div className="pt-10 md:pt-[100px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.189741737917!2d90.3545385747938!3d23.811850986415457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12015382851%3A0x3ceca92fcf1a72d2!2sBangladesh%20University%20of%20Business%20and%20Technology%20(BUBT)!5e0!3m2!1sen!2sbd!4v1729595757952!5m2!1sen!2sbd"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="  h-[250px] w-full md:h-[600px]"
        ></iframe>
      </div>
    </div>
  );
};

export default SocialContact;
