import Companies from "./pages/Companies";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <div className="font-playfair">
      <Navbar />
      <Companies />
      <Footer />
    </div>
  );
};

export default App;
