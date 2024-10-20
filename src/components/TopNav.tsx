import { BiCalendar, BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import Container from "../shared/Container";

const TopNav = () => {
  return (
    <div className="border-b border-secondary md:block hidden">
      <Container>
        <div className="flex items-center justify-between py-[13px] ">
          <div className="flex items-center lg:gap-10 gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <BiPhone className="text-secondary" /> <span className="text-[16px]">(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <MdOutlineEmail className="text-secondary" />
              <span className="text-[16px]">lawfirm@nexus.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <BiCalendar className="text-secondary" />
            <span className="text-[16px]">Mon - Fri 9am - 6pm</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
