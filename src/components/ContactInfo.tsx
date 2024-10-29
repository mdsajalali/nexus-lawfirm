import Container from "../shared/Container";
import { BiMessage, BiPhone } from "react-icons/bi";
import HeroSidebar from "./HeroSidebar";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";
import {motion} from "framer-motion"

const ContactInfo = () => {
  return (
    <Container>
      {/* Sidebar icon */}
      <HeroSidebar />
      <div className="grid grid-cols-1 place-items-center  gap-5 py-10 md:py-20 lg:grid-cols-2">
        <div className="max-w-[500px]">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lead5] text-2xl font-semibold md:text-[40px] md:leading-[60px]"
          >
            Do you need help? <br /> Contact with us now!
          </motion.h1>
          <div className="my-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 font-opensans"
            >
              <div className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white ">
                <BiPhone size={22} className="text-secondary" />
              </div>
              <span>Phone: +1 (123) 456-7890</span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="my-3 flex items-center gap-2 font-opensans"
            >
              <div className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white ">
                <BiMessage size={22} className="text-secondary" />
              </div>
              <span>Email: contact@nexuslawfirm.com</span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 font-opensans"
            >
              <div className="cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-white ">
                <CiLocationOn size={22} className="text-secondary" />
              </div>
              <span>456 Elm Street, Suite 789, Metropolis, NY 10001</span>
            </motion.div>
          </div>
        </div>
        {/* Contact form */}
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactInfo;
