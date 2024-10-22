import { Route, Routes } from "react-router-dom";
import Footer from "./shared/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className="font-playfair">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
