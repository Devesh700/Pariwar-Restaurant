import { RESTAURANT_INFO } from "../data";

export const Footer = () => {
  return (
    <footer style={{ background: "#1a0d06", color: "#d0b896", padding: "60px 5% 30px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
          marginBottom: 50,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 28 }}>🍽</span>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "white" }}>Pariwar</div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: 3,
                  color: "#c8912a",
                  fontFamily: "'Lato', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Restaurant
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 14,
              lineHeight: 1.7,
              color: "#a08060",
            }}
          >
            Where every meal is a family celebration. Experience the warmth of home-cooked flavors
            with a fine-dining touch.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4
            style={{
              color: "#f4a535",
              marginBottom: 20,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 2,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Opening Hours
          </h4>
          {RESTAURANT_INFO.hours.map(({ day, time }) => (
            <div
              key={day}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
              }}
            >
              <span>{day}</span>
              <span style={{ color: "#f4a535" }}>{time}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              color: "#f4a535",
              marginBottom: 20,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 2,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Contact
          </h4>
          {[
            ["📍", RESTAURANT_INFO.address],
            ["📞", RESTAURANT_INFO.phone],
            ["📧", RESTAURANT_INFO.email],
            ["📶", `Free Wi-Fi: ${RESTAURANT_INFO.wifi}`],
          ].map(([icon, text]) => (
            <div
              key={text}
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 12,
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                alignItems: "flex-start",
              }}
            >
              <span>{icon}</span>
              <span style={{ color: "#a08060" }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Social */}
        <div>
          <h4
            style={{
              color: "#f4a535",
              marginBottom: 20,
              fontFamily: "'Lato', sans-serif",
              letterSpacing: 2,
              fontSize: 11,
              textTransform: "uppercase",
            }}
          >
            Follow Us
          </h4>
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
              <div
                key={i}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "rgba(200,145,42,0.15)",
                  border: "1px solid rgba(200,145,42,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {icon}
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(200,145,42,0.1)", border: "1px solid rgba(200,145,42,0.2)", borderRadius: 6, padding: 14 }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: "#a08060", marginBottom: 10 }}>
              Subscribe for exclusive offers
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                placeholder="Your email"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(200,145,42,0.3)",
                  color: "#d0b896",
                  borderRadius: 4,
                  padding: "8px 12px",
                  fontSize: 12,
                  flex: 1,
                }}
              />
              <button className="btn-gold" style={{ padding: "8px 16px", fontSize: 11 }}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(200,145,42,0.2)",
          paddingTop: 24,
          textAlign: "center",
          fontFamily: "'Lato', sans-serif",
          fontSize: 12,
          color: "#6a5040",
        }}
      >
        © 2026 Pariwar Restaurant. All rights reserved. Crafted with ❤️ for family dining
        experiences.
      </div>
    </footer>
  );
};
