import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";
import "./AboutUs.css";

function AboutUs() {
  const mission = [
    "To promote Sri Lanka's cultural and natural heritage",
    "To assist travelers with reliable travel guidance",
    "To offer safe, flexible, and personalized travel support",
    "To support sustainable and responsible tourism",
  ];

  const whyUs = [
    "Local expertise with global perspective",
    "Personalized travel planning",
    "Honest guidance and transparent communication",
    "Focus on authentic experiences",
    "Reliable on-ground support",
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Vision & Mission</h1>
          <p>
            Dedicated to helping travelers discover the true beauty of Sri Lanka
            through authentic, responsible, and memorable travel experiences.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section">
        <div className="container">
          <div className="vision-section">
            <FaEye className="section-icon-large" />
            <div>
              <h2>Our Vision</h2>
              <p className="vision-text">
                To become a trusted digital travel platform showcasing the true
                beauty of Sri Lanka while delivering authentic, responsible, and
                memorable travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="mission-section">
            <FaBullseye className="section-icon-large" />
            <div>
              <h2>Our Mission</h2>
              <ul className="mission-list">
                {mission.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Why Travel with Us</h2>
          <div className="why-us-grid">
            {whyUs.map((item, index) => (
              <div key={index} className="why-us-card card">
                <FaCheckCircle className="why-us-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Start Your Sri Lanka Adventure?</h2>
          <p>
            Let us help you plan a journey that reflects your travel style and
            interests.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Contact Us Today
            </Button>
            <Button variant="outline" size="lg" href="/tour-itineraries">
              Explore Our Tours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
