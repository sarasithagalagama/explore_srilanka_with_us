import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AboutSriLanka = lazy(() => import("./pages/AboutSriLanka"));
const Destinations = lazy(() => import("./pages/Destinations"));
const TourItineraries = lazy(() => import("./pages/TourItineraries"));
const DriverService = lazy(() => import("./pages/DriverService"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const PageLoader = () => (
  <div
    style={{
      height: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-primary)",
      fontWeight: "600",
    }}
  >
    <div className="loader">Loading...</div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-sri-lanka" element={<AboutSriLanka />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/tour-itineraries" element={<TourItineraries />} />
              <Route path="/driver-service" element={<DriverService />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
