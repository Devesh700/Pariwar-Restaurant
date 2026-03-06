import { useState } from "react";
import type { MenuItem as MenuItemType } from "../types";
import { MENU } from "../data";
import { Stars } from "../components/Stars";

interface MenuPageProps {
  addToCart: (item: MenuItemType) => void;
}

export const MenuPage = ({ addToCart }: MenuPageProps) => {
  const [active, setActive] = useState("Breakfast");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const cats = Object.keys(MENU);
  const items = MENU[active].filter(
    i =>
      (filter === "All" || i.tag === filter) &&
      i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ paddingTop: 80 }}>
      <div
        className="container"
        style={{
          background: "linear-gradient(135deg, #2a1a0e, #5a2e10)",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 11,
            letterSpacing: 4,
            color: "#f4a535",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Explore Our
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontStyle: "italic" }}>
          The Menu
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.5)", marginTop: 12 }}>
          Crafted with love, served with heart
        </p>
      </div>

      {/* Filters */}
      <div
        style={{
          background: "#faf7f2",
          padding: "30px 5%",
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          position: "sticky",
          top: 70,
          zIndex: 100,
          boxShadow: "0 4px 20px rgba(42,26,14,0.06)",
        }}
      >
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            style={{
              padding: "10px 24px",
              border: `2px solid ${active === c ? "#c8912a" : "#e0d5c5"}`,
              background: active === c ? "linear-gradient(135deg, #c8912a, #f4a535)" : "white",
              color: active === c ? "white" : "#5a4030",
              borderRadius: 4,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {c}
          </button>
        ))}
        <div style={{ width: 1, height: 30, background: "#e0d5c5" }} />
        {["All", "Veg", "Non-Veg"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "8px 16px",
              border: `1.5px solid ${filter === f ? "#3a6b35" : "#e0d5c5"}`,
              background: filter === f ? "#e8f5e8" : "white",
              color: filter === f ? "#3a6b35" : "#8a6a50",
              borderRadius: 20,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: 11,
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search dishes..."
          style={{ width: 200, padding: "8px 16px", border: "1.5px solid #e0d5c5", borderRadius: 20, fontSize: 13 }}
        />
      </div>

      {/* Menu Items */}
      <div className="container" style={{ padding: "50px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {items.map(item => (
            <div
              key={item.id}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(42,26,14,0.08)",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 110,
                  background: `linear-gradient(135deg, #f5ede0, #e8d5b8)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 50,
                  flexShrink: 0,
                }}
              >
                {item.img}
              </div>
              <div style={{ padding: 18, flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700 }}>{item.name}</h3>
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 10,
                      background: item.tag === "Veg" ? "#e8f5e8" : "#fde8e8",
                      color: item.tag === "Veg" ? "#3a6b35" : "#9b3a1a",
                      padding: "2px 7px",
                      borderRadius: 8,
                      fontWeight: 700,
                      height: "fit-content",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 12,
                    color: "#8a6a50",
                    marginBottom: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "#c8912a" }}>₹{item.price}</span>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 11,
                        color: "#b0906a",
                        marginLeft: 8,
                      }}
                    >
                      ⏱{item.time}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 4 }}>
                    <Stars n={item.rating} />
                  </div>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="btn-gold"
                  style={{ width: "100%", marginTop: 10, padding: "8px 0", fontSize: 11 }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {items.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 60,
              color: "#8a6a50",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            No dishes found. Try a different filter.
          </div>
        )}
      </div>
    </div>
  );
};
