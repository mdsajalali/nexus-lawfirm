import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import about_us from "/images/about_us.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import {motion} from "framer-motion"

const AboutUs = () => {
  return (
    <Container>
      <div className="py-10 md:py-20  grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 md:gap-[133px]">
        <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
          <img
            src={about_us}
            alt="About Us"
            className="w-[343px] md:mt-0 -mt-10 h-[433px] md:w-[543px] md:h-[558px] object-contain"
          />
        </motion.div>
        <div>
          <motion.h1 initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} className="text-2xl leading-[36px] text-center md:text-start md:text-[40px] font-semibold md:leading-[60px]">
            Defending Your Rights with Unwavering Commitment
          </motion.h1>
          <motion.p initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="md:text-[18px] leading-[19.5px] md:leading-[30px] text-[13px] md:mt-10 mt-4 mb-8 md:mb-[30px] font-opensans text-center md:text-start">
            Dedicated to delivering tailored legal solutions with a strong focus
            on justice and results. Our experienced attorneys guide clients
            through every step of the legal process with expertise and care.
          </motion.p>
          <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Expertise across multiple practice areas
            </span>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }} className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Personalized legal strategies
            </span>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1.2 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Proven success in complex cases
            </span>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }} className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Committed to achieving client-focused outcomes
            </span>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }} className=" flex items-center md:justify-start justify-center">
            <Link to="/criminal-law">
              <button className="bg-transparent rounded border  mt-5 md:mt-7 border-[#162834] text-black transition-all hover:bg-[#162834] py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans">
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
