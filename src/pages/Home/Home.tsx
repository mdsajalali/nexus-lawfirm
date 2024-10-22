import Navbar from "../../shared/Navbar";
import AboutUs from "../AboutUs";
import Clients from "../Clients";
import ClientSatisfactionRate from "../ClientSatisfactionRate";
import Companies from "../Companies";
import ContactUs from "../ContactUs";
import OurTeams from "../OurTeams";
import PracticeAreas from "../PracticeAreas";
import ScheduleConsultation from "../ScheduleConsultation";

const Home = () => {
  return (
    <>
      <Navbar />
      <Companies />
      <AboutUs />
      <ClientSatisfactionRate />
      <PracticeAreas />
      <OurTeams />
      <Clients />
      <ContactUs />
      <ScheduleConsultation />
    </>
  );
};

export default Home;
