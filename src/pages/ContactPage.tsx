import { useState } from "react";
import type { ContactForm } from "../types";
import { RESTAURANT_INFO } from "../data";

interface ContactPageProps {
  showToast: (msg: string, type: "success" | "error") => void;
}

export const ContactPage = ({ showToast }: ContactPageProps) => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill required fields", "error");
      return;
    }
    showToast("Message sent! We'll reply within 24 hours 💌", "success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

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
          Get in Touch
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontStyle: "italic" }}>
          Contact Us
        </h1>
      </div>

      <div
        className="container two-col"
        style={{
          padding: "70px 0",
          gap: 60,
          alignItems: "start",
        }}
      >
        {/* Left Column */}
        <div>
          <h2 style={{ fontSize: 28, marginBottom: 8 }}>We'd Love to Hear From You</h2>
          <div className="divider" style={{ margin: "0 0 24px" }} />
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#8a6a50",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Have a question, feedback, or want to plan something special? Reach out to us and we'll respond with warmth.
          </p>

          {[
            { icon: "📍", title: "Our Location", text: RESTAURANT_INFO.address },
            { icon: "📞", title: "Call Us", text: `${RESTAURANT_INFO.phone} (10 AM – 11 PM)` },
            { icon: "📧", title: "Email Us", text: RESTAURANT_INFO.email },
            { icon: "📶", title: "Free Wi-Fi", text: `Network: ${RESTAURANT_INFO.wifi} (no password)` },
            { icon: "🅿️", title: "Parking", text: "Free parking lot & street parking available" },
          ].map(({ icon, title, text }) => (
            <div key={title} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c8912a15, #f4a53525)",
                  border: "2px solid #c8912a30",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{title}</div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 13,
                    color: "#8a6a50",
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "#f5ede0", borderRadius: 12, padding: 20, marginTop: 10 }}>
            <h4
              style={{
                fontFamily: "'Lato', sans-serif",
                letterSpacing: 1.5,
                fontSize: 11,
                textTransform: "uppercase",
                color: "#c8912a",
                marginBottom: 16,
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
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 13,
                  marginBottom: 8,
                }}
              >
                <span style={{ color: "#5a4030" }}>{day}</span>
                <span style={{ fontWeight: 700, color: "#c8912a" }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <div
          style={{
            background: "white",
            borderRadius: 16,
            padding: 40,
            boxShadow: "0 10px 40px rgba(42,26,14,0.1)",
          }}
        >
          <h3 style={{ fontSize: 22, marginBottom: 28 }}>Send Us a Message</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              ["Your Name*", "name", "text"],
              ["Email Address*", "email", "email"],
              ["Subject", "subject", "text"],
            ].map(([l, k, t]) => (
              <div key={k}>
                <label>{l}</label>
                <input
                  type={t}
                  value={form[k as keyof ContactForm]}
                  onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
                />
              </div>
            ))}
            <div>
              <label>Message*</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ resize: "vertical" }}
              />
            </div>
            <button className="btn-gold" style={{ padding: 15, fontSize: 13 }} onClick={handleSubmit}>
              Send Message ✉️
            </button>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div
        style={{
          margin: "0 5% 60px",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(42,26,14,0.12)",
          background: "linear-gradient(135deg, #f5ede0, #e8d5b8)",
          height: 280,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 48 }}>📍</div>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 16, color: "#5a4030" }}>
          Pariwar Restaurant
        </div>
        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#8a6a50" }}>
          {RESTAURANT_INFO.address}
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#c8912a",
            fontFamily: "'Lato', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          View on Google Maps →
        </a>
      </div>
    </div>
  );
};
