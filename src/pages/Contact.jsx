import { Helmet } from "react-helmet-async";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaTripadvisor,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us | Plan Your Sri Lanka Trip</title>
        <meta
          name="description"
          content="Get in touch with us to start planning your Sri Lanka adventure. Contact us via Email, WhatsApp, or Phone for personalized travel assistance."
        />
        <meta
          name="keywords"
          content="contact explore sri lanka, sri lanka travel inquiry, plan trip to sri lanka, whatsapp travel sri lanka"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Get in Touch</h1>
          <p>
            We are happy to help you plan your Sri Lanka journey. Send us your
            travel dates and interests, and we will assist you with a customized
            plan.
          </p>
        </div>
      </section>

      {/* Contact Section using Premium Shared Classes */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Contact Information</h2>
            <p>
              Quick response is our priority. Most inquiries are addressed
              within 24 hours.
            </p>
          </div>

          <div className="modern-grid">
            {/* Email Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div className="premium-card-icon">
                  <FaEnvelope />
                </div>
                <h3>Email Us</h3>
              </div>
              <div className="premium-card-body">
                <p className="premium-card-desc">
                  For detailed inquiries, itineraries, or documentation
                  requests.
                </p>
                <div className="premium-highlights-box">
                  <a
                    href="mailto:withusexploresrilanka@gmail.com"
                    className="contact-premium-link"
                  >
                    withusexploresrilanka@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div
                  className="premium-card-icon"
                  style={{
                    background: "rgba(37, 211, 102, 0.1)",
                    color: "#25D366",
                  }}
                >
                  <FaWhatsapp />
                </div>
                <h3>WhatsApp</h3>
              </div>
              <div className="premium-card-body">
                <p className="premium-card-desc">
                  Fastest response time for quick questions and live travel
                  support.
                </p>
                <div className="premium-highlights-box">
                  <a
                    href="https://wa.me/94710733780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-premium-link"
                  >
                    +94 71 07 33 780
                  </a>
                </div>
                <div className="premium-card-footer">
                  <span className="premium-badge-text">
                    <strong>Typical Response:</strong> Under 1 Hour
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="premium-card">
              <div className="premium-card-header">
                <div className="premium-card-icon">
                  <FaPhone />
                </div>
                <h3>Call Us</h3>
              </div>
              <div className="premium-card-body">
                <p className="premium-card-desc">
                  Direct voice support for urgent matters or detailed planning
                  calls.
                </p>
                <div className="premium-highlights-box">
                  <a href="tel:+94710733780" className="contact-premium-link">
                    +94 71 07 33 780
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Connect Banner using Premium CTA Style */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-container">
            <div className="premium-cta-card">
              <div className="premium-cta-content">
                <h2>Connect With Us</h2>
                <p>
                  Follow our journeys across the island. See client reviews,
                  travel inspiration, and live updates from Sri Lanka.
                </p>
                <div className="premium-cta-actions">
                  <a
                    href="https://www.facebook.com/share/1Gsd9iUb82/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-premium-btn fb"
                  >
                    <FaFacebook /> <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.tripadvisor.com/Profile/Passenger20233050521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-premium-btn ta"
                  >
                    <FaTripadvisor /> <span>TripAdvisor</span>
                  </a>
                </div>
              </div>
              <div className="premium-cta-visual">
                <FaMapMarkerAlt className="premium-cta-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
