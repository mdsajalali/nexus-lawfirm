import attorney_one from "/images/our-teams/attorney_one.png";
import attorney_two from "/images/our-teams/attorney_two.png";
import attorney_three from "/images/our-teams/attorney_three.png";
import attorney_four from "/images/our-teams/attorney_four.png";
import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import AttorneyCard from "../../components/AttorneyCard";
import {motion} from "framer-motion"

const OurTeams = () => {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <motion.h1 initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}  className="text-center text-[20px] md:text-[40px] font-semibold">
          Our Legal Experts
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 pt-8 md:pt-14">
          {attorneys?.map((attorney) => (
            
            <AttorneyCard key={attorney.id} {...attorney} />
          ))}
        </div>
        <Link to="/attorneys" className="flex items-center justify-center">
          <motion.button initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} className="bg-transparent rounded border mt-5 md:mt-10 border-[#162834] text-black transition-all hover:bg-[#162834] py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans">
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
