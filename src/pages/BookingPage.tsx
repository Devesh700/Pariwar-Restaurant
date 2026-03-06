import { useState } from "react";
import type { Table, BookingForm } from "../types";

interface BookingPageProps {
  tables: Table[];
  showToast: (msg: string, type: "success" | "error") => void;
}

export const BookingPage = ({ tables, showToast }: BookingPageProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    requests: "",
  });

  const floorGroups = [...new Set(tables.map(t => t.floor))];

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.date || !form.time) {
      showToast("Please fill all required fields", "error");
      return;
    }
    setStep(3);
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
          Book Your Experience
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontStyle: "italic" }}>
          Reserve a Table
        </h1>
      </div>

      {/* Progress */}
      <div style={{ background: "white", borderBottom: "1px solid #f0e8dc", padding: "20px 5%" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", alignItems: "center", gap: 0 }}>
          {["Choose Table", "Your Details", "Confirmed!"].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background:
                      step > i + 1
                        ? "#3a6b35"
                        : step === i + 1
                          ? "linear-gradient(135deg, #c8912a, #f4a535)"
                          : "#f0e8dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: step >= i + 1 ? "white" : "#b0906a",
                    transition: "all 0.3s",
                  }}
                >
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 11,
                    color: step === i + 1 ? "#c8912a" : "#b0906a",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s}
                </span>
              </div>
              {i < 2 && (
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background: step > i + 1 ? "#3a6b35" : "#f0e8dc",
                    margin: "0 8px",
                    marginBottom: 20,
                    transition: "background 0.3s",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: "50px 0" }}>
        {step === 1 && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: 8, fontSize: 24 }}>Select Your Perfect Spot</h2>
            <p
              style={{
                textAlign: "center",
                fontFamily: "'Lato', sans-serif",
                color: "#8a6a50",
                marginBottom: 40,
                fontSize: 14,
              }}
            >
              Choose a table that suits your occasion
            </p>
            {floorGroups.map(floor => (
              <div key={floor} style={{ marginBottom: 40 }}>
                <h3
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    letterSpacing: 2,
                    fontSize: 12,
                    textTransform: "uppercase",
                    color: "#c8912a",
                    marginBottom: 16,
                  }}
                >
                  📍 {floor} Floor
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
                  {tables
                    .filter(t => t.floor === floor)
                    .map(table => (
                      <div
                        key={table.id}
                        onClick={() => table.available && setSelectedTable(table)}
                        style={{
                          padding: 20,
                          borderRadius: 10,
                          border: `2px solid ${
                            selectedTable?.id === table.id ? "#c8912a" : table.available ? "#e0d5c5" : "#f0e8dc"
                          }`,
                          background:
                            selectedTable?.id === table.id
                              ? "linear-gradient(135deg, #c8912a15, #f4a53525)"
                              : table.available
                                ? "white"
                                : "#faf7f2",
                          cursor: table.available ? "pointer" : "not-allowed",
                          opacity: table.available ? 1 : 0.6,
                          transition: "all 0.2s",
                        }}
                      >
                        <div style={{ fontSize: 28, marginBottom: 8 }}>
                          {table.type === "Romantic"
                            ? "💑"
                            : table.type === "Family"
                              ? "👨‍👩‍👧‍👦"
                              : table.type === "Group"
                                ? "👥"
                                : table.type === "Event"
                                  ? "🎉"
                                  : "🍷"}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{table.name}</div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: "#8a6a50" }}>
                          👤 {table.seats} seats · {table.type}
                        </div>
                        <div
                          style={{
                            marginTop: 8,
                            fontFamily: "'Lato', sans-serif",
                            fontSize: 11,
                            fontWeight: 700,
                            color: table.available ? "#3a6b35" : "#9b3a1a",
                          }}
                        >
                          {table.available ? "● Available" : "● Booked"}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button
                className="btn-gold"
                disabled={!selectedTable}
                onClick={() => setStep(2)}
                style={{ opacity: selectedTable ? 1 : 0.5, padding: "14px 40px" }}
              >
                {selectedTable ? `Continue with ${selectedTable.name} →` : "Select a Table to Continue"}
              </button>
            </div>
          </div>
        )}

        {step === 2 && selectedTable && (
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #c8912a15, #f4a53520)",
                border: "2px solid #c8912a30",
                borderRadius: 12,
                padding: 20,
                marginBottom: 36,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 32 }}>{selectedTable.type === "Romantic" ? "💑" : "🍽"}</span>
              <div>
                <div style={{ fontWeight: 700 }}>{selectedTable.name}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#8a6a50" }}>
                  {selectedTable.seats} seats · {selectedTable.type} · {selectedTable.floor} Floor
                </div>
              </div>
              <button
                onClick={() => setStep(1)}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#c8912a",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12,
                }}
              >
                Change
              </button>
            </div>

            <div className="two-col">
              {[
                ["Name*", "name", "text", "Your full name"],
                ["Phone*", "phone", "tel", "+91 XXXXX XXXXX"],
                ["Email", "email", "email", "your@email.com"],
                ["Guests*", "guests", "number", "2"],
              ].map(([label, key, type, placeholder]) => (
                <div key={key}>
                  <label>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof BookingForm]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    max={key === "guests" ? selectedTable.seats : undefined}
                  />
                </div>
              ))}
              <div>
                <label>Date*</label>
                <input
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                />
              </div>
              <div>
                <label>Time*</label>
                <select
                  value={form.time}
                  onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                >
                  <option value="">Select time</option>
                  {[
                    "7:00 AM",
                    "8:00 AM",
                    "9:00 AM",
                    "12:00 PM",
                    "1:00 PM",
                    "2:00 PM",
                    "7:00 PM",
                    "8:00 PM",
                    "9:00 PM",
                    "10:00 PM",
                  ].map(t => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label>Special Occasion</label>
                <select
                  value={form.occasion}
                  onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))}
                >
                  <option value="">None</option>
                  {["Birthday 🎂", "Anniversary 💑", "Business Lunch 💼", "Date Night 🌹", "Family Gathering 👨‍👩‍👧‍👦", "Other"].map(o => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label>Special Requests</label>
                <textarea
                  placeholder="Allergies, accessibility needs, decoration preferences..."
                  rows={3}
                  value={form.requests}
                  onChange={e => setForm(f => ({ ...f, requests: e.target.value }))}
                  style={{ resize: "vertical" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <button className="btn-outline" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button className="btn-gold" style={{ flex: 1, padding: 14 }} onClick={handleSubmit}>
                Confirm Reservation 🎉
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3a6b35, #5a9b55)",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 44,
              }}
            >
              ✓
            </div>
            <h2 style={{ fontSize: 32, marginBottom: 12 }}>Reservation Confirmed!</h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#8a6a50",
                fontSize: 15,
                maxWidth: 400,
                margin: "0 auto 36px",
              }}
            >
              Your table is reserved. We've sent a confirmation to your email. We look forward to hosting you!
            </p>
            <div
              style={{
                background: "linear-gradient(135deg, #c8912a10, #f4a53520)",
                border: "2px solid #c8912a30",
                borderRadius: 12,
                padding: 28,
                maxWidth: 400,
                margin: "0 auto 32px",
                textAlign: "left",
              }}
            >
              {[
                ["Table", selectedTable?.name],
                ["Date", form.date],
                ["Time", form.time],
                ["Guests", form.guests],
                ...(form.occasion ? [["Occasion", form.occasion]] : []),
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #f0e8dc",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "#8a6a50" }}>{k}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
            <button
              className="btn-gold"
              onClick={() => {
                setStep(1);
                setSelectedTable(null);
                setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "2", occasion: "", requests: "" });
              }}
            >
              Make Another Reservation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
