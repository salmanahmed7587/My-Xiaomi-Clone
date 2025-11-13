import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offres from "./components/Exclusiveoffres/Offres";
import { BrowserRouter as Router } from "react-router-dom";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import Featurepro from "./components/feature/Featurepro";
import Explore from "./components/explore/Explore";

function App() {
  return (
    <Router>
      <Navbar />
      <ImageSlider />
      <Featurepro />
      <Offres />
      <Explore />
      <Support />
      <Footer />
    </Router>
  );
}

export default App;
