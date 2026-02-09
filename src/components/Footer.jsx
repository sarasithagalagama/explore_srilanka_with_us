import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <img
              src={logo}
              alt="Explore Sri Lanka With Us"
              className="footer-logo"
            />
            <p className="footer-description">
              Your trusted travel planning partner for authentic Sri Lankan
              experiences. Discover the Pearl of the Indian Ocean with carefully
              curated itineraries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="contact-info">
              <a
                href="mailto:withusexploresrilanka@gmail.com"
                className="contact-item"
              >
                <FaEnvelope className="contact-icon" />
                <span>withusexploresrilanka@gmail.com</span>
              </a>
              <a
                href="https://wa.me/94710733780"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaWhatsapp className="contact-icon" />
                <span>+94 71 07 33 780</span>
              </a>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Explore Sri Lanka With Us. All rights reserved.
          </p>
          <p className="footer-tagline">Crafted with ❤️ for travelers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
