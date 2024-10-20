import Container from "../shared/Container";
import attorney_one from "../images/our-teams/attorney_one.png";
import attorney_two from "../images/our-teams/attorney_two.png";
import attorney_three from "../images/our-teams/attorney_three.png";
import attorney_four from "../images/our-teams/attorney_four.png";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const OurTeams = () => {
  return (
    <Container>
      <div className="py-14 md:py-[170px]">
        <h1 className="text-center text-[40px] font-semibold">
          Our Legal Experts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 pt-8 md:pt-[100px]">
          <div className="relative group">
            <div className="absolute hidden group-hover:block right-2 top-2 transition-opacity duration-300 ease-in-out">
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <BsTwitterX />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center my-2 justify-center">
                <BsLinkedin />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <FaFacebookF />
              </div>
            </div>
            <img src={attorney_one} alt="attorney" className="rounded-md" />
            <div className="absolute inset-0 pb-4 md:pb-[55px] flex items-end justify-center text-white">
              <div className="text-center">
                <h1 className="text-[13px] md:text-2xl font-semibold font-opensans">
                  John Doe
                </h1>
                <p className="md:pt-2 pt-1 text-[10px] md:text-[16px] font-semibold  font-opensans">
                  Criminal Law Attorney
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute hidden group-hover:block right-2 top-2 transition-opacity duration-300 ease-in-out">
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <BsTwitterX />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center my-2 justify-center">
                <BsLinkedin />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <FaFacebookF />
              </div>
            </div>
            <img src={attorney_two} alt="attorney" className="rounded-md" />
            <div className="absolute inset-0 pb-4 md:pb-[55px] flex items-end justify-center text-white">
              <div className="text-center">
                <h1 className="text-[13px] md:text-2xl font-semibold font-opensans">
                  Jane Smith
                </h1>
                <p className="md:pt-2 pt-1 text-[10px] md:text-[16px] font-semibold  font-opensans">
                  Family Law Attorney
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute hidden group-hover:block right-2 top-2 transition-opacity duration-300 ease-in-out">
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <BsTwitterX />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center my-2 justify-center">
                <BsLinkedin />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <FaFacebookF />
              </div>
            </div>
            <img src={attorney_three} alt="attorney" className="rounded-md" />
            <div className="absolute inset-0 pb-4 md:pb-[55px] flex items-end justify-center text-white">
              <div className="text-center">
                <h1 className="text-[13px] md:text-2xl font-semibold font-opensans">
                  Robert Brown
                </h1>
                <p className="md:pt-2 pt-1 text-[10px] md:text-[16px] font-semibold  font-opensans">
                  Business Law Specialist
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute hidden group-hover:block right-2 top-2 transition-opacity duration-300 ease-in-out">
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <BsTwitterX />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center my-2 justify-center">
                <BsLinkedin />
              </div>
              <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
                <FaFacebookF />
              </div>
            </div>
            <img src={attorney_four} alt="attorney" className="rounded-md" />
            <div className="absolute inset-0 pb-4 md:pb-[55px] flex items-end justify-center text-white">
              <div className="text-center">
                <h1 className="text-[13px] md:text-2xl font-semibold font-opensans">
                  Emily Johnson
                </h1>
                <p className="md:pt-2 pt-1 text-[10px] md:text-[16px] font-semibold  font-opensans">
                  Estate Planning Attorney
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center   justify-center">
          <button className="bg-transparent rounded border  mt-5 md:mt-10 border-[#162834] text-black transition-all hover:bg-[#162834] py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans">
            Meet our attorneys
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OurTeams;
