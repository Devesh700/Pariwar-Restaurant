import { useState, useEffect } from "react";
import type { MenuItem as MenuItemType } from "../types";
import { MENU, REVIEWS, FEATURES } from "../data";
import { Stars } from "../components/Stars";

interface HomePageProps {
  addToCart: (item: MenuItemType) => void;
}

export const HomePage = ({ addToCart }: HomePageProps) => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveFeature(a => (a + 1) % FEATURES.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* HERO */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #1a0d06 0%, #3d1f0a 40%, #5a2e10 70%, #8b4513 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,145,42,0.15), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,145,42,0.1), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(rgba(200,145,42,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: "white",
            padding: "120px 5% 80px",
            animation: "fadeInUp 0.8s ease",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 11,
              letterSpacing: 5,
              color: "#f4a535",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Welcome to Pariwar Restaurant
          </div>
          <h1
            style={{
              fontSize: "clamp(3rem, 10vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 24,
              fontStyle: "italic",
            }}
          >
            Where Every
            <br />
            <span style={{ color: "#f4a535" }}>Meal Feels</span>
            <br />
            Like Home
          </h1>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 540,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            Authentic flavors, warm ambiance, and heartfelt hospitality — crafted for families,
            romantics, and every soul in between.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/booking"
              className="btn-gold"
              style={{ padding: "16px 36px", fontSize: 13, textDecoration: "none", display: "inline-block" }}
            >
              Reserve a Table
            </a>
            <a
              href="/menu"
              className="btn-outline"
              style={{
                padding: "14px 36px",
                fontSize: 13,
                borderColor: "rgba(255,255,255,0.4)",
                color: "white",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Explore Menu
            </a>
          </div>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 60, flexWrap: "wrap" }}>
            {[
              ["500+", "Happy Guests Daily"],
              ["25+", "Signature Dishes"],
              ["15", "Years of Heritage"],
              ["4.9★", "Average Rating"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#f4a535" }}>{n}</div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: 1,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            animation: "pulse 2s infinite",
            color: "rgba(255,255,255,0.4)",
            fontSize: 22,
          }}
        >
          ↓
        </div>
      </div>

      {/* FEATURES STRIP */}
      <div
        className="container"
        style={{
          background: "linear-gradient(135deg, #c8912a, #f4a535)",
          padding: "20px 0",
          display: "flex",
          gap: 16,
          overflowX: "auto",
        }}
      >
        {["🆓 Free Wi-Fi", "🅿️ Free Parking", "♿ Wheelchair Access", "🍷 Full Bar", "🎵 Live Music Weekends", "🌿 Veg & Non-Veg", "🚗 Drive-through", "🚴 Delivery"].map(f => (
          <div
            key={f}
            style={{
              whiteSpace: "nowrap",
              fontFamily: "'Lato', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
              padding: "6px 16px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: 20,
            }}
          >
            {f}
          </div>
        ))}
      </div>

      {/* FEATURES SHOWCASE */}
      <div className="container" style={{ padding: "90px 0", background: "#faf7f2" }}>
        <div
          className="two-col"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 11,
                letterSpacing: 4,
                color: "#c8912a",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Why Choose Pariwar
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
              An Experience Beyond Just Dining
            </h2>
            <div className="divider" style={{ margin: "0 0 30px" }} />
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#8a6a50",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              From our fireside tables to our starlit rooftop, every corner of Pariwar is crafted to create
              memories that last beyond the meal.
            </p>
            <div className="two-col" style={{ gap: 12 }}>
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  style={{
                    padding: 20,
                    borderRadius: 8,
                    background: activeFeature === i ? "linear-gradient(135deg, #c8912a15, #f4a53520)" : "white",
                    border: `2px solid ${activeFeature === i ? "#c8912a" : "#f0e8dc"}`,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: 12,
                      color: "#8a6a50",
                      lineHeight: 1.5,
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #2a1a0e, #5a2e10)",
                borderRadius: 16,
                padding: 50,
                textAlign: "center",
                color: "white",
                boxShadow: "0 30px 80px rgba(42,26,14,0.3)",
              }}
            >
              <div style={{ fontSize: 72, marginBottom: 20 }}>{FEATURES[activeFeature].icon}</div>
              <h3 style={{ fontSize: 24, marginBottom: 12, fontStyle: "italic" }}>
                {FEATURES[activeFeature].title}
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                {FEATURES[activeFeature].desc}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                background: "linear-gradient(135deg, #c8912a, #f4a535)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                boxShadow: "0 10px 30px rgba(200,145,42,0.4)",
              }}
            >
              ✨
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR DISHES */}
      <div className="container" style={{ padding: "90px 0", background: "#f5ede0" }}>
        <p className="section-sub">Taste the Best</p>
        <h2 className="section-title">Most Loved Dishes</h2>
        <div className="divider" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {Object.values(MENU)
            .flat()
            .slice(0, 6)
            .map(item => (
              <div
                key={item.id}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(42,26,14,0.08)",
                }}
              >
                <div
                  style={{
                    height: 140,
                    background: `linear-gradient(135deg, #f5ede0, #e8d5b8)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 64,
                  }}
                >
                  {item.img}
                </div>
                <div style={{ padding: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 6,
                    }}
                  >
                    <h3 style={{ fontSize: 16, fontWeight: 700 }}>{item.name}</h3>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 11,
                        background: item.tag === "Veg" ? "#e8f5e8" : "#fde8e8",
                        color: item.tag === "Veg" ? "#3a6b35" : "#9b3a1a",
                        padding: "2px 8px",
                        borderRadius: 10,
                        fontWeight: 700,
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
                      marginBottom: 12,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: 18, fontWeight: 700, color: "#c8912a" }}>₹{item.price}</span>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, color: "#8a6a50", marginLeft: 8 }}>
                        ⏱ {item.time}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="btn-gold"
                      style={{ padding: "8px 16px", fontSize: 11 }}
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="/menu" className="btn-outline">
            View Full Menu →
          </a>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="container" style={{ padding: "90px 0", background: "#faf7f2" }}>
        <p className="section-sub">What Guests Say</p>
        <h2 className="section-title">Stories of Warmth</h2>
        <div className="divider" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 12,
                padding: 28,
                boxShadow: "0 4px 20px rgba(42,26,14,0.06)",
                position: "relative",
              }}
            >
              <div style={{ fontSize: 40, color: "#f4a535", fontFamily: "Georgia", lineHeight: 1, marginBottom: 12 }}>
                "
              </div>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 14,
                  color: "#5a4030",
                  lineHeight: 1.75,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                {r.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #c8912a, #f4a535)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
                  <div style={{ display: "flex", gap: 2 }}>
                    <Stars n={r.rating} />
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 11,
                    color: "#b0906a",
                  }}
                >
                  {r.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BANNER */}
      <div
        style={{
          background: "linear-gradient(135deg, #2a1a0e, #5a2e10)",
          padding: "80px 5%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(200,145,42,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            pointerEvents: "none",
          }}
        />
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "white", marginBottom: 16, position: "relative" }}>
          Ready for an Unforgettable Evening?
        </h2>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "rgba(255,255,255,0.6)",
            fontSize: 16,
            marginBottom: 36,
          }}
        >
          Reserve your table now or order a feast delivered to your door.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
          <a
            href="/booking"
            className="btn-gold"
            style={{ padding: "16px 40px", fontSize: 13, textDecoration: "none", display: "inline-block" }}
          >
            Book a Table
          </a>
          <a
            href="/delivery"
            style={{
              padding: "14px 40px",
              fontSize: 13,
              background: "none",
              border: "2px solid rgba(255,255,255,0.3)",
              color: "white",
              borderRadius: 4,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Order Delivery
          </a>
        </div>
      </div>
    </div>
  );
};
