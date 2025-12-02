"use client";
import { useState } from "react";
import WorldMap from "@/components/worldmap";
import "./styles.css";

// Sample datasets for demo
const sampleDatasets = {
  users: {
    title: "Active Users by Country",
    data: {
      usa: 4523,
      china: 3892,
      india: 2847,
      brazil: 1934,
      russia: 1567,
      japan: 1423,
      germany: 1289,
      uk: 1156,
      france: 1023,
      canada: 987,
      australia: 876,
      mexico: 734,
      southkorea: 698,
      indonesia: 654,
      italy: 587,
      spain: 534,
      turkey: 489,
      netherlands: 423,
      poland: 387,
      thailand: 356,
      argentina: 312,
      egypt: 298,
      vietnam: 276,
      nigeria: 254,
      southafrica: 232,
      pakistan: 198,
      saudiarabia: 187,
      malaysia: 176,
      colombia: 165,
      ukraine: 154
    }
  },
  revenue: {
    title: "Revenue Distribution ($K)",
    data: {
      usa: 8934,
      china: 5672,
      japan: 4523,
      germany: 3456,
      uk: 3123,
      france: 2876,
      canada: 2345,
      australia: 1987,
      brazil: 1654,
      india: 1432,
      southkorea: 1298,
      italy: 1156,
      spain: 987,
      netherlands: 876,
      russia: 765,
      mexico: 654,
      switzerland: 598,
      sweden: 534,
      singapore: 487
    }
  },
  orders: {
    title: "Orders This Month",
    data: {
      india: 12453,
      china: 9876,
      usa: 7654,
      indonesia: 5432,
      brazil: 4321,
      pakistan: 3456,
      nigeria: 2987,
      bangladesh: 2765,
      russia: 2345,
      japan: 2134,
      mexico: 1987,
      philippines: 1876,
      vietnam: 1654,
      germany: 1543,
      turkey: 1432,
      thailand: 1321,
      uk: 1234,
      france: 1123,
      italy: 987,
      egypt: 876
    }
  },
  traffic: {
    title: "Website Traffic (Sessions)",
    data: {
      usa: 234567,
      india: 187654,
      uk: 98765,
      canada: 87654,
      germany: 76543,
      australia: 65432,
      france: 54321,
      brazil: 43210,
      japan: 34567,
      netherlands: 23456,
      spain: 21345,
      italy: 19876,
      mexico: 18765,
      poland: 17654,
      sweden: 15432,
      argentina: 14321,
      russia: 13456,
      southkorea: 12345,
      turkey: 11234,
      indonesia: 10987
    }
  }
};

const colorSchemes = {
  blue: {
    empty: "#1a1a2e",
    low: { r: 45, g: 55, b: 72 },
    high: { r: 99, g: 179, b: 237 }
  },
  green: {
    empty: "#1a1a2e",
    low: { r: 39, g: 73, b: 59 },
    high: { r: 72, g: 187, b: 120 }
  },
  purple: {
    empty: "#1a1a2e",
    low: { r: 55, g: 48, b: 83 },
    high: { r: 159, g: 122, b: 234 }
  },
  orange: {
    empty: "#1a1a2e",
    low: { r: 78, g: 52, b: 36 },
    high: { r: 237, g: 137, b: 54 }
  },
  pink: {
    empty: "#1a1a2e",
    low: { r: 74, g: 44, b: 62 },
    high: { r: 237, g: 100, b: 166 }
  }
};

export default function WorldMapPage() {
  const [activeDataset, setActiveDataset] = useState("users");
  const [activeColor, setActiveColor] = useState("blue");
  const [clickedCountry, setClickedCountry] = useState(null);

  const handleCountryClick = (key, value, name) => {
    setClickedCountry({ key, value, name });
    setTimeout(() => setClickedCountry(null), 3000);
  };

  return (
    <main className="worldmap-page">
      <div className="page-header">
        <h1>World Map Analytics</h1>
        <p>Interactive geographic data visualization component</p>
      </div>

      <div className="controls-section">
        <div className="control-group">
          <label>Dataset</label>
          <div className="button-group">
            {Object.entries(sampleDatasets).map(([key, dataset]) => (
              <button
                key={key}
                className={`control-btn ${activeDataset === key ? 'active' : ''}`}
                onClick={() => setActiveDataset(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Color Scheme</label>
          <div className="color-picker">
            {Object.entries(colorSchemes).map(([key, scheme]) => (
              <button
                key={key}
                className={`color-btn ${activeColor === key ? 'active' : ''}`}
                onClick={() => setActiveColor(key)}
                style={{
                  background: `linear-gradient(135deg, rgb(${scheme.low.r}, ${scheme.low.g}, ${scheme.low.b}) 0%, rgb(${scheme.high.r}, ${scheme.high.g}, ${scheme.high.b}) 100%)`
                }}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            ))}
          </div>
        </div>
      </div>

      {clickedCountry && (
        <div className="click-notification">
          Clicked: <strong>{clickedCountry.name}</strong> — {clickedCountry.value.toLocaleString()}
        </div>
      )}

      <WorldMap
        data={sampleDatasets[activeDataset].data}
        title={sampleDatasets[activeDataset].title}
        colorScale={colorSchemes[activeColor]}
        onCountryClick={handleCountryClick}
      />

      <div className="usage-section">
        <h2>Usage</h2>
        <pre className="code-block">
{`import WorldMap from "@/components/worldmap";

// Your data object with country names/codes as keys
const data = {
  india: 6,
  china: 7,
  canada: 3,
  usa: 15,
  brazil: 4,
  // ... more countries
};

// Optional custom color scale
const colorScale = {
  empty: "#1a1a2e",
  low: { r: 45, g: 55, b: 72 },
  high: { r: 99, g: 179, b: 237 }
};

<WorldMap
  data={data}
  title="My Analytics"
  colorScale={colorScale}
  showLegend={true}
  showValues={true}
  onCountryClick={(key, value, name) => {
    console.log(\`Clicked \${name}: \${value}\`);
  }}
/>`}
        </pre>

        <h3>Supported Countries</h3>
        <div className="country-grid">
          {[
            "USA", "Canada", "Brazil", "Argentina", "Chile", "Colombia", "Peru", "Venezuela", "Mexico", "Cuba",
            "UK", "Germany", "France", "Italy", "Spain", "Portugal", "Netherlands", "Belgium", "Switzerland", "Austria",
            "Poland", "Czech Republic", "Hungary", "Romania", "Ukraine", "Greece", "Turkey",
            "Sweden", "Norway", "Finland", "Denmark",
            "Russia", "China", "India", "Japan", "South Korea", "Indonesia", "Thailand", "Vietnam", "Philippines", "Malaysia", "Singapore", "Bangladesh", "Pakistan",
            "Australia", "New Zealand",
            "Egypt", "Nigeria", "South Africa", "Kenya", "Morocco", "Algeria",
            "Saudi Arabia", "Iran"
          ].map(country => (
            <span key={country} className="country-tag">{country}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
