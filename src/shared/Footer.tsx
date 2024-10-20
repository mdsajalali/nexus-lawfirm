import Container from "./Container";
import logo from "../images/footer_logo.png";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FooterContent from "../components/FooterContent";

const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-[98px] pb-[49px]">
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-3">
              <img src={logo} alt="Logo" className="-mt-3" />
              <div>
                <h4 className="text-white mt-[42px] text-[14px] font-opensans">
                  123 Legal St, Suite 400 New York, NY 10001
                </h4>
                <h3 className="text-white my-3 text-[14px] font-opensans">
                  Email: info@nexuslawfirm.com
                </h3>
                <p className="text-white text-[14px] font-opensans">
                  Phone: (123) 456-7890
                </p>
              </div>
              <div className="flex items-center py-6 gap-5">
                <div className="bg-secondary transition-all cursor-pointer hover:bg-white w-10 h-10 flex items-center justify-center rounded-full">
                  <BsTwitterX size={20} />
                </div>
                <div className="bg-secondary transition-all cursor-pointer hover:bg-white w-10 h-10 flex items-center justify-center rounded-full">
                  <BsLinkedin size={20} />
                </div>
                <div className="bg-secondary transition-all cursor-pointer hover:bg-white w-10 h-10 flex items-center justify-center rounded-full">
                  <FaFacebook size={20} />
                </div>
                <div className="bg-secondary transition-all cursor-pointer hover:bg-white w-10 h-10 flex items-center justify-center rounded-full">
                  <BsInstagram size={20} />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-2">
              <h1 className="text-[16px] font-semibold text-white font-opensans">
                Quick Links
              </h1>
              <ul className="pt-10">
                <li>
                  <a className="text-white text-[14px] font-opensans" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white text-[14px] font-opensans" href="#">
                    Practice Areas
                  </a>
                </li>
                <li>
                  <a className="text-white text-[14px] font-opensans" href="#">
                    Attorneys
                  </a>
                </li>
                <li>
                  <a className="text-white text-[14px] font-opensans" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-2">
              <h1 className="text-[16px] font-semibold text-white font-opensans">
                Practice Areas
              </h1>
              <ul className="pt-10">
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Criminal Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Family Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Business Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Estate Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Immigration Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Personal Injury
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Employment Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Real Estate Law
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-2">
              <h1 className="text-[16px] font-semibold text-white font-opensans">
                Office Hours
              </h1>
              <ul className="pt-10">
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Monday:{" "}
                    <span className="italic">Friday: 9:00 AM - 6:00 PM</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Saturday: <span className="italic">10:00 AM - 2:00 PM</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-opensans text-[14px]">
                    Sunday: <span className="italic">Closed</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <h1 className="text-[16px] font-semibold text-white font-opensans">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-white mt-10 font-opensans">
                Get Legal Updates and Insights
              </p>
              <div className="relative pt-5">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 rounded-md border outline-none text-[14px] lg:w-full"
                />
                <MdEmail
                  size={20}
                  className="absolute right-2 hidden lg:block top-7 text-secondary"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Footer Content */}
      <FooterContent />
    </>
  );
};

export default Footer;
