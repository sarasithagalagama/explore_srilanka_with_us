import { Helmet } from "react-helmet-async";
import {
  FaUmbrellaBeach,
  FaMountain,
  FaUtensils,
  FaLandmark,
  FaInfoCircle,
  FaCheck,
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
      <Helmet>
        <title>
          About Sri Lanka | Travel Guide, Culture & Best Time to Visit
        </title>
        <meta
          name="description"
          content="Learn about Sri Lanka's rich history, diverse culture, and best travel times. Discover why the Pearl of the Indian Ocean is a top travel destination."
        />
        <meta
          name="keywords"
          content="about Sri Lanka, Sri Lanka culture, best time to visit Sri Lanka, Sri Lanka history, Sri Lanka travel guide"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Discover Sri Lanka</h1>
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

      {/* Content Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-cards about-grid">
            {/* Why Visit */}
            <div className="card content-section">
              <div className="card-header-icon">
                <FaLandmark />
              </div>
              <h2>Why Visit Sri Lanka</h2>
              <ul className="icon-list">
                {whyVisit.map((item, index) => (
                  <li key={index}>
                    <FaCheck className="list-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Time to Visit */}
            <div className="card content-section">
              <div className="card-header-icon">
                <FaUmbrellaBeach />
              </div>
              <h2>Best Time to Visit</h2>
              <p>
                Sri Lanka is a year-round destination with two distinct monsoon
                systems affecting opposite sides of the island.
              </p>
              <div className="time-grid">
                {bestTime.map((item, index) => (
                  <div key={index} className="time-card">
                    <h4>{item.period}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Culture & Traditions */}
            <div className="card content-section">
              <div className="card-header-icon">
                <FaMountain />
              </div>
              <h2>Culture & Traditions</h2>
              <p>
                Sri Lankan culture is deeply influenced by Buddhism, Hinduism,
                Islam, and Christianity. Ancient temples, colorful festivals,
                traditional dance forms, and daily rituals reflect the country’s
                spiritual heritage.
              </p>
              <h4>Highlights</h4>
              <ul className="icon-list">
                <li>
                  <FaCheck className="list-icon" />
                  <span>Vesak Festival (Buddhist celebrations)</span>
                </li>
                <li>
                  <FaCheck className="list-icon" />
                  <span>Kandy Esala Perahera</span>
                </li>
                <li>
                  <FaCheck className="list-icon" />
                  <span>Traditional Kandyan and Low-Country dances</span>
                </li>
                <li>
                  <FaCheck className="list-icon" />
                  <span>Village lifestyles and local customs</span>
                </li>
              </ul>
            </div>

            {/* Sri Lankan Food */}
            <div className="card content-section">
              <div className="card-header-icon">
                <FaUtensils />
              </div>
              <h2>Sri Lankan Food</h2>
              <p>
                Sri Lankan cuisine is known for its rich spices, fresh
                ingredients, and bold flavors.
              </p>
              <ul className="icon-list">
                {dishes.map((dish, index) => (
                  <li key={index}>
                    <FaCheck className="list-icon" />
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Tips */}
            <div className="card content-section">
              <div className="card-header-icon">
                <FaInfoCircle />
              </div>
              <h2>Travel Tips</h2>
              <ul className="icon-list">
                {travelTips.map((tip, index) => (
                  <li key={index}>
                    <FaCheck className="list-icon" />
                    <span>{tip}</span>
                  </li>
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
