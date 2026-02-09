import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaMapMarkedAlt,
  FaUsers,
  FaHeart,
  FaRoute,
  FaCar,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  const destinations = [
    {
      name: "Colombo",
      description: "Urban culture, food, and city experiences",
      path: "/destinations#colombo",
    },
    {
      name: "Sigiriya",
      description: "Ancient rock fortress and cultural heritage",
      path: "/destinations#sigiriya",
    },
    {
      name: "Kandy",
      description: "Sacred sites and hill country gateway",
      path: "/destinations#kandy",
    },
    {
      name: "Nuwara Eliya",
      description: "Tea plantations and cool-climate landscapes",
      path: "/destinations#nuwara-eliya",
    },
    {
      name: "Ella",
      description: "Scenic views, hiking, and relaxed mountain town",
      path: "/destinations#ella",
    },
    {
      name: "Udawalawe",
      description: "Elephant safaris and wildlife experiences",
      path: "/destinations#udawalawe",
    },
    {
      name: "Yala",
      description: "Leopard safaris and national park exploration",
      path: "/destinations#yala",
    },
    {
      name: "Arugam Bay",
      description: "Surf culture and laid-back beach life",
      path: "/destinations#arugam-bay",
    },
    {
      name: "Hambantota",
      description: "Nature, salt lakes, and southern landscapes",
      path: "/destinations#hambantota",
    },
    {
      name: "Galle",
      description: "Colonial history and coastal charm",
      path: "/destinations#galle",
    },
    {
      name: "Hikkaduwa",
      description: "Beaches, marine life, and relaxation",
      path: "/destinations#hikkaduwa",
    },
  ];

  const experiences = [
    { title: "Cultural and Heritage Journeys", icon: <FaMapMarkedAlt /> },
    { title: "Hill Country and Scenic Train Routes", icon: <FaRoute /> },
    { title: "Wildlife and Safari Experiences", icon: <FaHeart /> },
    { title: "Beach and Coastal Travel", icon: <FaUsers /> },
    { title: "Slow Travel and Relaxed Routes", icon: <FaCheckCircle /> },
    { title: "Fully Customized Sri Lanka Itineraries", icon: <FaCar /> },
  ];

  const whyChooseUs = [
    "In-depth local knowledge of Sri Lanka's key destinations",
    "Well-structured itineraries based on realistic travel distances",
    "Honest destination and experience recommendations",
    "Flexible travel plans tailored to your interests and schedule",
    "Optional local travel assistance when required",
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Share Your Preferences",
      description:
        "Tell us your travel dates, interests, and preferred destinations.",
    },
    {
      step: 2,
      title: "Receive Itinerary Ideas",
      description:
        "Get personalized itinerary suggestions and destination guidance.",
    },
    {
      step: 3,
      title: "Discuss Options",
      description: "Review optional travel assistance if required.",
    },
    {
      step: 4,
      title: "Travel with Confidence",
      description: "Finalize your plan and explore Sri Lanka independently.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Discover Sri Lanka with Local Travel Insight
          </h1>
          <p className="hero-subtitle animate-fade-in">
            Carefully planned itineraries covering Sri Lanka's culture, hill
            country, wildlife, and coast.
          </p>
          <p className="hero-description animate-fade-in">
            Sri Lanka is a compact island rich in history, natural beauty,
            wildlife, and coastal charm. We help travelers plan meaningful
            journeys across Sri Lanka through well-structured itineraries,
            destination guidance, and personalized travel advice designed to
            match your interests, travel style, and pace.
          </p>
          <div className="hero-buttons animate-fade-in">
            <Button variant="primary" size="lg" href="/contact">
              Plan Your Sri Lanka Trip
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              icon={<FaWhatsapp />}
              href="https://wa.me/94710733780"
            >
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section what-we-do">
        <div className="container">
          <h2 className="section-title text-center">What We Do</h2>
          <div className="what-we-do-content">
            <p>
              Planning a multi-destination trip in Sri Lanka requires careful
              timing, realistic travel routes, and an understanding of local
              conditions. Choosing the right mix of cities, nature, wildlife,
              and beaches can make a significant difference to your overall
              experience.
            </p>
            <p>
              We support your travel planning by providing clear destination
              insights, suggested itineraries, and local guidance. Our role is
              to help you create a well-balanced travel plan that allows you to
              explore Sri Lanka comfortably and independently.
            </p>
          </div>
        </div>
      </section>

      {/* Why Travel with Us */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title text-center">Why Travel with Us</h2>
          <p className="section-subtitle text-center">
            We focus on thoughtful planning, honest guidance, and personalized
            support.
          </p>
          <div className="features-grid">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="feature-card card">
                <FaCheckCircle className="feature-icon" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <p
            className="text-center"
            style={{
              marginTop: "var(--spacing-xl)",
              fontSize: "var(--font-size-lg)",
              fontWeight: 600,
            }}
          >
            We help you plan with confidence, clarity, and peace of mind.
          </p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section popular-destinations">
        <div className="container">
          <h2 className="section-title text-center">
            Popular Destinations in Sri Lanka
          </h2>
          <p className="section-subtitle text-center">
            Our itineraries focus on Sri Lanka's most diverse and rewarding
            destinations
          </p>
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                to={destination.path}
                className="destination-card card"
              >
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </Link>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: "var(--spacing-xl)" }}>
            Each destination is selected to create a balanced journey across
            culture, nature, wildlife, and coastline.
          </p>
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="section travel-experiences">
        <div className="container">
          <h2 className="section-title text-center">
            Travel Experiences & Itineraries
          </h2>
          <p className="section-subtitle text-center">
            Choose from curated itinerary ideas or request a customized travel
            plan
          </p>
          <div className="experiences-grid">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card card">
                <div className="experience-icon">{experience.icon}</div>
                <h4>{experience.title}</h4>
              </div>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: "var(--spacing-xl)" }}>
            All travel plans are flexible and designed around your preferred
            pace and interests.
          </p>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-2xl)" }}
          >
            <Button variant="primary" size="lg" href="/tour-itineraries">
              Explore All Itineraries
            </Button>
          </div>
        </div>
      </section>

      {/* Optional Car Service */}
      <section className="section car-service">
        <div className="container">
          <div className="car-service-content">
            <div className="car-service-text">
              <h2>Optional Car with Driver Assistance</h2>
              <p>
                For travelers who prefer additional comfort and ease, we can
                assist in arranging a private car with a local driver to support
                travel between destinations.
              </p>
              <h4>This option is suitable for:</h4>
              <ul>
                <li>First-time visitors to Sri Lanka</li>
                <li>Families, couples, and small groups</li>
                <li>Travelers covering multiple destinations</li>
              </ul>
              <p
                style={{ fontStyle: "italic", marginTop: "var(--spacing-md)" }}
              >
                This service is optional and intended to support independent
                travel rather than operate as a guided tour.
              </p>
              <Button variant="secondary" size="lg" href="/driver-service">
                Learn More About Driver Service
              </Button>
            </div>
            <div className="car-service-icon">
              <FaCar />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="section-subtitle text-center">
            We guide you during the planning stage, so your journey begins
            smoothly
          </p>
          <div className="steps-grid">
            {howItWorks.map((item) => (
              <div key={item.step} className="step-card card">
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Start Planning Your Sri Lanka Journey</h2>
          <p className="cta-description">
            Whether you are exploring Sri Lanka for the first time or returning
            to see more, we help you plan a meaningful and well-structured
            travel experience.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Start Planning Your Trip
            </Button>
            <Button variant="outline" size="lg" href="/about-us">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="section closing-section">
        <div className="container text-center">
          <p className="closing-text">
            From cultural cities and misty hills to wildlife parks and coastal
            towns, Sri Lanka offers a journey full of variety and discovery. Our
            goal is to help you experience the island in a way that feels
            personal, balanced, and authentic.
          </p>
          <p className="closing-tagline">
            Let us help you design a Sri Lanka journey that reflects your travel
            style and interests.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
