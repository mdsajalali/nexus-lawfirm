import Container from "../shared/Container";
import criminal_law_img from "/images/criminal_law_img.png";
import {motion} from "framer-motion"

const CriminalLawOverview = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 place-items-center gap-5 py-10 font-opensans md:grid-cols-2 md:gap-10 md:py-20 lg:gap-[146px]">
        <div>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold md:text-[40px]"
          >
            Overview
          </motion.h1>
          <div>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=" py-5 text-[18px] leading-6 md:text-[18px] md:leading-[30px]"
            >
              Criminal law encompasses a range of offenses from minor
              infractions to serious felonies. At Nexus Law Firm, we understand
              that being charged with a crime can be a life-altering experience.
            </motion.p>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=" py-5 text-[18px] leading-6 md:text-[18px] md:leading-[30px]"
            >
              Our team is dedicated to protecting your rights and ensuring you
              receive a fair trial.
            </motion.p>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className=" py-5 text-[18px] leading-6 md:text-[18px] md:leading-[30px]"
            >
              We are experienced in handling various criminal cases, including
              drug offenses, assault, theft, and more, providing knowledgeable
              defense strategies tailored to each situation.
            </motion.p>
          </div>
        </div>
        <div>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={criminal_law_img}
            alt="img"
            className="object-cover"
          />
        </div>
      </div>
      <div className="font-opensans">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[20px] font-semibold md:text-[40px]"
        >
          Our Approach
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pb-20 pt-5 text-[16px] leading-5 md:pb-[100px] md:pt-9 md:text-[18px] md:leading-[30px]"
        >
          Our approach to criminal law is comprehensive and client-focused. We
          begin by conducting a thorough investigation of the circumstances
          surrounding your case. This involves gathering evidence, interviewing
          witnesses, and scrutinizing police reports. We prioritize open
          communication with our clients, keeping you informed about every step
          of the legal process. Our defense strategies are built on a solid
          understanding of the law and a commitment to achieving the best
          possible outcome for you, whether that means negotiating plea deals or
          representing you in court.
        </motion.p>
      </div>
    </Container>
  );
};

export default CriminalLawOverview;
