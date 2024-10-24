import Container from "../../shared/Container";
import Legal_Legacy_img from "/images/about/Legal_Legacy_img.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import HeroSidebar from "../../components/HeroSidebar";
import { Link } from "react-router-dom";

const LegalLegacyReport = () => {
  return (
    <Container>
      {/* Sidebar icons */}
      <div className="xl:block hidden">
        <HeroSidebar />
      </div>
      <div className="py-10 md:py-14 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 md:gap-[133px]">
        <div>
          <h1 className="text-2xl leading-[36px] text-center md:text-start md:text-[40px] font-semibold md:leading-[60px]">
            A Legacy of Legal Excellence
          </h1>
          <p className="md:text-[18px] leading-[19.5px] md:leading-[30px] text-[13px] mt-5  font-opensans text-center md:text-start">
            Nexus Law Firm was founded with a singular mission to provide
            trusted legal guidance and unwavering advocacy for clients from all
            walks of life.
          </p>
          <p className="md:text-[18px] leading-[19.5px] md:leading-[30px] text-[13px] mb-5 mt-2  font-opensans text-center md:text-start">
            Over the years, we have grown into a respected firm, committed to
            justice and integrity.
          </p>
          <div className="flex items-center gap-2">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Founded in 1999 with experienced legal professionals.
            </span>
          </div>
          <div className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Expertise across various legal areas.
            </span>
          </div>
          <div className="flex items-center gap-2 my-3 md:my-3">
            <IoMdCheckboxOutline className="text-secondary" size={20} />
            <span className="font-opensans text-[13px] md:text-[18px]">
              Client-focused representation and results.
            </span>
          </div>

          <div className=" flex items-center md:justify-start justify-center">
            <Link to="/contact">
              <button className="bg-transparent rounded border  mt-5 md:mt-7 border-[#162834] text-black transition-all hover:bg-[#162834] py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Legal_Legacy_img}
            alt="Legal Legacy"
            className="w-[343px] h-[433px] md:w-[543px] md:h-[558px] object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default LegalLegacyReport;
