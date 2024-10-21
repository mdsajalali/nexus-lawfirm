import AboutUs from "./pages/AboutUs";
import Clients from "./pages/Clients";
import ClientSatisfactionRate from "./pages/ClientSatisfactionRate";
import Companies from "./pages/Companies";
import ContactUs from "./pages/ContactUs";
import OurTeams from "./pages/OurTeams";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <div className="font-playfair">
      <Navbar />
      <Companies />
      <AboutUs />
      <ClientSatisfactionRate />
      <OurTeams />
      <Clients />
      <ContactUs />
      <ScheduleConsultation />
      <Footer />
    </div>
  );
};

export default App;
