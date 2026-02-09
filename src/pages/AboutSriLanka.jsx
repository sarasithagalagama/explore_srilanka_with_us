import {
  FaUmbrellaBeach,
  FaMountain,
  FaUtensils,
  FaLandmark,
  FaInfoCircle,
} from "react-icons/fa";
import "./AboutSriLanka.css";

function AboutSriLanka() {
  const whyVisit = [
    "Eight UNESCO World Heritage Sites",
    "Diverse landscapes: beaches, hills, forests, wildlife parks",
    "Rich cultural heritage over 2,500 years old",
    "World-famous tea plantations",
    "Friendly locals and authentic travel experiences",
    "Affordable luxury and unique boutique stays",
  ];

  const bestTime = [
    {
      period: "December to April",
      description: "Best for west & south coast, hill country",
    },
    {
      period: "May to September",
      description: "Best for east coast (Arugam Bay)",
    },
    { period: "July to September", description: "Ideal for wildlife viewing" },
  ];

  const dishes = [
    "Rice and Curry",
    "Hoppers & String Hoppers",
    "Kottu Roti",
    "Fresh seafood",
    "Tropical fruits and Ceylon tea",
  ];

  const travelTips = [
    "Dress modestly when visiting temples",
    "Remove shoes before entering religious sites",
    "Carry cash for small vendors",
    "Respect local customs and wildlife",
    "Always stay hydrated in tropical climates",
  ];

  return (
    <div className="about-sri-lanka">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Sri Lanka</h1>
          <p>
            Sri Lanka, known as the Pearl of the Indian Ocean, is a compact
            island rich in history, nature, culture, and warm hospitality.
            Within a few hours of travel, visitors can experience golden
            beaches, misty mountains, ancient kingdoms, wildlife safaris, and
            vibrant cities. This diversity makes Sri Lanka an ideal destination
            for both short holidays and extended explorations.
          </p>
        </div>
      </section>

      {/* Why Visit */}
      <section className="section">
        <div className="container">
          <div className="content-section">
            <div className="section-icon">
              <FaLandmark />
            </div>
            <div>
              <h2>Why Visit Sri Lanka</h2>
              <ul className="feature-list">
                {whyVisit.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-section">
            <div className="section-icon">
              <FaUmbrellaBeach />
            </div>
            <div>
              <h2>Best Time to Visit Sri Lanka</h2>
              <p>
                Sri Lanka is a year-round destination due to its two monsoon
                systems.
              </p>
              <div className="time-grid">
                {bestTime.map((item, index) => (
                  <div key={index} className="time-card card">
                    <h4>{item.period}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: "var(--spacing-lg)" }}>
                Travel plans can be customized depending on weather patterns and
                personal preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Traditions */}
      <section className="section">
        <div className="container">
          <div className="content-section">
            <div className="section-icon">
              <FaMountain />
            </div>
            <div>
              <h2>Culture & Traditions</h2>
              <p>
                Sri Lankan culture is deeply influenced by Buddhism, Hinduism,
                Islam, and Christianity. Ancient temples, colorful festivals,
                traditional dance forms, and daily rituals reflect the country's
                spiritual heritage.
              </p>
              <h4>Key highlights:</h4>
              <ul className="feature-list">
                <li>Vesak Festival (Buddhist celebrations)</li>
                <li>Kandy Esala Perahera</li>
                <li>Traditional Kandyan and Low-Country dances</li>
                <li>Village lifestyles and local customs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lankan Food */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-section">
            <div className="section-icon">
              <FaUtensils />
            </div>
            <div>
              <h2>Sri Lankan Food</h2>
              <p>
                Sri Lankan cuisine is known for its rich spices, fresh
                ingredients, and bold flavors.
              </p>
              <h4>Popular dishes include:</h4>
              <ul className="feature-list">
                {dishes.map((dish, index) => (
                  <li key={index}>{dish}</li>
                ))}
              </ul>
              <p style={{ marginTop: "var(--spacing-lg)" }}>
                Vegetarian and vegan options are widely available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section">
        <div className="container">
          <div className="content-section">
            <div className="section-icon">
              <FaInfoCircle />
            </div>
            <div>
              <h2>Travel Tips</h2>
              <ul className="feature-list">
                {travelTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSriLanka;
