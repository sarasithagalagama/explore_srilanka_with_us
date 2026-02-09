import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutSriLanka from "./pages/AboutSriLanka";
import Destinations from "./pages/Destinations";
import TourItineraries from "./pages/TourItineraries";
import DriverService from "./pages/DriverService";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-sri-lanka" element={<AboutSriLanka />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tour-itineraries" element={<TourItineraries />} />
          <Route path="/driver-service" element={<DriverService />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
