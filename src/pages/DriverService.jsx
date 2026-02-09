import { FaCar, FaCheckCircle, FaRoute, FaUsers } from "react-icons/fa";
import Button from "../components/Button";
import "./DriverService.css";

function DriverService() {
  const benefits = [
    "Comfortable and air-conditioned vehicle",
    "Experienced, English-speaking local driver",
    "Flexible travel schedule",
    "Local insights and route suggestions",
    "Safe and stress-free travel",
  ];

  const suitableFor = [
    "Airport pickups",
    "Multi-city tours",
    "Day trips and sightseeing",
    "Long-distance travel",
  ];

  return (
    <div className="driver-service">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <FaCar className="hero-icon" />
          <h1>Private Driver with Car in Sri Lanka</h1>
          <p>
            For travelers who prefer comfort, safety, and local knowledge, we
            offer a private car with an experienced driver for your journey
            across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">
            Why Choose a Private Driver?
          </h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card card">
                <FaCheckCircle className="benefit-icon" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Suitable For</h2>
          <div className="suitable-grid">
            {suitableFor.map((item, index) => (
              <div key={index} className="suitable-card card">
                <FaRoute className="suitable-icon" />
                <h4>{item}</h4>
              </div>
            ))}
          </div>
          <p className="service-note text-center">
            This service is optional and intended to support independent travel
            rather than operate as a guided tour.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <FaUsers className="cta-icon" />
          <h2>Interested in Our Driver Service?</h2>
          <p>
            Contact us to discuss your travel needs and receive a personalized
            quote for private car service.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Request a Quote
            </Button>
            <Button variant="outline" size="lg" href="/tour-itineraries">
              View Tour Itineraries
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DriverService;
