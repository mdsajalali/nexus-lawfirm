import SharedNavbar from "../../shared/SharedNavbar";
import banner from "/images/attorneys/attorneys_banner.png";
import AttorneysTeam from "./AttorneysTeam";
import ScheduleConsultation from "../../shared/ScheduleConsultation";

const Attorneys = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Our Legal Team"
        bread_text="Attorneys"
        bread_link="attorneys"
      />
      <AttorneysTeam />
      <ScheduleConsultation />
    </>
  );
};

export default Attorneys;
