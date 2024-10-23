import { Route, Routes } from "react-router-dom";
import Footer from "./shared/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Attorneys from "./pages/Attorneys/Attorneys";
import TermsService from "./pages/TermsService/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CriminalLaw from "./pages/CriminalLaw/CriminalLaw";
import Contact from "./pages/Contact/Contact";
import AttorneysProfile from "./pages/Attorneys/AttorneysProfile";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <div className="font-playfair">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<PracticeAreas />} />
        <Route path="/projects" element={<Attorneys />} />
        <Route path="/projects/:id" element={<AttorneysProfile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/criminal-law" element={<CriminalLaw />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
