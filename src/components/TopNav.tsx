import { BiCalendar, BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import Container from "../shared/Container";

const TopNav = () => {
  return (
    <div className="hidden border-b border-secondary md:block">
      <Container>
        <div className="flex items-center justify-between py-[13px] ">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="flex cursor-pointer items-center gap-2">
              <BiPhone className="text-secondary" />{" "}
              <span className="font-opensans text-[16px]">(123) 456-7890</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <MdOutlineEmail className="text-secondary" />
              <span className="font-opensans text-[16px]">
                lawfirm@nexus.com
              </span>
            </div>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <BiCalendar className="text-secondary" />
            <span className="font-opensans text-[16px]">
              Mon - Fri 9am - 6pm
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
