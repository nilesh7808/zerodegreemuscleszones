import Navbar from "./components/Navbar";
import Slideshhow from "./components/Slideshhow";
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
        <Route path="map" element={<Map />} />
          <Route path="updates" element={<Updates />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
