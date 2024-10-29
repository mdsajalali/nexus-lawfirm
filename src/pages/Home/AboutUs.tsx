import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import about_us from "/images/about_us.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-1  place-items-center gap-5 py-10 md:gap-[133px] md:py-20 lg:grid-cols-2">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={about_us}
            alt="About Us"
            className="-mt-10 h-[433px] w-[343px] object-contain md:mt-0 md:h-[558px] md:w-[543px]"
          />
        </motion.div>
        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-semibold leading-[36px] md:text-start md:text-[40px] md:leading-[60px]"
          >
            Defending Your Rights with Unwavering Commitment
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 mt-4 text-center font-opensans text-[13px] leading-[19.5px] md:mb-[30px] md:mt-10 md:text-start md:text-[18px] md:leading-[30px]"
          >
            Dedicated to delivering tailored legal solutions with a strong focus
            on justice and results. Our experienced attorneys guide clients
            through every step of the legal process with expertise and care.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Expertise across multiple practice areas
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="my-3 flex items-center gap-2 md:my-3"
          >
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Personalized legal strategies
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1.2 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="my-3 flex items-center gap-2 md:my-3"
          >
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Proven success in complex cases
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            className="my-3 flex items-center gap-2 md:my-3"
          >
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Committed to achieving client-focused outcomes
            </span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true }}
            className=" flex items-center justify-center md:justify-start"
          >
            <Link to="/criminal-law">
              <button className="mt-5 rounded border  border-[#162834] bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-[#162834] hover:text-white md:mt-7 md:px-7 md:text-[18px]">
                Learn more
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
