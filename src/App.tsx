import { Route, Routes } from "react-router-dom";
import Footer from "./shared/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Attorneys from "./pages/Attorneys/Attorneys";
import TermsService from "./pages/TermsService/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const App = () => {
  return (
    <div className="font-playfair">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<PracticeAreas />} />
        <Route path="/projects" element={<Attorneys />} />
        <Route path="/terms" element={<TermsService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
