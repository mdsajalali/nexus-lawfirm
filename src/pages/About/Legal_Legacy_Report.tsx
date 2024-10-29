import Container from "../../shared/Container";
import Legal_Legacy_img from "/images/about/Legal_Legacy_img.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import HeroSidebar from "../../components/HeroSidebar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LegalLegacyReport = () => {
  return (
    <Container>
      {/* Sidebar icons */}
      <div className="hidden xl:block">
        <HeroSidebar />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-5 py-10 md:gap-[133px] md:py-14 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-semibold leading-[36px] md:text-start md:text-[40px] md:leading-[60px]"
          >
            A Legacy of Legal Excellence
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-5 text-center font-opensans text-[13px] leading-[19.5px]  md:text-start md:text-[18px] md:leading-[30px]"
          >
            Nexus Law Firm was founded with a singular mission to provide
            trusted legal guidance and unwavering advocacy for clients from all
            walks of life.
          </motion.p>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-5 mt-2 text-center font-opensans text-[13px] leading-[19.5px]  md:text-start md:text-[18px] md:leading-[30px]"
          >
            Over the years, we have grown into a respected firm, committed to
            justice and integrity.
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
              Founded in 1999 with experienced legal professionals.
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="my-3 flex items-center gap-2 md:my-3"
          >
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Expertise across various legal areas.
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
            className="my-3 flex items-center gap-2 md:my-3"
          >
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Client-focused representation and results.
            </span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true }}
            className=" flex items-center justify-center md:justify-start"
          >
            <Link to="/contact">
              <button className="mt-5 rounded border  border-[#162834] bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-[#162834] hover:text-white md:mt-7 md:px-7 md:text-[18px]">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={Legal_Legacy_img}
            alt="Legal Legacy"
            className="h-[433px] w-[343px] object-contain md:h-[558px] md:w-[543px]"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default LegalLegacyReport;
