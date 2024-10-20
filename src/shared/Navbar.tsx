import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Container from "./Container";
import hero_banner from "../images/hero_banner.png";
import { FaRegMessage } from "react-icons/fa6";
import TopNav from "../components/TopNav";
import Hero from "../pages/Hero";
import navLinks from "../components/navItems";
import HeroSidebar from "../components/HeroSidebar";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="relative">
      <img
        src={hero_banner}
        alt="Hero Banner"
        className="w-full h-[100vh]  object-cover"
      />
      <main className="absolute right-0 top-0 z-[9999] w-full   text-white">
        <TopNav />
        <Container>
          <nav className="  flex    items-center justify-between  ">
            <div>
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="lg:w-[283px] h-[64px] w-[180px] object-contain "
                />
              </Link>
            </div>
            <div className=" hidden md:block">
              <div className="flex md:gap-3 gap-4 lg:gap-8">
                {navLinks?.map((data, idx) => (
                  <div key={idx}>
                    <li className="list-none">
                      <NavLink
                        className="text-[14px] lg:text-[16px] hover:border-b hover:border-secondary font-normal transition-all font-opensans"
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
                    className="w-full   font-bold"
                    to={data.link}
                  >
                    {data.label}
                  </NavLink>
                ))}
                <div className=" md:flex hidden w-full items-center gap-3  ">
                  <FaRegMessage />
                  <span className="font-opensans">Request Consultation</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-2 lg:gap-[10px]   ">
                <FaRegMessage size={18} />{" "}
                <span className="text-[14px] lg:text-[16px] font-semibold font-opensans">
                  Request Consultation
                </span>
              </div>
            </div>
            <div
              onClick={() => setClick(true)}
              className="block cursor-pointer md:hidden"
            >
              <FiMenu size={30} />
            </div>
          </nav>

          {/* Hero Section */}
          <Hero />

          {/* Hero Sidebar */}
          <HeroSidebar />
        </Container>
      </main>
    </div>
  );
};

export default Header;
