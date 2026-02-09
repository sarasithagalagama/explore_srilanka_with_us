import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  FaWhatsapp,
  FaMapMarkedAlt,
  FaUsers,
  FaHeart,
  FaRoute,
  FaCar,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  /* Bento Grid Configuration */
  /* Updated to match Content.txt list: Colombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Udawalawe, Yala, Arugam Bay, Hambantota, Galle, Hikkaduwa */
  const destinations = [
    {
      name: "Colombo",
      description: "Urban culture, food, and city experiences",
      path: "/destinations#colombo",
      image: "src/assets/Images/colombo.jpg",
      className: "col-span-2",
    },
    {
      name: "Sigiriya",
      description: "Ancient rock fortress and cultural heritage",
      path: "/destinations#sigiriya",
      image: "src/assets/Images/sigiriya.jpg",
      className: "col-span-2 row-span-2", // Featured Item
    },
    {
      name: "Kandy",
      description: "Sacred sites and hill country gateway",
      path: "/destinations#kandy",
      image: "src/assets/Images/kandy.jpg",
      className: "col-span-1",
    },
    {
      name: "Nuwara Eliya",
      description: "Tea plantations and cool-climate landscapes",
      path: "/destinations#nuwara-eliya",
      image: "src/assets/Images/nuwara eliya.jpg",
      className: "col-span-1",
    },
    {
      name: "Ella",
      description: "Scenic views, hiking, and relaxed mountain town",
      path: "/destinations#ella",
      image: "src/assets/Images/ella.jpg",
      className: "col-span-2",
    },
    {
      name: "Udawalawe",
      description: "Elephant safaris and wildlife experiences",
      path: "/destinations#udawalawe",
      image: "src/assets/Images/udawalawe.jpg",
      className: "col-span-1",
    },
    {
      name: "Yala",
      description: "Leopard safaris and national park exploration",
      path: "/destinations#yala",
      image: "src/assets/Images/yala.jpg",
      className: "col-span-1",
    },
    {
      name: "Arugam Bay",
      description: "Surf culture and laid-back beach life",
      path: "/destinations#arugam-bay",
      image: "src/assets/Images/Arugam Bay.jpg",
      className: "col-span-2",
    },
    {
      name: "Hambantota",
      description: "Nature, salt lakes, and southern landscapes",
      path: "/destinations#hambantota",
      image: "src/assets/Images/Hambantota.jpg",
      className: "col-span-2",
    },
    {
      name: "Galle",
      description: "Colonial history and coastal charm",
      path: "/destinations#galle",
      image: "src/assets/Images/galle.jpg",
      className: "col-span-1",
    },
    {
      name: "Hikkaduwa",
      description: "Beaches, marine life, and relaxation",
      path: "/destinations#hikkaduwa",
      image: "src/assets/Images/Hikkaduwa.jpg",
      className: "col-span-1",
    },
  ];

  const experiences = [
    {
      title: "Cultural and Heritage Journeys",
      icon: <FaMapMarkedAlt />,
      desc: "", // Description not explicitly in the list in Content.txt, focusing on titles.
    },
    {
      title: "Hill Country and Scenic Train Routes",
      icon: <FaRoute />,
      desc: "",
    },
    {
      title: "Wildlife and Safari Experiences",
      icon: <FaHeart />,
      desc: "",
    },
    {
      title: "Beach and Coastal Travel",
      icon: <FaUsers />,
      desc: "",
    },
    {
      title: "Slow Travel and Relaxed Routes", // Added item
      icon: <FaCheck />,
      desc: "",
    },
    {
      title: "Fully Customized Sri Lanka Itineraries", // Added item
      icon: <FaCar />,
      desc: "",
    },
  ];

  const whyChooseUs = [
    "In-depth local knowledge of Sri Lanka’s key destinations",
    "Well-structured itineraries based on realistic travel distances",
    "Honest destination and experience recommendations",
    "Flexible travel plans tailored to your interests and schedule",
    "Optional local travel assistance when required",
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Share your travel dates, interests, and preferred destinations.",
      description: "",
    },
    {
      step: 2,
      title: "Receive itinerary ideas and destination guidance.",
      description: "",
    },
    {
      step: 3,
      title: "Discuss optional travel assistance if required.",
      description: "",
    },
    {
      step: 4,
      title: "Finalize your plan and travel independently with confidence.",
      description: "",
    },
  ];

  /* Scroll Animation Logic */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of element is visible
    );

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Explore Sri Lanka With Us | Personalized Travel & Tours</title>
        <meta
          name="description"
          content="Discover Sri Lanka with expert local guidance. We offer personalized tour itineraries, driver services, and authentic travel experiences tailored to your interests."
        />
        <meta
          name="keywords"
          content="Sri Lanka travel, Sri Lanka tours, private driver Sri Lanka, Sri Lanka vacation packages, custom Sri Lanka itinerary"
        />
      </Helmet>

      {/* Hero Section - Full Screen & Modern */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll is-visible delay-100">
            Discover Sri Lanka with{" "}
            <span className="text-gradient-gold">Local Travel Insight</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll is-visible">
            Carefully planned itineraries covering Sri Lanka’s culture, hill
            country, wildlife, and coast.
          </p>
          <p className="hero-description animate-on-scroll is-visible delay-200">
            Sri Lanka is a compact island rich in history, natural beauty,
            wildlife, and coastal charm. We help travelers plan meaningful
            journeys across Sri Lanka through well-structured itineraries,
            destination guidance, and personalized travel advice designed to
            match your interests, travel style, and pace.
          </p>
          <div className="hero-buttons animate-on-scroll is-visible delay-300">
            <Button variant="primary" size="lg" href="/contact">
              Plan Your Sri Lanka Trip
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href="https://wa.me/94710733780"
              icon={<FaWhatsapp />}
            >
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="scroll-indicator animate-on-scroll is-visible delay-300"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-down"></div>
        </div>
      </section>

      {/* What We Do - Split Layout Asymmetrical */}
      <section className="modern-section">
        <div className="container-wide">
          <div className="split-section">
            <div className="split-content animate-on-scroll">
              <h2>What We Do</h2>
              <div className="what-we-do-content">
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                    color: "var(--color-primary)",
                  }}
                >
                  Planning a multi-destination trip in Sri Lanka requires
                  careful timing, realistic travel routes, and an understanding
                  of local conditions.
                </p>
                <p>
                  Choosing the right mix of cities, nature, wildlife, and
                  beaches can make a significant difference to your overall
                  experience.
                </p>
                <div className="float-box glass-panel">
                  <p style={{ margin: 0, fontWeight: 500 }}>
                    "We support your travel planning by providing clear
                    destination insights, suggested itineraries, and local
                    guidance. Our role is to help you create a well-balanced
                    travel plan that allows you to explore Sri Lanka comfortably
                    and independently."
                  </p>
                </div>
              </div>
            </div>

            <div className="split-image-container animate-on-scroll delay-200">
              <img
                src="src/assets/Images/Aerial view of tea plantation near the lake on sri lanka.jpg"
                alt="Sri Lanka Aerial View"
                className="split-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel with Us - Premium Grid */}
      <section className="modern-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>Why Travel with Us</h2>
            <p>
              We focus on thoughtful planning, honest guidance, and personalized
              support.
            </p>
          </div>
          <div
            className="modern-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="premium-card"
                style={{
                  padding: "var(--spacing-xl)",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  className="premium-card-icon"
                  style={{ marginBottom: "var(--spacing-md)" }}
                >
                  <FaCheck />
                </div>
                <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{feature}</h3>
              </div>
            ))}
          </div>
          <div
            className="text-center"
            style={{
              marginTop: "var(--spacing-lg)",
              color: "var(--color-text-secondary)",
            }}
          >
            <p>We help you plan with confidence, clarity, and peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations - Bento Grid */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-intro">
            <h2>Popular Destinations in Sri Lanka</h2>
            <p>
              Our itineraries focus on Sri Lanka’s most diverse and rewarding
              destinations:
            </p>
          </div>
          <div className="grid-bento">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                to={destination.path}
                className={`premium-card destination-card ${destination.className || "col-span-1"} animate-on-scroll delay-${(index % 3) * 100}`}
                style={{
                  padding: 0,
                  border: "none",
                  minHeight: "240px",
                }}
              >
                <div className="destination-bg-wrapper">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-bg-image"
                    loading="lazy"
                  />
                  <div className="destination-overlay"></div>
                </div>

                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <div className="destination-arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-2xl)" }}
          >
            <p
              style={{
                marginBottom: "var(--spacing-lg)",
                color: "var(--color-text-secondary)",
              }}
            >
              Each destination is selected to create a balanced journey across
              culture, nature, wildlife, and coastline.
            </p>
            <Button variant="outline" href="/destinations">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Experiences - Premium Cards */}
      <section className="modern-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>Travel Experiences & Itineraries</h2>
            <p>
              Choose from curated itinerary ideas or request a customized travel
              plan.
            </p>
          </div>
          <div className="modern-grid">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="premium-card"
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <div className="premium-card-header">
                  <div className="premium-card-icon">{exp.icon}</div>
                  <h3>{exp.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div
            className="text-center"
            style={{
              marginTop: "var(--spacing-lg)",
              color: "var(--color-text-secondary)",
            }}
          >
            <p>
              All travel plans are flexible and designed around your preferred
              pace and interests.
            </p>
          </div>
        </div>
      </section>

      {/* Private Driver Service - Premium CTA Style */}
      <section className="premium-cta-section">
        <div className="container">
          <div className="premium-cta-container">
            <div className="premium-cta-card">
              <div className="premium-cta-content">
                <h2>Optional Car with Driver Assistance</h2>
                <p>
                  For travelers who prefer additional comfort and ease, we can
                  assist in arranging a private car with a local driver to
                  support travel between destinations.
                </p>
                <div
                  className="car-service-details"
                  style={{
                    textAlign: "left",
                    marginBottom: "var(--spacing-lg)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <p>This option is suitable for:</p>
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>First-time visitors to Sri Lanka</li>
                    <li>Families, couples, and small groups</li>
                    <li>Travelers covering multiple destinations</li>
                  </ul>
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                    }}
                  >
                    This service is optional and intended to support independent
                    travel rather than operate as a guided tour.
                  </p>
                </div>
                <div className="premium-cta-actions">
                  <Button variant="primary" size="lg" href="/driver-service">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="premium-cta-visual">
                <FaCar className="premium-cta-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="modern-section bg-cream">
        <div className="container">
          <div className="modern-intro">
            <h2>How It Works</h2>
            <p>Our simple process to get you on your way.</p>
          </div>
          <div className="timeline-grid">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                className={`premium-card step-card animate-on-scroll delay-${index * 100}`}
              >
                <div className="step-number">{item.step}</div>
                <h3 style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "10px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {/* Placeholder for future description if needed */}
                </p>
              </div>
            ))}
          </div>
          <div
            className="text-center"
            style={{
              marginTop: "var(--spacing-lg)",
              color: "var(--color-text-secondary)",
            }}
          >
            <p>
              We guide you during the planning stage, so your journey begins
              smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="premium-cta-section">
        <div className="container text-center">
          <div className="modern-intro">
            {" "}
            {/* Reusing modern-intro for centering and sizing */}
            <h2>Start Planning Your Trip</h2>
            <p>
              Whether you are exploring Sri Lanka for the first time or
              returning to see more, we help you plan a meaningful and
              well-structured travel experience.
            </p>
            <p style={{ marginTop: "var(--spacing-md)", fontSize: "0.95rem" }}>
              From cultural cities and misty hills to wildlife parks and coastal
              towns, Sri Lanka offers a journey full of variety and discovery.
              Our goal is to help you experience the island in a way that feels
              personal, balanced, and authentic.
            </p>
            <p style={{ marginBottom: "var(--spacing-lg)", fontWeight: "600" }}>
              Let us help you design a Sri Lanka journey that reflects your
              travel style and interests.
            </p>
          </div>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="/contact">
              Start Planning Your Trip
            </Button>
            <Button variant="outline" size="lg" href="/about-us">
              About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
