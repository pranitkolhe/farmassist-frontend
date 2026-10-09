import { useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  Sprout,
  CloudSun,
  CalendarDays,
  ScanSearch,
  FlaskConical,
  TrendingUp,
  Landmark,
  ShoppingCart,
  Users,
  UserRound,
  Bell,
  ChevronRight,
  Search,
  Wind,
  Droplets,
  Thermometer,
  Sun,
  CloudRain,
  Cloud,
  MapPin,
  ArrowUpRight,
  ArrowDownRight,
  Leaf,
  Menu,
  X,
  Wheat,
  Gauge,
  Clock,
} from "lucide-react";
import "./App.css";

const features = [
  {
    title: "Crop Calendar",
    description: "Sowing & harvest timeline",
    icon: CalendarDays,
    color: "green",
    path: "/crop-calendar",
  },
  {
    title: "Fertilizer Guide",
    description: "Right nutrients, right time",
    icon: FlaskConical,
    color: "blue",
    path: "/fertilizer-guide",
  },
  {
    title: "Disease Detection",
    description: "AI scan & diagnose",
    icon: ScanSearch,
    color: "pink",
    path: "/disease-detection",
  },
  {
    title: "Weather",
    description: "Forecast & farm alerts",
    icon: CloudSun,
    color: "orange",
    path: "/weather",
  },
  {
    title: "Yield Prediction",
    description: "Monitor crop growth",
    icon: TrendingUp,
    color: "purple",
    path: "/yield-prediction",
  },
  {
    title: "Market Prices",
    description: "Live mandi rates",
    icon: Wheat,
    color: "yellow",
    path: "/mandi-prices",
  },
  {
    title: "Gov. Schemes",
    description: "Subsidies & loans",
    icon: Landmark,
    color: "purple",
    path: "/government-schemes",
  },
  {
    title: "Buy & Sell",
    description: "Farmer marketplace",
    icon: ShoppingCart,
    color: "teal",
    path: "/marketplace",
  },
  {
    title: "Community",
    description: "Ask experts & farmers",
    icon: Users,
    color: "pink",
    path: "/community",
  },
];

const alerts = [
  {
    icon: CloudRain,
    color: "blue",
    title: "Heavy rain expected tomorrow",
    description: "Check irrigation",
    time: "2 hours ago",
  },
  {
    icon: Landmark,
    color: "pink",
    title: "New PM-KISAN installment",
    description: "Check your eligibility",
    time: "1 day ago",
  },
  {
    icon: TrendingUp,
    color: "yellow",
    title: "Wheat prices are rising",
    description: "Nearby market update",
    time: "2 days ago",
  },
];

const forecast = [
  { day: "Today", date: "09 Oct", icon: Sun, high: 31, low: 22, rain: "10%" },
  {
    day: "Sat",
    date: "10 Oct",
    icon: CloudSun,
    high: 30,
    low: 22,
    rain: "20%",
  },
  {
    day: "Sun",
    date: "11 Oct",
    icon: CloudRain,
    high: 28,
    low: 21,
    rain: "70%",
  },
  {
    day: "Mon",
    date: "12 Oct",
    icon: CloudRain,
    high: 27,
    low: 21,
    rain: "60%",
  },
  {
    day: "Tue",
    date: "13 Oct",
    icon: CloudSun,
    high: 29,
    low: 22,
    rain: "20%",
  },
  { day: "Wed", date: "14 Oct", icon: Sun, high: 31, low: 22, rain: "5%" },
  { day: "Thu", date: "15 Oct", icon: Sun, high: 32, low: 23, rain: "5%" },
];

// Illustrative sample prices, not actual current market rates.
const marketData = [
  {
    crop: "Wheat",
    variety: "Lokwan",
    market: "Pune",
    min: 2400,
    max: 2850,
    modal: 2650,
    change: 2.5,
  },
  {
    crop: "Onion",
    variety: "Red",
    market: "Lasalgaon",
    min: 1800,
    max: 3200,
    modal: 2600,
    change: 5.2,
  },
  {
    crop: "Soybean",
    variety: "Yellow",
    market: "Latur",
    min: 4100,
    max: 4650,
    modal: 4400,
    change: -1.4,
  },
  {
    crop: "Cotton",
    variety: "Medium Staple",
    market: "Akola",
    min: 6800,
    max: 7350,
    modal: 7100,
    change: 1.8,
  },
  {
    crop: "Tomato",
    variety: "Local",
    market: "Pune",
    min: 1200,
    max: 2500,
    modal: 1900,
    change: -3.1,
  },
  {
    crop: "Maize",
    variety: "Yellow",
    market: "Nashik",
    min: 1900,
    max: 2300,
    modal: 2100,
    change: 0.8,
  },
  {
    crop: "Gram",
    variety: "Desi",
    market: "Ahmednagar",
    min: 5200,
    max: 5800,
    modal: 5500,
    change: 1.2,
  },
  {
    crop: "Green Chilli",
    variety: "Local",
    market: "Pune",
    min: 3000,
    max: 4500,
    modal: 3700,
    change: -0.6,
  },
];

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/weather": "Weather Forecast",
    "/mandi-prices": "Mandi Prices",
    "/crop-calendar": "Crop Calendar",
    "/fertilizer-guide": "Fertilizer Guide",
    "/disease-detection": "Disease Detection",
    "/yield-prediction": "Yield Prediction",
    "/government-schemes": "Government Schemes",
    "/marketplace": "Marketplace",
    "/community": "Community",
  };

  return (
    <header className="topbar">
      <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-icon">
          <Sprout size={22} />
        </span>
        <span>
          Farm<span className="brand-light">Assist</span>
        </span>
      </Link>

      <div className="topbar-right">
        <span className="today-label">Friday, 9 October 2026</span>
        <span className="language">English⌄</span>
        <button
          className="avatar"
          aria-label="Toggle profile menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          F
        </button>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-dropdown">
          <p className="mobile-page-title">
            {titles[location.pathname] || "FarmAssist"}
          </p>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/weather" onClick={() => setMenuOpen(false)}>
            Weather Forecast
          </Link>
          <Link to="/mandi-prices" onClick={() => setMenuOpen(false)}>
            Mandi Prices
          </Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "bottom-item active" : "bottom-item"
        }
      >
        <Sprout size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/crop-calendar"
        className={({ isActive }) =>
          isActive ? "bottom-item active" : "bottom-item"
        }
      >
        <CalendarDays size={20} />
        <span>Crop Calendar</span>
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }) =>
          isActive ? "bottom-item active" : "bottom-item"
        }
      >
        <Users size={20} />
        <span>Community</span>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "bottom-item active" : "bottom-item"
        }
      >
        <UserRound size={20} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <Link to={feature.path} className="feature-card">
      <div className={`feature-icon ${feature.color}`}>
        <Icon size={21} />
      </div>
      <div className="feature-copy">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
      <ChevronRight className="feature-arrow" size={17} />
    </Link>
  );
}

function Dashboard() {
  return (
    <>
      <section className="welcome-banner">
        <div className="welcome-inner">
          <div className="welcome-copy">
            <div className="eyebrow">
              <Sun size={14} /> GOOD MORNING
            </div>
            <h1>
              Welcome back,
              <br />
              <em>Farmer!</em>
            </h1>
            <p>
              Your crops are growing well. Stay on top of your farm activities.
            </p>
          </div>

          <div className="welcome-stats">
            <div className="welcome-stat">
              <Sprout size={23} />
              <div>
                <strong>1</strong>
                <span>ACTIVE CROPS</span>
              </div>
            </div>
            <div className="welcome-stat">
              <Thermometer size={23} />
              <div>
                <strong>28°C</strong>
                <span>LOCAL TEMP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="page-shell">
        <div className="dashboard-layout">
          <section className="main-column">
            <div className="quick-links">
              <Link to="/crop-calendar">
                <CalendarDays size={15} /> Crop Calendar
              </Link>
              <Link to="/disease-detection">
                <ScanSearch size={15} /> Disease Detection
              </Link>
              <Link to="/fertilizer-guide">
                <FlaskConical size={15} /> Fertilizer Guide
              </Link>
              <Link to="/mandi-prices">
                <TrendingUp size={15} /> Market Prices
              </Link>
            </div>

            <div className="section-heading">
              <h2>ALL FEATURES</h2>
              <span>Explore FarmAssist</span>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>

            <section className="tip-card">
              <div className="tip-icon">
                <Leaf size={22} />
              </div>
              <div>
                <h3>Today's farming tip</h3>
                <p>
                  Check soil moisture before irrigating your crops. Avoid
                  unnecessary watering, especially when rain is expected.
                </p>
              </div>
            </section>
          </section>

          <aside className="sidebar">
            <Link to="/weather" className="weather-widget">
              <div className="weather-widget-top">
                <span>
                  <MapPin size={12} /> YOUR LOCATION
                </span>
                <CloudSun size={37} />
              </div>
              <h2>28°C</h2>
              <p>Partly cloudy</p>
              <div className="weather-widget-details">
                <span>
                  Humidity<strong>65%</strong>
                </span>
                <span>
                  Wind<strong>12 km/h</strong>
                </span>
                <span>
                  Rain<strong>10%</strong>
                </span>
              </div>
              <div className="widget-link">
                View forecast <ArrowUpRight size={14} />
              </div>
            </Link>

            <section className="panel alerts-panel">
              <div className="panel-heading">
                <h3>Recent Alerts</h3>
                <span className="new-badge">3 new</span>
              </div>
              {alerts.map((alert) => {
                const Icon = alert.icon;
                return (
                  <div className="alert-row" key={alert.title}>
                    <span className={`small-icon ${alert.color}`}>
                      <Icon size={17} />
                    </span>
                    <div>
                      <strong>{alert.title}</strong>
                      <p>{alert.description}</p>
                      <small>{alert.time}</small>
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="panel farm-summary">
              <h3>Farm Summary</h3>
              <div className="summary-row">
                <span>Active crops</span>
                <strong>1</strong>
              </div>
              <div className="summary-row">
                <span>Today's temp</span>
                <strong>28°C</strong>
              </div>
              <div className="summary-row">
                <span>Farm status</span>
                <strong className="text-green">Good</strong>
              </div>
              <Link to="/crop-calendar" className="primary-button">
                <Sprout size={16} /> View My Crops
              </Link>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

function PageHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="page-heading">
      <div className="page-heading-icon">
        <Icon size={26} />
      </div>
      <div>
        <span className="page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function WeatherPage() {
  const [city, setCity] = useState("Pune");
  const [unit, setUnit] = useState("C");

  const currentTemp = unit === "C" ? "28°C" : "82°F";

  return (
    <main className="content-page">
      <PageHeading
        eyebrow="WEATHER & CLIMATE"
        title="Weather Forecast"
        description="Plan your farm activities with your local weather information."
        icon={CloudSun}
      />

      <div className="weather-toolbar">
        <label className="city-select">
          <MapPin size={17} />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-label="Select city"
          >
            <option value="Pune">Pune, Maharashtra</option>
            <option value="Nashik">Nashik, Maharashtra</option>
            <option value="Nagpur">Nagpur, Maharashtra</option>
            <option value="Ahmednagar">Ahilyanagar, Maharashtra</option>
          </select>
        </label>
        <div className="unit-toggle">
          <button
            className={unit === "C" ? "selected" : ""}
            onClick={() => setUnit("C")}
          >
            °C
          </button>
          <button
            className={unit === "F" ? "selected" : ""}
            onClick={() => setUnit("F")}
          >
            °F
          </button>
        </div>
      </div>

      <section className="current-weather">
        <div className="current-weather-main">
          <span className="weather-location">
            <MapPin size={14} /> {city}, Maharashtra
          </span>
          <p className="weather-date">Friday, 9 October</p>
          <div className="big-temperature">{currentTemp}</div>
          <h2>Partly cloudy</h2>
          <p className="feels-like">
            Feels like {unit === "C" ? "30°C" : "86°F"}
          </p>
          <p className="weather-caption">
            A good day to check your crops and plan irrigation.
          </p>
        </div>
        <div className="current-weather-art">
          <CloudSun size={105} strokeWidth={1.2} />
        </div>
      </section>

      <div className="weather-metrics">
        <MetricCard
          icon={Droplets}
          label="Humidity"
          value="65%"
          note="Moderate moisture"
        />
        <MetricCard
          icon={Wind}
          label="Wind Speed"
          value="12 km/h"
          note="Light breeze"
        />
        <MetricCard
          icon={CloudRain}
          label="Rain Chance"
          value="10%"
          note="Low probability"
        />
        <MetricCard
          icon={Gauge}
          label="Pressure"
          value="1012 hPa"
          note="Normal pressure"
        />
      </div>

      <section className="panel forecast-panel">
        <div className="section-title-row">
          <div>
            <h2>7-Day Forecast</h2>
            <p>Daily forecast overview</p>
          </div>
          <span className="static-label">SAMPLE DATA</span>
        </div>
        <div className="forecast-grid">
          {forecast.map((day) => {
            const Icon = day.icon;
            const high =
              unit === "C"
                ? `${day.high}°`
                : `${Math.round((day.high * 9) / 5 + 32)}°`;
            const low =
              unit === "C"
                ? `${day.low}°`
                : `${Math.round((day.low * 9) / 5 + 32)}°`;

            return (
              <div className="forecast-day" key={day.day}>
                <strong>{day.day}</strong>
                <span className="forecast-date">{day.date}</span>
                <Icon size={31} className="forecast-weather-icon" />
                <div className="forecast-temperatures">
                  <strong>{high}</strong>
                  <span>{low}</span>
                </div>
                <div className="forecast-rain">
                  <Droplets size={13} /> {day.rain}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="panel weather-advisory">
        <div className="advisory-icon">
          <CloudRain size={24} />
        </div>
        <div>
          <span className="page-eyebrow">FARM ADVISORY</span>
          <h3>Prepare for possible rainfall</h3>
          <p>
            This sample advisory recommends checking field drainage and
            reviewing your irrigation schedule before watering.
          </p>
        </div>
      </section>
    </main>
  );
}

function MetricCard({ icon: Icon, label, value, note }) {
  return (
    <div className="metric-card">
      <div className="metric-top">
        <span>{label}</span>
        <Icon size={19} />
      </div>
      <strong>{value}</strong>
      <p>{note}</p>
    </div>
  );
}

function MandiPricesPage() {
  const [search, setSearch] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("All Markets");
  const [sortBy, setSortBy] = useState("crop");

  const filteredData = useMemo(() => {
    return marketData
      .filter((item) => {
        const query = search.toLowerCase();
        const matchesSearch =
          item.crop.toLowerCase().includes(query) ||
          item.market.toLowerCase().includes(query) ||
          item.variety.toLowerCase().includes(query);

        const matchesMarket =
          selectedMarket === "All Markets" || item.market === selectedMarket;

        return matchesSearch && matchesMarket;
      })
      .sort((a, b) => {
        if (sortBy === "price-high") return b.modal - a.modal;
        if (sortBy === "price-low") return a.modal - b.modal;
        return a.crop.localeCompare(b.crop);
      });
  }, [search, selectedMarket, sortBy]);

  return (
    <main className="content-page">
      <PageHeading
        eyebrow="AGRICULTURAL MARKET"
        title="Mandi Prices"
        description="Explore sample crop prices and compare markets before selling your produce."
        icon={TrendingUp}
      />

      <div className="market-info-banner">
        <div className="market-info-icon">
          <Landmark size={24} />
        </div>
        <div>
          <strong>Explore agricultural markets</strong>
          <p>
            Compare the minimum, maximum, and modal prices for different crops.
          </p>
        </div>
        <span className="static-label">DEMO DATA</span>
      </div>

      <div className="market-stat-grid">
        <div className="market-stat-card">
          <span>
            <Wheat size={18} /> Crops Listed
          </span>
          <strong>{marketData.length}</strong>
          <small>Sample crop varieties</small>
        </div>
        <div className="market-stat-card">
          <span>
            <Landmark size={18} /> Markets
          </span>
          <strong>{new Set(marketData.map((item) => item.market)).size}</strong>
          <small>Markets in Maharashtra</small>
        </div>
        <div className="market-stat-card">
          <span>
            <TrendingUp size={18} /> Highest Modal Price
          </span>
          <strong>
            ₹{money(Math.max(...marketData.map((item) => item.modal)))}
          </strong>
          <small>Among listed sample crops</small>
        </div>
      </div>

      <section className="panel market-table-panel">
        <div className="section-title-row market-table-heading">
          <div>
            <h2>Crop Price Comparison</h2>
            <p>Sample prices in Indian rupees per quintal (₹/quintal)</p>
          </div>
          <span className="static-label">ILLUSTRATIVE</span>
        </div>

        <div className="market-filters">
          <label className="search-field">
            <Search size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search crop or market..."
            />
          </label>

          <select
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
            aria-label="Filter by market"
          >
            <option>All Markets</option>
            {[...new Set(marketData.map((item) => item.market))]
              .sort()
              .map((market) => (
                <option key={market}>{market}</option>
              ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort prices"
          >
            <option value="crop">Sort by crop</option>
            <option value="price-high">Highest modal price</option>
            <option value="price-low">Lowest modal price</option>
          </select>
        </div>

        <div className="table-scroll">
          <table className="market-table">
            <thead>
              <tr>
                <th>Crop / Variety</th>
                <th>Mandi</th>
                <th>Min Price</th>
                <th>Max Price</th>
                <th>Modal Price</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={`${item.crop}-${item.market}`}>
                  <td>
                    <div className="crop-name">
                      <span className="crop-table-icon">
                        <Sprout size={17} />
                      </span>
                      <div>
                        <strong>{item.crop}</strong>
                        <small>{item.variety}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="market-location">
                      <MapPin size={13} />
                      {item.market}
                    </span>
                  </td>
                  <td>₹{money(item.min)}</td>
                  <td>₹{money(item.max)}</td>
                  <td>
                    <strong className="modal-price">
                      ₹{money(item.modal)}
                    </strong>
                  </td>
                  <td>
                    <span
                      className={
                        item.change >= 0
                          ? "price-change up"
                          : "price-change down"
                      }
                    >
                      {item.change >= 0 ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      {Math.abs(item.change).toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="empty-state">
              <Search size={28} />
              <h3>No matching crops found</h3>
              <p>Try a different crop name or market.</p>
            </div>
          )}
        </div>

        <div className="table-footer">
          <span>
            Showing {filteredData.length} of {marketData.length} sample crops
          </span>
          <span>Prices are illustrative, not live market data.</span>
        </div>
      </section>

      <section className="selling-tip">
        <div className="tip-icon">
          <Leaf size={23} />
        </div>
        <div>
          <h3>Before selling your crop</h3>
          <p>
            Compare prices across nearby markets, account for transportation
            costs, and check the crop quality requirements before deciding where
            to sell.
          </p>
        </div>
      </section>
    </main>
  );
}

function PlaceholderPage({ title }) {
  return (
    <main className="content-page">
      <PageHeading
        eyebrow="FARMASSIST FEATURES"
        title={title}
        description={`Explore ${title.toLowerCase()} tools for your farm.`}
        icon={Sprout}
      />
      <section className="panel placeholder-panel">
        <div className="placeholder-icon">
          <Sprout size={32} />
        </div>
        <h2>{title}</h2>
        <p>
          This page is part of the FarmAssist interface. Its functionality can
          be added in a later development stage.
        </p>
        <Link className="primary-button placeholder-button" to="/">
          Back to Dashboard
        </Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/mandi-prices" element={<MandiPricesPage />} />

        <Route
          path="/crop-calendar"
          element={<PlaceholderPage title="Crop Calendar" />}
        />
        <Route
          path="/fertilizer-guide"
          element={<PlaceholderPage title="Fertilizer Guide" />}
        />
        <Route
          path="/disease-detection"
          element={<PlaceholderPage title="Disease Detection" />}
        />
        <Route
          path="/yield-prediction"
          element={<PlaceholderPage title="Yield Prediction" />}
        />
        <Route
          path="/government-schemes"
          element={<PlaceholderPage title="Government Schemes" />}
        />
        <Route
          path="/marketplace"
          element={<PlaceholderPage title="Marketplace" />}
        />
        <Route
          path="/community"
          element={<PlaceholderPage title="Community" />}
        />
        <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>

      <BottomNav />
    </div>
  );
}

export default App;
