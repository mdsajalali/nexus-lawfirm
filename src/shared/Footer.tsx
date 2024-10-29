import Container from "./Container";
import logo from "/images/footer_logo.png";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FooterContent from "../components/FooterContent";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-primary pb-8 pt-10">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-3">
              <Link to="/">
                <img src={logo} alt="Logo" className="-mt-3" />
              </Link>
              <div>
                <h4 className="mt-10 font-opensans text-sm text-white">
                  123 Legal St, Suite 400 New York, NY 10001
                </h4>
                <h3 className="my-3 font-opensans text-sm text-white">
                  Email: info@nexuslawfirm.com
                </h3>
                <p className="font-opensans text-sm text-white">
                  Phone: (123) 456-7890
                </p>
              </div>
              <div className="flex items-center gap-4 py-6">
                {[
                  <BsTwitterX />,
                  <BsLinkedin />,
                  <FaFacebook />,
                  <BsInstagram />,
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-secondary transition-all hover:bg-white"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <h1 className="font-opensans text-lg font-semibold text-white">
                Quick Links
              </h1>
              <ul className="pt-5">
                {["About", "Practice Areas", "Attorneys", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a className="font-opensans text-sm text-white" href="#">
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <h1 className="font-opensans text-lg font-semibold text-white">
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
                    <a href="#" className="font-opensans text-sm text-white">
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <h1 className="font-opensans text-lg font-semibold text-white">
                Office Hours
              </h1>
              <ul className="pt-5">
                <li>
                  <span className="font-opensans text-sm text-white">
                    Monday - Friday:
                    <span className="italic">9:00 AM - 6:00 PM</span>
                  </span>
                </li>
                <li>
                  <span className="font-opensans text-sm text-white">
                    Saturday: <span className="italic">10:00 AM - 2:00 PM</span>
                  </span>
                </li>
                <li>
                  <span className="font-opensans text-sm text-white">
                    Sunday: <span className="italic">Closed</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-3">
              <h1 className="font-opensans text-lg font-semibold text-white">
                Subscribe to Our Newsletter
              </h1>
              <p className="mt-5 font-opensans text-white">
                Get Legal Updates and Insights
              </p>
              <div className="relative w-full pt-4 md:w-1/3 lg:w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border p-2 font-opensans text-sm outline-none"
                />
                <MdEmail
                  size={20}
                  className="absolute right-2 top-6 hidden cursor-pointer text-secondary md:block"
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
