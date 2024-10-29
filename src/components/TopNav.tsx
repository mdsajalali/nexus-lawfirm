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
              <BiPhone className="text-secondary" />

              <a href="tel:+11234567890" className="font-opensans text-[16px]">
                (123) 456-7890
              </a>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <MdOutlineEmail className="text-secondary" />

              <a
                className="font-opensans text-[16px]"
                href="mailto:lawfirm@nexus.com"
              >
                lawfirm@nexus.com
              </a>
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
