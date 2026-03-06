import { useState } from "react";
import type { EventForm } from "../types";
import { EVENTS } from "../data";

interface EventsPageProps {
  showToast: (msg: string, type: "success" | "error") => void;
}

export const EventsPage = ({ showToast }: EventsPageProps) => {
  const [form, setForm] = useState<EventForm>({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    guests: "",
    notes: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      showToast("Please fill required fields", "error");
      return;
    }
    showToast("Enquiry sent! We'll contact you soon 🎉", "success");
    setForm({ name: "", phone: "", email: "", event: "", date: "", guests: "", notes: "" });
  };

  return (
    <div style={{ paddingTop: 80 }}>
      <div
        style={{
          background: "linear-gradient(135deg, #2a1a0e, #5a2e10)",
          padding: "60px 5%",
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
          Experiences & Gatherings
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontStyle: "italic" }}>
          Events at Pariwar
        </h1>
      </div>

      <div className="container" style={{ padding: "70px 0", background: "#faf7f2" }}>
        <p className="section-sub">What's Happening</p>
        <h2 className="section-title">Upcoming & Regular Events</h2>
        <div className="divider" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
            margin: "0 auto 70px",
          }}
        >
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 12,
                padding: 28,
                boxShadow: "0 4px 20px rgba(42,26,14,0.07)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background:
                    ev.tag === "Weekly"
                      ? "#e8f5e8"
                      : ev.tag === "Monthly"
                        ? "#fff3e0"
                        : "#fde8e8",
                  color:
                    ev.tag === "Weekly"
                      ? "#3a6b35"
                      : ev.tag === "Monthly"
                        ? "#c8912a"
                        : "#9b3a1a",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 10,
                }}
              >
                {ev.tag}
              </div>
              <div style={{ fontSize: 40, marginBottom: 14 }}>{ev.icon}</div>
              <h3 style={{ fontSize: 18, marginBottom: 6 }}>{ev.title}</h3>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: "#c8912a", fontWeight: 700, marginBottom: 10 }}>
                📅 {ev.freq}
              </div>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 13,
                  color: "#8a6a50",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {ev.desc}
              </p>
              <button
                className="btn-outline"
                style={{ fontSize: 11 }}
                onClick={() => {
                  setForm(f => ({ ...f, event: ev.title }));
                  document.getElementById("event-enquiry")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Enquire →
              </button>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        <div
          id="event-enquiry"
          style={{
            background: "linear-gradient(135deg, #2a1a0e, #5a2e10)",
            borderRadius: 16,
            padding: "50px 5%",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <h2 style={{ color: "white", textAlign: "center", marginBottom: 8, fontSize: 28 }}>
            Plan Your Private Event
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              marginBottom: 36,
              fontSize: 14,
            }}
          >
            Fill in the form and we'll get back to you within 24 hours.
          </p>
          <div className="two-col" style={{ gap: 16 }}>
            {[
              ["Your Name*", "name", "text"],
              ["Phone*", "phone", "tel"],
              ["Email", "email", "email"],
              ["No. of Guests", "guests", "number"],
            ].map(([l, k, t]) => (
              <div key={k}>
                <label style={{ color: "#d0b896" }}>{l}</label>
                <input
                  type={t}
                  value={form[k as keyof EventForm]}
                  onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(200,145,42,0.3)",
                    color: "white",
                  }}
                />
              </div>
            ))}
            <div>
              <label style={{ color: "#d0b896" }}>Event Type</label>
              <select
                value={form.event}
                onChange={e => setForm(f => ({ ...f, event: e.target.value }))}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(200,145,42,0.3)",
                  color: "white",
                }}
              >
                <option value="">Select event</option>
                {EVENTS.map(e => (
                  <option key={e.title} value={e.title}>
                    {e.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ color: "#d0b896" }}>Preferred Date</label>
              <input
                type="date"
                value={form.date}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(200,145,42,0.3)",
                  color: "white",
                }}
              />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ color: "#d0b896" }}>Additional Notes</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(200,145,42,0.3)",
                  color: "white",
                  resize: "none",
                }}
              />
            </div>
          </div>
          <button className="btn-gold" style={{ width: "100%", padding: 15, marginTop: 20 }} onClick={handleSubmit}>
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};
