import { Helmet } from "react-helmet-async";
import { FaEye, FaBullseye, FaCheck, FaHeart } from "react-icons/fa";
import Button from "../components/Button";
import "./AboutUs.css";

function AboutUs() {
  const mission = [
    "To promote Sri Lanka’s cultural and natural heritage",
    "To assist travelers with reliable travel guidance",
    "To offer safe, flexible, and personalized travel support",
    "To support sustainable and responsible tourism",
  ];

  const whyUs = [
    "Local expertise with global perspective",
    "Personalized travel planning",
    "Honest guidance and transparent communication",
    "Focus on authentic experiences.",
    "Reliable on-ground support",
  ];

  return (
    <div className="about-us">
      <Helmet>
        <title>About Us | Explore Sri Lanka With Us</title>
        <meta
          name="description"
          content="We are a local travel team dedicated to helping you discover the real Sri Lanka. Learn about our mission, vision, and commitment to authentic travel experiences."
        />
        <meta
          name="keywords"
          content="about explore sri lanka with us, sri lanka travel agency, local tour operators sri lanka, responsible tourism sri lanka"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Who We Are</h1>
          <p>
            Dedicated to helping travelers discover the true beauty of Sri Lanka
            through authentic, responsible, and memorable travel experiences.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid using Premium Shared Classes */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Our Purpose</h2>
            <p>
              We combine deep local knowledge with a commitment to quality,
              ensuring your journey is both meaningful and well-planned.
            </p>
          </div>

          <div className="modern-grid">
            {/* Vision Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div className="premium-card-icon">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
              </div>
              <div className="premium-card-body">
                <p className="premium-card-desc">
                  To become a trusted digital travel platform showcasing the
                  true beauty of Sri Lanka while delivering authentic,
                  responsible, and memorable travel experiences.
                </p>
                <div className="premium-highlights-box">
                  <h4>Our Goals</h4>
                  <ul className="premium-highlights-list">
                    <li>
                      <FaCheck className="list-icon" />
                      <span>Authentic Discovery</span>
                    </li>
                    <li>
                      <FaCheck className="list-icon" />
                      <span>Responsible Travel</span>
                    </li>
                    <li>
                      <FaCheck className="list-icon" />
                      <span>Memorable Journeys</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div className="premium-card-icon">
                  <FaBullseye />
                </div>
                <h3>Our Mission</h3>
              </div>
              <div className="premium-card-body">
                <p className="premium-card-desc">
                  We are dedicated to the following goals:
                </p>
                <div className="premium-highlights-box">
                  <h4>Core Focus</h4>
                  <ul className="premium-highlights-list">
                    {mission.map((item, index) => (
                      <li key={index}>
                        <FaCheck className="list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel with Us - Full Width Accent */}
      <section className="premium-cta-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>Why Travel with Us?</h2>
            <p>Experience the difference of a locally-led travel expert.</p>
          </div>
          <div className="modern-grid">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="premium-card"
                style={{ height: "auto", padding: "var(--spacing-xl)" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-md)",
                  }}
                >
                  <FaCheck
                    className="check-icon"
                    style={{
                      color: "var(--color-accent)",
                      fontSize: "var(--font-size-lg)",
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 600,
                      color: "var(--color-primary)",
                    }}
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Bottom CTA */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-container">
            <div className="premium-cta-card">
              <div className="premium-cta-content">
                <h2>Start Your Adventure</h2>
                <p>
                  Let us help you plan a journey that reflects your travel
                  style, interests, and preferred pace of discovery.
                </p>
                <div className="premium-cta-actions">
                  <Button variant="primary" size="lg" href="/contact">
                    Contact Us Today
                  </Button>
                  <Button variant="outline" size="lg" href="/tour-itineraries">
                    Explore Our Tours
                  </Button>
                </div>
              </div>
              <div className="premium-cta-visual">
                <FaHeart className="premium-cta-icon spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
