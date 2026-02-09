import { Helmet } from "react-helmet-async";
import {
  FaLeaf,
  FaLandmark,
  FaHeart,
  FaMountain,
  FaCog,
  FaCheck,
} from "react-icons/fa";
import Button from "../components/Button";
import "./TourItineraries.css";

function TourItineraries() {
  const tours = [
    {
      icon: <FaLeaf />,
      title: "Wildlife & Nature Tours",
      type: "nature",
      description:
        "Focus on national parks, elephants, leopards, and scenic landscapes.",
      highlights: ["Udawalawe", "Yala", "Ella", "Nuwara Eliya"],
      idealFor: "Nature lovers, photographers",
    },
    {
      icon: <FaLandmark />,
      title: "Cultural Heritage Tours",
      type: "culture",
      description: "Explore ancient cities, temples, and history.",
      highlights: ["Sigiriya", "Kandy", "Galle", "Polonnaruwa"],
      idealFor: "History lovers, cultural explorers",
    },
    {
      icon: <FaHeart />, // Using Heart for Beach/Relaxation or maybe need a better icon like Umbrella/Sun if available, but staying with existing import style for now.
      title: "Beach & Relaxation Tours",
      type: "beach",
      description: "Laid-back travel along the coast.",
      highlights: ["Mirissa", "Bentota", "Trincomalee", "Arugam Bay"],
      idealFor: "Couples, families, leisure travelers",
    },
    {
      icon: <FaMountain />,
      title: "Adventure & Hiking Tours",
      type: "adventure",
      description: "Active travel with hiking and exploration.",
      highlights: ["Ella Rock", "Adam’s Peak", "Knuckles Mountain Range"],
      idealFor: "Adventure seekers, active travelers",
    },
    {
      icon: <FaCog />,
      title: "Custom Tours",
      type: "custom",
      description: "Plan a trip that fits your schedule and interests.",
      highlights: ["Flexible routes", "Personalized planning"],
      idealFor: "Families, solo travelers, long stays",
    },
  ];

  return (
    <div className="tour-itineraries">
      <Helmet>
        <title>
          Sri Lanka Tour Packages | Wildlife, Culture, Beach & Adventure
        </title>
        <meta
          name="description"
          content="Choose from our carefully curated Sri Lanka tour packages. Whether you love wildlife, history, or beaches, we have the perfect itinerary for you."
        />
        <meta
          name="keywords"
          content="Sri Lanka tour packages, wildlife tours Sri Lanka, Sri Lanka cultural tours, adventure tours Sri Lanka, family holidays Sri Lanka"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Tour Packages & Itineraries</h1>
          <p>
            Explore Sri Lanka with our carefully planned tour packages. We offer
            a range of itineraries designed to suit different travel styles.
          </p>
        </div>
      </section>

      {/* Tours Section using Premium Shared Classes */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Select Your Travel Style</h2>
            <p>
              Whether you love nature, history, adventure, or romance, we help
              you experience Sri Lanka authentically.
            </p>
          </div>

          <div className="modern-grid">
            {tours.map((tour, index) => (
              <div key={index} className="premium-card">
                <div className="premium-card-header">
                  <div className="premium-card-icon">{tour.icon}</div>
                  <h3>{tour.title}</h3>
                </div>

                <div className="premium-card-body">
                  <p className="premium-card-desc">{tour.description}</p>

                  <div className="premium-highlights-box">
                    <h4>What's Included</h4>
                    <ul className="premium-highlights-list">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <FaCheck className="list-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="premium-card-footer">
                    <span className="premium-badge-text">
                      <strong>Perfect for:</strong> {tour.idealFor}
                    </span>
                  </div>
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
                <h2>Can't find what you're looking for?</h2>
                <p>
                  Every traveler is unique. Let us help you plan a completely
                  custom itinerary that matches your travel dates, budget, and
                  specific interests.
                </p>
                <div className="premium-cta-actions">
                  <Button variant="primary" size="lg" href="/contact">
                    Start Planning Your Trip
                  </Button>
                  <Button variant="outline" size="lg" href="/destinations">
                    Explore Destinations
                  </Button>
                </div>
              </div>
              <div className="premium-cta-visual">
                <FaCog className="premium-cta-icon spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TourItineraries;
