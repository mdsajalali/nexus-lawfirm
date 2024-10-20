import AboutUs from "./pages/AboutUs";
import ClientSatisfactionRate from "./pages/ClientSatisfactionRate";
import Companies from "./pages/Companies";
import OurTeams from "./pages/OurTeams";
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
      <Footer />
    </div>
  );
};

export default App;
