import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/practice_areas_banner.png";
import ScheduleConsultation from "../ScheduleConsultation";
import Legal_Expertise from "./Legal_Expertise";

const PracticeAreas = () => {
  return (
    <div>
      <SharedNavbar
        banner={banner}
        title="Legal Practice Areas"
        bread_text="Practice Areas"
        bread_link="practice-areas"
      />
      <Legal_Expertise />
      <ScheduleConsultation />
    </div>
  );
};

export default PracticeAreas;
