import Container from "./Container";
import logo from "../images/footer_logo.png";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FooterContent from "../components/FooterContent";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-primary pt-10 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-3">
              <Link to="/">
                <img src={logo} alt="Logo" className="-mt-3" />
              </Link>
              <div>
                <h4 className="text-white mt-10 text-sm font-opensans">
                  123 Legal St, Suite 400 New York, NY 10001
                </h4>
                <h3 className="text-white my-3 text-sm font-opensans">
                  Email: info@nexuslawfirm.com
                </h3>
                <p className="text-white text-sm font-opensans">
                  Phone: (123) 456-7890
                </p>
              </div>
              <div className="flex items-center py-6 gap-4">
                {[
                  <BsTwitterX />,
                  <BsLinkedin />,
                  <FaFacebook />,
                  <BsInstagram />,
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="bg-secondary transition-all cursor-pointer hover:bg-white w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h1 className="text-lg font-semibold text-white font-opensans">
                Quick Links
              </h1>
              <ul className="pt-5">
                {["About", "Practice Areas", "Attorneys", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a className="text-white text-sm font-opensans" href="#">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h1 className="text-lg font-semibold text-white font-opensans">
                Practice Areas
              </h1>
              <ul className="pt-5">
                {[
                  "Criminal Law",
                  "Family Law",
                  "Business Law",
                  "Estate Planning",
                  "Immigration Law",
                  "Personal Injury",
                  "Employment Law",
                  "Real Estate Law",
                ].map((area, index) => (
                  <li key={index}>
                    <a href="#" className="text-white font-opensans text-sm">
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h1 className="text-lg font-semibold text-white font-opensans">
                Office Hours
              </h1>
              <ul className="pt-5">
                <li>
                  <span className="text-white font-opensans text-sm">
                    Monday - Friday:
                    <span className="italic">9:00 AM - 6:00 PM</span>
                  </span>
                </li>
                <li>
                  <span className="text-white font-opensans text-sm">
                    Saturday: <span className="italic">10:00 AM - 2:00 PM</span>
                  </span>
                </li>
                <li>
                  <span className="text-white font-opensans text-sm">
                    Sunday: <span className="italic">Closed</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-3">
              <h1 className="text-lg font-semibold text-white font-opensans">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-white mt-5 font-opensans">
                Get Legal Updates and Insights
              </p>
              <div className="relative pt-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 rounded-md border outline-none text-sm font-opensans w-full"
                />
                <MdEmail
                  size={20}
                  className="absolute right-2 hidden md:block top-6 text-secondary"
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
