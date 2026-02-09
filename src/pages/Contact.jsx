import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPhone, FaPaperPlane } from "react-icons/fa";
import Button from "../components/Button";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    const mailtoLink = `mailto:withusexploresrilanka@gmail.com?subject=Travel Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ATravel Dates: ${formData.travelDates}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>
            We are happy to help you plan your Sri Lanka journey. Send us your
            travel dates and interests, and we will assist you with a customized
            plan.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="travelDates">Preferred Travel Dates</label>
                  <input
                    type="text"
                    id="travelDates"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    placeholder="e.g., March 15-25, 2026"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your travel interests, preferred destinations, group size, and any specific requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<FaPaperPlane />}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <h2>Get In Touch</h2>

              <div className="contact-card card">
                <FaEnvelope className="contact-card-icon" />
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:withusexploresrilanka@gmail.com">
                    withusexploresrilanka@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card card">
                <FaWhatsapp className="contact-card-icon whatsapp" />
                <div>
                  <h4>WhatsApp</h4>
                  <a
                    href="https://wa.me/94710733780"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +94 71 07 33 780
                  </a>
                  <p className="contact-note">Quick responses via WhatsApp</p>
                </div>
              </div>

              <div className="contact-card card">
                <FaPhone className="contact-card-icon" />
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+94710733780">+94 71 07 33 780</a>
                </div>
              </div>

              <div className="quick-action">
                <h3>Prefer Instant Chat?</h3>
                <p>
                  Connect with us on WhatsApp for quick responses and real-time
                  assistance.
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
                  icon={<FaWhatsapp />}
                  href="https://wa.me/94710733780"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section bg-light">
        <div className="container text-center">
          <h3>We Typically Respond Within 24 Hours</h3>
          <p>
            Our team is dedicated to helping you plan the perfect Sri Lanka
            journey. We'll review your inquiry and get back to you with
            personalized recommendations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
