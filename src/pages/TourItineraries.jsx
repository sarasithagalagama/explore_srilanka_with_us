import { FaLeaf, FaLandmark, FaHeart, FaMountain, FaCog } from "react-icons/fa";
import Button from "../components/Button";
import "./TourItineraries.css";

function TourItineraries() {
  const tours = [
    {
      icon: <FaLeaf />,
      title: "Nature & Wildlife Tours",
      description:
        "Experience Sri Lanka's rich biodiversity, national parks, and scenic landscapes.",
      highlights: [
        "Udawalawe National Park – Elephant safaris",
        "Yala National Park – Leopards and wildlife",
        "Hill country landscapes in Ella and Nuwara Eliya",
        "Waterfalls, forests, and scenic viewpoints",
      ],
      idealFor: "Nature lovers, photographers, eco-tourists",
    },
    {
      icon: <FaLandmark />,
      title: "Cultural & Heritage Tours",
      description:
        "Discover ancient cities, sacred temples, and UNESCO World Heritage Sites.",
      highlights: [
        "Sigiriya Rock Fortress",
        "Kandy and the Temple of the Sacred Tooth Relic",
        "Galle Fort",
        "Cultural villages and traditional experiences",
      ],
      idealFor: "History lovers, cultural explorers",
    },
    {
      icon: <FaHeart />,
      title: "Honeymoon Tours",
      description:
        "Romantic journeys combining scenic beauty, privacy, and unforgettable moments.",
      highlights: [
        "Misty hill country views in Ella and Nuwara Eliya",
        "Sunset beaches in Galle, Hikkaduwa, and Mirissa region",
        "Leisure time, scenic walks, and photo spots",
      ],
      idealFor: "Couples, honeymooners",
    },
    {
      icon: <FaMountain />,
      title: "Adventure Tours",
      description: "For travelers seeking excitement and outdoor activities.",
      highlights: [
        "Hiking in Ella and Little Adam's Peak",
        "Surfing in Arugam Bay",
        "Wildlife safaris",
        "Scenic train rides",
      ],
      idealFor: "Adventure seekers, active travelers",
    },
    {
      icon: <FaCog />,
      title: "Custom Tours",
      description:
        "Design your own itinerary based on your interests, time, and budget.",
      highlights: [
        "Mix beaches, culture, wildlife, and hills",
        "Flexible travel pace",
        "Personalized route planning",
      ],
      idealFor: "Families, solo travelers, long stays",
    },
  ];

  return (
    <div className="tour-itineraries">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Tour Itineraries - Explore Sri Lanka Your Way</h1>
          <p>
            Our itineraries are carefully designed to showcase the best of Sri
            Lanka while allowing flexibility based on your interests, pace, and
            travel dates. Whether you love nature, history, adventure, or
            romance, we help you experience Sri Lanka authentically.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="section">
        <div className="container">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`tour-section ${index % 2 === 0 ? "" : "tour-reverse"}`}
            >
              <div className="tour-icon-large">{tour.icon}</div>
              <div className="tour-content">
                <h2>{tour.title}</h2>
                <p className="tour-description">{tour.description}</p>

                <h4>Highlights include:</h4>
                <ul className="tour-highlights">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <p className="tour-ideal">
                  <strong>Ideal for:</strong> {tour.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Plan Your Perfect Sri Lanka Journey?</h2>
          <p>
            Contact us to discuss your travel preferences and receive
            personalized itinerary recommendations.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Get Your Custom Itinerary
            </Button>
            <Button variant="outline" size="lg" href="/destinations">
              Explore Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TourItineraries;
