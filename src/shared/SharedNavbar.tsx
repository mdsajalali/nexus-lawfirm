import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import Container from "./Container";
import { FaRegMessage } from "react-icons/fa6";
import TopNav from "../components/TopNav";
import navLinks from "../data/navItems";
import ScheduleConsultationModal from "../components/ScheduleConsultationModal";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";

interface NavbarProps {
  banner: string;
  title: string;
  bread_text: string;
  bread_link: string;
}

const SharedNavbar = ({
  banner,
  title,
  bread_text,
  bread_link,
}: NavbarProps) => {
  const [click, setClick] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <img
        src={banner}
        alt="Hero Banner"
        className="h-[200px] w-full object-cover md:h-[400px]"
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
                  className="h-[64px] w-[180px] object-contain lg:w-[283px] "
                />
              </Link>
            </div>
            <div className=" hidden md:block">
              <div className="flex gap-4 md:gap-3 lg:gap-8">
                {navLinks?.map((data, idx) => (
                  <div key={idx}>
                    <li className="list-none">
                      <NavLink
                        className="font-opensans text-[14px] font-normal transition-all hover:border-b hover:border-secondary lg:text-[16px]"
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
                <div className=" hidden w-full items-center gap-3 md:flex  ">
                  <FaRegMessage />
                  <span className="font-opensans">Request Consultation</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => setIsOpen(true)}
              className="hidden cursor-pointer md:block "
            >
              <div className="flex items-center gap-2 lg:gap-[10px]   ">
                <FaRegMessage size={18} />
                <span className="block font-opensans text-[14px] font-semibold md:hidden lg:text-[16px] xl:block">
                  Request Consultation
                </span>
              </div>
            </div>
            <ScheduleConsultationModal isOpen={isOpen} onClose={handleClose} />
            <div
              onClick={() => setClick(true)}
              className="block cursor-pointer md:hidden"
            >
              <FiMenu size={30} />
            </div>
          </nav>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-10 font-opensans text-2xl font-bold md:py-20 md:text-[64px]"
          >
            {title}
          </motion.h1>
          {/* Breadcrumbs */}
          <Breadcrumbs bread_text={bread_text} bread_link={bread_link} />
        </Container>
      </main>
    </div>
  );
};

export default SharedNavbar;
