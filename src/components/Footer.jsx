import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaTripadvisor,
  FaPhoneAlt,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about-sri-lanka", label: "About Sri Lanka" },
    { path: "/destinations", label: "Destinations" },
    { path: "/tour-itineraries", label: "Tour Itineraries" },
  ];

  const serviceLinks = [
    { path: "/driver-service", label: "Driver Service" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="footer-v2">
      <div className="main-footer">
        <div className="footer-wrapper">
          <div className="footer-grid-v2">
            {/* Brand Section */}
            <div className="footer-col brand-col">
              <Link to="/" className="f-logo">
                <img src={logo} alt="Explore Sri Lanka" />
              </Link>
              <p className="f-desc">
                Your premier companion in discovering the hidden gems of Sri
                Lanka. We specialize in authentic, personalized experiences that
                create memories for a lifetime.
              </p>
              <div className="f-socials">
                <a
                  href="https://www.facebook.com/share/1Gsd9iUb82/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.tripadvisor.com/Profile/Passenger20233050521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-link"
                  aria-label="TripAdvisor"
                >
                  <FaTripadvisor />
                </a>
                <a
                  href="https://wa.me/94710733780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-link"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-col">
              <h4 className="f-title">Quick Links</h4>
              <ul className="f-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <FaChevronRight className="f-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="f-title">Our Services</h4>
              <ul className="f-links">
                {serviceLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <FaChevronRight className="f-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="footer-contact-bar">
            <div className="c-item">
              <div className="c-icon-box">
                <FaEnvelope />
              </div>
              <div className="c-info">
                <span>Email Us</span>
                <a href="mailto:withusexploresrilanka@gmail.com">
                  withusexploresrilanka@gmail.com
                </a>
              </div>
            </div>
            <div className="c-item">
              <div className="c-icon-box">
                <FaPhoneAlt />
              </div>
              <div className="c-info">
                <span>Call / WhatsApp</span>
                <a href="tel:+94710733780">+94 71 07 33 780</a>
              </div>
            </div>
            <div className="c-item">
              <div className="c-icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="c-info">
                <span>Based In</span>
                <strong>Sri Lanka</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-v2">
        <div className="bottom-wrapper">
          <p className="f-copyright">
            &copy; {currentYear} <span>Explore Sri Lanka With Us</span>. All
            rights reserved.
          </p>
          <div className="f-policy-links">
            <span className="sc-text">
              Crafted by :{" "}
              <a
                href="https://infernation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                infernation.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
