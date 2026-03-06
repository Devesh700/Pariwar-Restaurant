import type { CartItem } from "../types";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onQuantityChange: (itemId: number, delta: number) => void;
  onPlaceOrder: () => void;
}

export const CartDrawer = ({
  open,
  onClose,
  items,
  total,
  onQuantityChange,
  onPlaceOrder,
}: CartDrawerProps) => {
  if (!open) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2000 }}>
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(42,26,14,0.5)" }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "min(380px, 90vw)",
          background: "white",
          boxShadow: "-10px 0 50px rgba(42,26,14,0.2)",
          animation: "slideIn 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px",
            borderBottom: "1px solid #f0e8dc",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: 22 }}>Your Cart 🛒</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#8a6a50",
            }}
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#8a6a50" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🍽</div>
              <p style={{ fontFamily: "'Lato', sans-serif" }}>Your cart is empty</p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid #f5ede0",
                }}
              >
                <span style={{ fontSize: 28 }}>{item.img}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{item.name}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#c8912a" }}>
                    ₹{item.price} × {item.qty}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button
                    onClick={() => onQuantityChange(item.id, -1)}
                    style={{
                      width: 28,
                      height: 28,
                      border: "1px solid #e0d5c5",
                      borderRadius: "50%",
                      background: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      color: "#c8912a",
                    }}
                  >
                    −
                  </button>
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      minWidth: 20,
                      textAlign: "center",
                    }}
                  >
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onQuantityChange(item.id, 1)}
                    style={{
                      width: 28,
                      height: 28,
                      border: "none",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #c8912a, #f4a535)",
                      color: "white",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "24px", borderTop: "1px solid #f0e8dc" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                color: "#8a6a50",
              }}
            >
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                color: "#8a6a50",
              }}
            >
              <span>Delivery</span>
              <span style={{ color: "#3a6b35" }}>FREE</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              <span>Total</span>
              <span style={{ color: "#c8912a" }}>₹{total}</span>
            </div>
            <button
              className="btn-gold"
              style={{ width: "100%", padding: 14 }}
              onClick={onPlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
