import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CartDrawer } from "./CartDrawer";
import { ToastComponent } from "./Toast";
import { Footer } from "./Footer";
import type { CartItem, Toast } from "../types";

interface LayoutProps {
  children: ReactNode;
  cartCount: number;
  scrolled: boolean;
  onCartClick: () => void;
  cartOpen: boolean;
  onCartClose: () => void;
  cartItems: CartItem[];
  cartTotal: number;
  onQuantityChange: (itemId: number, delta: number) => void;
  onPlaceOrder: () => void;
  toast: Toast | null;
}

export const Layout = ({
  children,
  cartCount,
  scrolled,
  onCartClick,
  cartOpen,
  onCartClose,
  cartItems,
  cartTotal,
  onQuantityChange,
  onPlaceOrder,
  toast,
}: LayoutProps) => {
  return (
    <div
      style={{
        fontFamily: "'Playfair Display', 'Georgia', serif",
        background: "#faf7f2",
        minHeight: "100vh",
        color: "#2a1a0e",
        width: "100%",
      }}
    >
      <Navbar cartCount={cartCount} scrolled={scrolled} onCartClick={onCartClick} />

      <main style={{ paddingTop: 0, minHeight: "calc(100vh - 200px)" }}>
        {children}
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={onCartClose}
        items={cartItems}
        total={cartTotal}
        onQuantityChange={onQuantityChange}
        onPlaceOrder={onPlaceOrder}
      />

      <ToastComponent toast={toast} />

      <Footer />
    </div>
  );
};
