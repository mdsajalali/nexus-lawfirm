import Navbar from "../../shared/Navbar";
import Clients from "./Clients";
import Companies from "./Companies";
import ContactUs from "./ContactUs";
import PracticeAreas from "./PracticeAreas";
import ScheduleConsultation from "../../shared/ScheduleConsultation";
import AboutUs from "./AboutUs";
import ClientSatisfactionRate from "./ClientSatisfactionRate";
import OurTeams from "./OurTeams";

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
