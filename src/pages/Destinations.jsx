import "./Destinations.css";

function Destinations() {
  const destinations = [
    {
      id: "colombo",
      name: "Colombo",
      description:
        "Colombo, Sri Lanka's vibrant commercial capital, is a fascinating blend of colonial charm and modern ambition.",
      attractions: [
        "Gangaramaya Temple & Seema Malaka",
        "Colombo Lotus Tower - 350m observation deck",
        "National Museum of Colombo",
        "Galle Face Green",
        "Pettah Market & Red Mosque",
        "Independence Square",
        "Viharamahadevi Park",
      ],
      bestTime: "January – March (Dry, sunny, comfortable for sightseeing)",
    },
    {
      id: "sigiriya",
      name: "Sigiriya / Dambulla",
      description:
        "Sigiriya's iconic Lion Rock is a must-visit with breathtaking views, fascinating history, and nearby attractions.",
      attractions: [
        "Sigiriya Rock Fortress (UNESCO)",
        "Pidurangala Rock viewpoint",
        "Dambulla Cave Temple (Golden Temple)",
        "Minneriya National Park Safari",
        "Hiriwadunna Village Tour",
        "Ritigala Forest Monastery",
        "Hot Air Ballooning",
        "Mapagala Rock",
      ],
      bestTime: "December – April (Pleasant weather, clear views)",
    },
    {
      id: "kandy",
      name: "Kandy",
      description:
        "Kandy, the spiritual heart of Sri Lanka, offers a perfect blend of religious heritage, colonial charm, and mountain adventure.",
      attractions: [
        "Temple of the Sacred Tooth Relic (UNESCO)",
        "National Museum of Kandy",
        "Kandy Lake",
        "Bahirawakanda Temple (Giant Buddha)",
        "Royal Botanical Gardens, Peradeniya",
        "Udawatta Kele Sanctuary",
        "Ambuluwawa Tower",
        "Knuckles Mountain Range",
        "Esala Perahera Festival (July/August)",
      ],
      bestTime: "December – April (Dry and pleasant)",
    },
    {
      id: "nuwara-eliya",
      name: "Nuwara Eliya",
      description:
        'Known as "Little England," Nuwara Eliya is a misty highland retreat with tea estates and cascading waterfalls.',
      attractions: [
        "Horton Plains & World's End",
        "Waterfall Trail (Bomburu Ella, Devon, St. Clair's, Laxapana)",
        'Ambewela Farm ("Little New Zealand")',
        "Gregory Lake & Victoria Park",
        "Piduruthalagala & Kirigalpotta mountains",
        "Moon Plains viewpoint",
        "Mackwoods Tea Center",
        "Seetha Amman Kovil",
      ],
      bestTime: "February – April (Sunny days, flower season)",
    },
    {
      id: "ella",
      name: "Ella",
      description:
        "Ella is a laid-back mountain village perfect for adventure seekers and hikers looking for spectacular views.",
      attractions: [
        "Little Adam's Peak",
        "Nine Arch Bridge",
        "Ella Rock trek",
        "Ravana Falls",
        "Flying Ravana Zipline & ATV Rides",
        "Halpe Tea Factory",
      ],
      bestTime: "January – March (Clear skies for hiking)",
    },
    {
      id: "udawalawe",
      name: "Udawalawe & Yala",
      description:
        'Premier wildlife destinations for seeing Sri Lanka\'s "Big Three": Elephants, Leopards, and Sloth Bears.',
      attractions: [
        "Udawalawe National Park (elephant herds)",
        "Elephant Transit Home",
        "Yala National Park (leopard capital)",
      ],
      bestTime: "Year-round for Udawalawe; June-September for Yala",
    },
    {
      id: "arugam-bay",
      name: "Arugam Bay",
      description:
        "The East Coast's surfing mecca with world-class waves and untouched nature.",
      attractions: [
        "Surfing at Whisky Point & Peanut Farm",
        "Kudumbigala Monastery",
        "Kumana National Park (bird paradise)",
        "Lahugala National Park",
        "Muhudu Maha Vihara temple",
        "Pottuvil Lagoon safaris",
      ],
      bestTime: "May – September (Dry season, peak surfing)",
    },
    {
      id: "hambantota",
      name: "Hambantota",
      description:
        "A rising tourism hub offering unique safari experiences and modern attractions.",
      attractions: [
        "Ridiyagama Safari Park",
        "Mirijjawila Botanical Garden",
        "Mahapelessa Hot Springs",
        "Birds Park",
        "Walawe River Safari",
      ],
      bestTime: "December – April",
    },
    {
      id: "galle",
      name: "Galle",
      description:
        "Historic fortified city with colonial charm and beautiful beaches.",
      attractions: [
        "Galle Fort & Old Town (UNESCO)",
        "Unawatuna Beach",
        "Jungle Beach",
        "Thalpe rock pools",
        "Hiriketiya Beach",
        "Sinharaja Forest Reserve (UNESCO)",
        "Koggala Lake boat rides",
      ],
      bestTime: "December – April (Calm waters, clear skies)",
    },
    {
      id: "hikkaduwa",
      name: "Hikkaduwa",
      description:
        "Vibrant beach town famous for coral reefs and water sports.",
      attractions: [
        "Coral Reef snorkeling",
        "Glass Bottom Boat Rides",
        "Surfing & scuba diving",
        "Tsunami Museum",
        "Madu River Safari",
      ],
      bestTime: "December – April",
    },
  ];

  return (
    <div className="destinations">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Destinations in Sri Lanka</h1>
          <p>
            From lively cities to serene beaches and ancient ruins, Sri Lanka
            offers unforgettable destinations for every type of traveler.
            Explore carefully selected locations that showcase the country's
            cultural depth, natural beauty, and authentic experiences.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="section">
        <div className="container">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              id={destination.id}
              className={`destination-detail ${index % 2 === 0 ? "bg-white" : "bg-light"}`}
            >
              <h2>{destination.name}</h2>
              <p className="destination-description">
                {destination.description}
              </p>

              <div className="destination-content">
                <div>
                  <h3>Top Attractions & Things to Do</h3>
                  <ul className="attractions-list">
                    {destination.attractions.map((attraction, idx) => (
                      <li key={idx}>{attraction}</li>
                    ))}
                  </ul>
                </div>

                <div className="best-time-box card">
                  <h4>Best Time to Visit</h4>
                  <p>{destination.bestTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Destinations;
