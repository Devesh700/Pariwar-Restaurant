import { useState } from "react";
import type { MenuItem as MenuItemType, CartItem, AddressForm } from "../types";

interface DeliveryPageProps {
  menu: Record<string, MenuItemType[]>;
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  addToCart: (item: MenuItemType) => void;
  cartTotal: number;
  showToast: (msg: string, type: "success" | "error") => void;
}

export const DeliveryPage = ({
  menu,
  cart,
  setCart,
  addToCart,
  cartTotal,
  showToast,
}: DeliveryPageProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [activecat, setActivecat] = useState("Lunch");
  const [address, setAddress] = useState<AddressForm>({
    name: "",
    phone: "",
    addr: "",
    pincode: "",
    instructions: "",
  });
  const [payment, setPayment] = useState("cod");

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);
  const cats = Object.keys(menu);
  const deliveryCharge = cartTotal >= 499 ? 0 : 49;

  const handleAddressSubmit = () => {
    if (!address.name || !address.phone || !address.addr) {
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
          Hot & Fresh
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontStyle: "italic" }}>
          Order Delivery
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.5)", marginTop: 12 }}>
          Delivered in 30–45 min · Free delivery on orders above ₹499
        </p>
      </div>

      <div style={{ background: "#f5ede0", padding: "16px 5%", display: "flex", gap: 8, overflowX: "auto" }}>
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setActivecat(c)}
            style={{
              padding: "8px 20px",
              border: `2px solid ${activecat === c ? "#c8912a" : "#e0d5c5"}`,
              background: activecat === c ? "linear-gradient(135deg, #c8912a, #f4a535)" : "white",
              color: activecat === c ? "white" : "#5a4030",
              borderRadius: 4,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 1,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: step === 1 ? "1fr min(360px, 90vw)" : "1fr",
          gap: 0,
          maxWidth: step === 1 ? "100%" : 700,
          margin: "0 auto",
        }}
      >
        {step === 1 && (
          <>
            {/* Menu */}
            <div style={{ padding: "30px 5%", overflowY: "auto" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {menu[activecat].map(item => (
                  <div
                    key={item.id}
                    style={{
                      background: "white",
                      borderRadius: 10,
                      padding: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      boxShadow: "0 2px 12px rgba(42,26,14,0.06)",
                    }}
                  >
                    <div
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 8,
                        background: "linear-gradient(135deg, #f5ede0, #e8d5b8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 36,
                        flexShrink: 0,
                      }}
                    >
                      {item.img}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>{item.name}</div>
                        <span
                          style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: 10,
                            background: item.tag === "Veg" ? "#e8f5e8" : "#fde8e8",
                            color: item.tag === "Veg" ? "#3a6b35" : "#9b3a1a",
                            padding: "2px 7px",
                            borderRadius: 8,
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
                          margin: "4px 0 8px",
                        }}
                      >
                        {item.desc}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: 700, color: "#c8912a", fontSize: 16 }}>₹{item.price}</span>
                        {cart.find(x => x.id === item.id) ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#f5ede0", borderRadius: 4, padding: "4px 8px" }}>
                            <button
                              onClick={() =>
                                setCart(
                                  cart
                                    .map(x => (x.id === item.id ? { ...x, qty: x.qty - 1 } : x))
                                    .filter(x => x.qty > 0)
                                )
                              }
                              style={{
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: 18,
                                color: "#c8912a",
                                fontWeight: 700,
                              }}
                            >
                              −
                            </button>
                            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, minWidth: 16, textAlign: "center" }}>
                              {cart.find(x => x.id === item.id)?.qty}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              style={{
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                fontSize: 18,
                                color: "#c8912a",
                                fontWeight: 700,
                              }}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button onClick={() => addToCart(item)} className="btn-gold" style={{ padding: "7px 18px", fontSize: 11 }}>
                            Add +
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div
              style={{
                background: "white",
                borderLeft: "1px solid #f0e8dc",
                padding: "30px 24px",
                position: "sticky",
                top: 70,
                height: "calc(100vh - 70px)",
                overflowY: "auto",
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 20 }}>Your Order ({cartCount} items)</h3>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#8a6a50" }}>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>🍽</div>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14 }}>Add items from the menu</p>
                </div>
              ) : (
                <>
                  {cart.map(item => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: "1px solid #f5ede0",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 13,
                      }}
                    >
                      <span>
                        {item.img} {item.name} × {item.qty}
                      </span>
                      <span style={{ fontWeight: 700 }}>₹{item.price * item.qty}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 16 }}>
                    {[
                      ["Subtotal", `₹${cartTotal}`],
                      ["Delivery", cartTotal >= 499 ? "FREE 🎉" : "₹49"],
                      ["Total", `₹${cartTotal + deliveryCharge}`],
                    ].map(([k, v], i) => (
                      <div
                        key={k}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "8px 0",
                          borderBottom: i < 2 ? "1px dashed #f0e8dc" : "none",
                          fontFamily: "'Lato', sans-serif",
                          fontSize: i === 2 ? 16 : 13,
                          fontWeight: i === 2 ? 700 : 400,
                          color: i === 2 ? "#2a1a0e" : "#8a6a50",
                        }}
                      >
                        <span>{k}</span>
                        <span style={{ color: i === 2 ? "#c8912a" : v.includes("FREE") ? "#3a6b35" : "#5a4030" }}>
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn-gold"
                    style={{ width: "100%", marginTop: 20, padding: 14 }}
                    onClick={() => setStep(2)}
                  >
                    Proceed to Checkout →
                  </button>
                  {cartTotal < 499 && (
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, color: "#c8912a", textAlign: "center", marginTop: 10 }}>
                      Add ₹{499 - cartTotal} more for free delivery!
                    </p>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <div style={{ padding: "40px 5%" }}>
            <h2 style={{ textAlign: "center", marginBottom: 36, fontSize: 24 }}>Delivery Details</h2>
            <div className="two-col" style={{ marginBottom: 24 }}>
              {[
                ["Full Name*", "name", "text"],
                ["Phone Number*", "phone", "tel"],
                ["Pincode*", "pincode", "text"],
              ].map(([l, k, t]) => (
                <div key={k}>
                  <label>{l}</label>
                  <input
                    type={t}
                    value={address[k as keyof AddressForm]}
                    onChange={e => setAddress(a => ({ ...a, [k]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 20 }}>
              <label>Full Address*</label>
              <textarea
                rows={2}
                placeholder="House/Flat No., Street, Area, City"
                value={address.addr}
                onChange={e => setAddress(a => ({ ...a, addr: e.target.value }))}
                style={{ resize: "none" }}
              />
            </div>
            <div style={{ marginBottom: 28 }}>
              <label>Delivery Instructions</label>
              <input
                placeholder="E.g. Ring the bell twice, leave at door..."
                value={address.instructions}
                onChange={e => setAddress(a => ({ ...a, instructions: e.target.value }))}
              />
            </div>

            <h3 style={{ marginBottom: 16, fontSize: 18 }}>Payment Method</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
              {[
                ["cod", "💵 Cash on Delivery"],
                ["upi", "📲 UPI / QR"],
                ["card", "💳 Card"],
              ].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setPayment(val)}
                  style={{
                    flex: 1,
                    padding: "14px 10px",
                    border: `2px solid ${payment === val ? "#c8912a" : "#e0d5c5"}`,
                    borderRadius: 8,
                    background: payment === val ? "#c8912a15" : "white",
                    cursor: "pointer",
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: payment === val ? "#c8912a" : "#5a4030",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div style={{ background: "#f5ede0", borderRadius: 10, padding: 20, marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontFamily: "'Lato', sans-serif", fontSize: 14 }}>
                <span>Items ({cartCount})</span>
                <span>₹{cartTotal}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "'Lato', sans-serif", fontSize: 14 }}>
                <span>Delivery</span>
                <span style={{ color: "#3a6b35" }}>{cartTotal >= 499 ? "FREE" : "₹49"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 18 }}>
                <span>Total</span>
                <span style={{ color: "#c8912a" }}>₹{cartTotal + deliveryCharge}</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn-outline" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button
                className="btn-gold"
                style={{ flex: 1, padding: 14 }}
                onClick={handleAddressSubmit}
              >
                Place Order 🎉
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c8912a, #f4a535)",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 44,
                animation: "pulse 2s infinite",
              }}
            >
              🛵
            </div>
            <h2 style={{ fontSize: 30, marginBottom: 12 }}>Order Placed Successfully!</h2>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#8a6a50", marginBottom: 36 }}>
              Your food is being prepared. Expected delivery: <strong>35–45 minutes</strong>
            </p>
            <div style={{ background: "#f5ede0", borderRadius: 12, padding: 24, maxWidth: 340, margin: "0 auto 32px", fontFamily: "'Lato', sans-serif" }}>
              <div style={{ fontSize: 13, color: "#8a6a50", marginBottom: 8 }}>Order ID</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#c8912a", letterSpacing: 2 }}>
                PWR-{Math.floor(Math.random() * 90000) + 10000}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => { setStep(1); setCart([]); }}>
                Order More Food
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
