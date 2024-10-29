import HeroSidebar from "../../components/HeroSidebar";
import business_law from "/images/practice-area/business_law.svg";
import criminal_law from "/images/practice-area/criminal_law.svg";
import employment_law from "/images/practice-area/employment_law.svg";
import estate_planning_law from "/images/practice-area/estate_planning_law.svg";
import family_law from "/images/practice-area/family_law.svg";
import immigration_law from "/images/practice-area/immigration_law.svg";
import personal_injury from "/images/practice-area/personal_injury.svg";
import real_estate_law from "/images/practice-area/real_estate_law.svg";
import Container from "../../shared/Container";
import { motion } from "framer-motion";

const Legal_Expertise = () => {
  return (
    <Container>
      {/* Sidebar icons */}
      <div className="hidden xl:block">
        <HeroSidebar />
      </div>
      <div className="py-10 md:py-20">
        <div className="mx-auto max-w-[804px] text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold md:text-[40px]"
          >
            Our Legal Expertise
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="my-5 font-opensans text-[16px] leading-[30px] md:text-[20px]"
          >
            Explore the diverse areas of law in which we provide dedicated,
            expert representation. We offer personalized solutions for each of
            our clients' unique needs.
          </motion.p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3  xl:grid-cols-4">
          {legalExpertisData?.map((data) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: data.id * 0.2 }}
              viewport={{ once: true }}
              key={data.id}
              className="max-w-[424px] rounded-md border  border-[#D0D4D6] bg-white px-5 pb-5 pt-10  text-center font-opensans transition-all duration-300 hover:scale-95 hover:bg-primary  hover:text-white"
            >
              <img
                src={data?.img}
                alt="img"
                className="mx-auto size-10 md:size-[56px]"
              />
              <h1 className="pt-3 text-[20px] font-semibold md:text-2xl">
                {data?.title}
              </h1>
              <p className="py-4 text-[14px] leading-5 md:py-7 md:text-[16px] md:leading-[24px]">
                {data?.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Legal_Expertise;

const legalExpertisData = [
  {
    id: 1,
    img: criminal_law,
    title: "Criminal Law",
    desc: "Protecting your rights with a strong, strategic defense in criminal matters. Guiding through the process.",
  },
  {
    id: 2,
    img: family_law,
    title: "Family Law",
    desc: "Providing sensitive legal support for family-related issues, including custody, divorce and adoption.",
  },
  {
    id: 3,
    img: business_law,
    title: "Business Law ",
    desc: "Offering strategic advice and representation for businesses in all stages, from startup to litigation.",
  },
  {
    id: 4,
    img: estate_planning_law,
    title: "Estate Planning ",
    desc: "Safeguard your future with customized wills and trusts for comprehensive estate management.",
  },
  {
    id: 5,
    img: immigration_law,
    title: "Immigration Law",
    desc: "Navigating the complexities of immigration with expertise and compassionate guidance.",
  },
  {
    id: 6,
    img: personal_injury,
    title: "Personal Injury",
    desc: "Advocating for your rights and seeking fair compensation for your injuries.",
  },
  {
    id: 7,
    img: employment_law,
    title: "Employment Law",
    desc: "Protecting employees and employers with advice on workplace disputes and legal matters.",
  },
  {
    id: 8,
    img: real_estate_law,
    title: "Real Estate Law",
    desc: "Ensuring seamless and secure transactions in property buying, selling and development.",
  },
];
