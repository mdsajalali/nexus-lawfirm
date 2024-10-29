import attorney_one from "/images/our-teams/attorney_one.png";
import attorney_two from "/images/our-teams/attorney_two.png";
import attorney_three from "/images/our-teams/attorney_three.png";
import attorney_four from "/images/our-teams/attorney_four.png";
import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import AttorneyCard from "../../components/AttorneyCard";
import { motion } from "framer-motion";

const OurTeams = () => {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[20px] font-semibold md:text-[40px]"
        >
          Our Legal Experts
        </motion.h1>
        <div className="grid grid-cols-2 gap-3 pt-8 md:grid-cols-3 md:gap-6 md:pt-14 lg:grid-cols-4">
          {attorneys?.map((attorney) => (
            <AttorneyCard key={attorney.id} {...attorney} />
          ))}
        </div>
        <Link to="/attorneys" className="flex items-center justify-center">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-5 rounded border border-[#162834] bg-transparent px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-[#162834] hover:text-white md:mt-10 md:px-7 md:text-[18px]"
          >
            Meet our attorneys
          </motion.button>
        </Link>
      </div>
    </Container>
  );
};

export default OurTeams;

const attorneys = [
  {
    id: 1,
    name: "John Doe",
    title: "Criminal Law Attorney",
    image: attorney_one,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Family Law Attorney",
    image: attorney_two,
  },
  {
    id: 3,
    name: "Robert Brown",
    title: "Business Law Specialist",
    image: attorney_three,
  },
  {
    id: 4,
    name: "Emily Johnson",
    title: "Estate Planning Attorney",
    image: attorney_four,
  },
];
