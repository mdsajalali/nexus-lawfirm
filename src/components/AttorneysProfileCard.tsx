import { IoMdCheckboxOutline } from "react-icons/io";
import Container from "../shared/Container";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeroSidebar from "./HeroSidebar";
import { motion } from "framer-motion";

interface User {
  id: number;
  user: {
    img: string;
    name: string;
    designation: string;
    overview: string;
    social_links: string[];
  };
  about: {
    desc_one: string;
    desc_two: string;
  };
  practice_areas: string[];
  experience_and_achievements: string[];
  education_milestones: {
    degree: string;
    university: string;
    years: string;
  }[];
  professional_affiliations: string[];
  awards_and_honors: string[];
}

interface AttorneysProfileCardProps {
  users: User[];
}

const AttorneysProfileCard = ({ users }: AttorneysProfileCardProps) => {
  const user = users[0];

  return (
    <Container>
      {/* Sidebar */}
      <HeroSidebar />
      <div className="grid grid-cols-1 gap-10 py-10 font-opensans md:py-20 lg:grid-cols-12 lg:gap-[100px]">
        <div className="  col-span-1 lg:col-span-7">
          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              About
            </motion.h1>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-2 text-gray-700"
            >
              {user.about.desc_one}
            </motion.p>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-2 text-gray-700"
            >
              {user.about.desc_two}
            </motion.p>
          </div>

          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-xl font-semibold lg:mt-5"
            >
              Practice Areas
            </motion.h1>
            {user.practice_areas.map((area, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                viewport={{ once: true }}
                key={idx}
                className="flex items-center gap-2"
              >
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{area}</span>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-xl font-semibold lg:mt-5"
            >
              Experience and Achievements
            </motion.h1>
            {user.experience_and_achievements.map((achievement, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                viewport={{ once: true }}
                key={idx}
                className="flex items-center gap-2"
              >
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{achievement}</span>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-xl font-semibold lg:mt-5"
            >
              Education Milestones
            </motion.h1>
            {user.education_milestones.map((milestone, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                viewport={{ once: true }}
                key={idx}
              >
                <h2 className="font-semibold">
                  {milestone.degree} ({milestone.years})
                </h2>
                <h3 className="text-gray-600">{milestone.university}</h3>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-xl font-semibold lg:mt-5"
            >
              Professional Affiliations
            </motion.h1>
            {user.professional_affiliations.map((affiliation, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                viewport={{ once: true }}
                key={idx}
                className="flex items-center gap-2"
              >
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{affiliation}</span>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-xl font-semibold lg:mt-5"
            >
              Awards and Honors
            </motion.h1>
            {user.awards_and_honors.map((award, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                viewport={{ once: true }}
                key={idx}
                className="flex items-center gap-2"
              >
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative col-span-1 flex flex-col items-center text-center text-white lg:col-span-5"
        >
          <img
            src={user.user.img}
            alt="Profile"
            className="mb-4 h-[650px] w-full rounded-lg object-cover lg:h-[760px] lg:w-[536px]"
          />
          <div className="absolute bottom-10 flex   flex-col items-center justify-center   bg-black/50 px-5 py-5 md:px-20">
            <h1 className="text-2xl font-bold">{user.user.name}</h1>
            <h2 className="text-xl text-gray-300">{user.user.designation}</h2>
            <p className="mt-2 text-gray-400">{user.user.overview}</p>
            <div className="mt-4">
              <div className="flex items-center justify-center gap-3">
                {user.user.social_links.map((link, index) => {
                  const Icon =
                    index === 0
                      ? BsTwitterX
                      : index === 1
                        ? BsLinkedin
                        : FaFacebook;
                  return (
                    <Link
                      key={index}
                      to={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all hover:text-secondary"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AttorneysProfileCard;
