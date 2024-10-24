import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/attorneys/attorneys_banner.png";
import CriminalLawOverview from "../../components/CriminalLawOverview";
import ScheduleConsultation from "../../shared/ScheduleConsultation";

const CriminalLaw = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Criminal Law"
        bread_text="Criminal Law"
        bread_link="criminal-aw"
      />
      <CriminalLawOverview />
      <ScheduleConsultation />
    </>
  );
};

export default CriminalLaw;
