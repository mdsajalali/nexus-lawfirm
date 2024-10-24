import SharedNavbar from "../../shared/SharedNavbar";
import about_hero from "/images/about/about_hero.png";
import Clients from "../Home/Clients";
import Companies from "../Home/Companies";
import ScheduleConsultation from "../../shared/ScheduleConsultation";
import Choose_Us from "./Choose_Us";
import LegalLegacyReport from "./Legal_Legacy_Report";
import ClientSatisfactionRate from "../Home/ClientSatisfactionRate";

const About = () => {
  return (
    <>
      <SharedNavbar
        banner={about_hero}
        title="About Us"
        bread_text="about"
        bread_link="about"
      />
      <LegalLegacyReport />
      <ClientSatisfactionRate />
      <Choose_Us />
      <Clients />
      <Companies />
      <ScheduleConsultation />
    </>
  );
};

export default About;
