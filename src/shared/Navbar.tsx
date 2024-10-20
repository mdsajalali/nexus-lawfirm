import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Container from "./Container";
import hero_banner from "../images/hero_banner.png";
import { FaRegMessage } from "react-icons/fa6";

interface NavLinkProps {
  label: string;
  link: string;
}

const navLinks: NavLinkProps[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Practice Areas",
    link: "/skills",
  },
  {
    label: "Attorneys",
    link: "/projects",
  },
  {
    label: "Blog",
    link: "/blogs",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header: React.FC = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="relative">
      <img
        src={hero_banner}
        alt="Hero Banner"
        className="w-full h-[100vh]  object-cover"
      />
      <main className="fixed right-0 top-0 z-[9999] w-full border-b border-secondary  text-white">
        <Container>
          <nav className="  flex   items-center justify-between  ">
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" className="w-[283px] h-[64px]" />
              </Link>
            </div>
            <div className=" hidden md:block">
              <div className="flex gap-7">
                {navLinks.map((data, idx) => (
                  <div key={idx}>
                    <li className="list-none">
                      <NavLink
                        className="text-[18px] font-normal"
                        to={data.link}
                      >
                        {data.label}
                      </NavLink>
                    </li>
                  </div>
                ))}
              </div>
            </div>

            {/* sidebar mobile menu */}
            <div
              className={`fixed z-[9999] h-full w-screen  ${
                click ? "" : "hidden "
              } right-0 top-0 bg-black/50 backdrop-blur-sm  `}
            >
              <div className="hero-mobile-menu-bg absolute left-0 top-0 flex h-screen w-56 flex-col items-center gap-5 p-8 text-white">
                <IoCloseOutline
                  size={35}
                  onClick={() => setClick(false)}
                  className="-ml-40 -mt-4  mb-5 cursor-pointer  "
                />
                {navLinks.map((data, i) => (
                  <NavLink
                    onClick={() => setClick(false)}
                    key={i}
                    className="w-full border-b border-dashed font-bold"
                    to={data.link}
                  >
                    {data.label}
                  </NavLink>
                ))}
                <div className="flex w-full items-center gap-3 border-b border-dashed">
                  <FaRegMessage /> Request Consultation
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-3   ">
                <FaRegMessage /> Request Consultation
              </div>
            </div>
            <div
              onClick={() => setClick(true)}
              className="block cursor-pointer md:hidden"
            >
              <FiMenu size={30} />
            </div>
          </nav>
        </Container>
      </main>
    </div>
  );
};

export default Header;
