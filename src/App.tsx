import { Route, Routes } from "react-router-dom";
import Footer from "./shared/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Attorneys from "./pages/Attorneys/Attorneys";

const App = () => {
  return (
    <div className="font-playfair">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<PracticeAreas />} />
        <Route path="/projects" element={<Attorneys />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
