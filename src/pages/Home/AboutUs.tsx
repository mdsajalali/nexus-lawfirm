import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import about_us from "/images/about_us.png";
import { IoMdCheckboxOutline } from "react-icons/io";

const AboutUs = () => {
  return (
    <Container>
      <div className="py-10 md:py-20  grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 md:gap-[133px]">
        <div>
          <img
            src={about_us}
            alt="About Us"
            className="w-[343px] md:mt-0 -mt-10 h-[433px] md:w-[543px] md:h-[558px] object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl leading-[36px] text-center md:text-start md:text-[40px] font-semibold md:leading-[60px]">
            Defending Your Rights with Unwavering Commitment
          </h1>
          <p className="md:text-[18px] leading-[19.5px] md:leading-[30px] text-[13px] md:mt-10 mt-4 mb-8 md:mb-[30px] font-opensans text-center md:text-start">
            Dedicated to delivering tailored legal solutions with a strong focus
            on justice and results. Our experienced attorneys guide clients
            through every step of the legal process with expertise and care.
          </p>
          <div className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Expertise across multiple practice areas
            </span>
          </div>
          <div className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Personalized legal strategies
            </span>
          </div>
          <div className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Proven success in complex cases
            </span>
          </div>
          <div className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Committed to achieving client-focused outcomes
            </span>
          </div>

          <div className=" flex items-center md:justify-start justify-center">
            <Link to="/criminal-law">
              <button className="bg-transparent rounded border  mt-5 md:mt-7 border-[#162834] text-black transition-all hover:bg-[#162834] py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
