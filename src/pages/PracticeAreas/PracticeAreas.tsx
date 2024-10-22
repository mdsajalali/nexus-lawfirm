import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/practice-area/practice_areas_banner.png";
import ScheduleConsultation from "../ScheduleConsultation";
import Legal_Expertise from "./Legal_Expertise";
import Faq from "./Faq";

const PracticeAreas = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Legal Practice Areas"
        bread_text="Practice Areas"
        bread_link="practice-areas"
      />
      <Legal_Expertise />
      <Faq />
      <ScheduleConsultation />
    </>
  );
};

export default PracticeAreas;
