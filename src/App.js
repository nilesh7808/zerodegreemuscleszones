import Navbar from "./components/Navbar";
import Slideshhow from "./components/Slideshhow";
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Updates from "./pages/Updates";
import About from './pages/About';
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Map from "./pages/Map";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Slideshhow />
      <Header />
      <Router basename="/zerodegreemuscleszones">
        <Routes>
          <Route exact path="/zerodegreemuscleszones" ></Route>
          <Route path="map" element={<Map />} ></Route>
          <Route path="updates" element={<Updates />} ></Route>
          <Route path="about" element={<About />} ></Route>
          <Route path="contact" element={<Contact />} ></Route>
          <Route path="testimonials" element={<Testimonials />} ></Route>
          <Route path="gallery" element={<Gallery />} ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
