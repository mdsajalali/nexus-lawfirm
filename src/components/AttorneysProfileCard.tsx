import { IoMdCheckboxOutline } from "react-icons/io";
import Container from "../shared/Container";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeroSidebar from "./HeroSidebar";

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
      <div className="py-10 md:py-[100px] font-opensans grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[100px]">
        <div className="  col-span-1 lg:col-span-7">
          <div>
            <h1 className="text-2xl font-bold">About</h1>
            <p className="mt-2 text-gray-700">{user.about.desc_one}</p>
            <p className="mt-2 text-gray-700">{user.about.desc_two}</p>
          </div>

          <div>
            <h1 className="text-xl font-semibold mt-5 lg:mt-5">
              Practice Areas
            </h1>
            {user.practice_areas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{area}</span>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-xl font-semibold mt-5 lg:mt-5">
              Experience and Achievements
            </h1>
            {user.experience_and_achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{achievement}</span>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-xl font-semibold mt-5 lg:mt-5">
              Education Milestones
            </h1>
            {user.education_milestones.map((milestone, idx) => (
              <div key={idx}>
                <h2 className="font-semibold">
                  {milestone.degree} ({milestone.years})
                </h2>
                <h3 className="text-gray-600">{milestone.university}</h3>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-xl font-semibold mt-5 lg:mt-5">
              Professional Affiliations
            </h1>
            {user.professional_affiliations.map((affiliation, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{affiliation}</span>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-xl font-semibold mt-5 lg:mt-5">
              Awards and Honors
            </h1>
            {user.awards_and_honors.map((award, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <IoMdCheckboxOutline className="text-secondary" size={20} />
                <span className="font-opensans text-[16px]">{award}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex col-span-1 lg:col-span-5 relative text-white flex-col items-center text-center">
          <img
            src={user.user.img}
            alt="Profile"
            className="mb-4 rounded-lg lg:w-[536px] w-full h-[650px] lg:h-[760px] object-cover"
          />
          <div className="absolute px-5 md:px-20   bottom-10 bg-black/50 py-5   flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">{user.user.name}</h1>
            <h2 className="text-xl text-gray-300">{user.user.designation}</h2>
            <p className="mt-2 text-gray-400">{user.user.overview}</p>
            <div className="mt-4">
              <div className="flex items-center gap-3 justify-center">
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
                      className="hover:text-secondary transition-all"
                    >
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
              <button className="mt-4 px-5 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-80 transition-all">
                {user.user.designation}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AttorneysProfileCard;
