import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { useCart, useToast, useScroll } from "./hooks";
import { MENU, TABLES } from "./data";

// Lazy load pages for code splitting
const BookingPageLazy = lazy(() => import("./pages/BookingPage").then(m => ({ default: m.BookingPage })));
const DeliveryPageLazy = lazy(() => import("./pages/DeliveryPage").then(m => ({ default: m.DeliveryPage })));
const EventsPageLazy = lazy(() => import("./pages/EventsPage").then(m => ({ default: m.EventsPage })));
const ContactPageLazy = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));

// Loading component
const LoadingPage = () => (
  <div style={{ paddingTop: 200, textAlign: "center", color: "#8a6a50" }}>
    <div style={{ fontSize: 40, marginBottom: 16 }}>🍽</div>
    <p style={{ fontFamily: "'Lato', sans-serif" }}>Loading page...</p>
  </div>
);

// ─── Main App ─────────────────────────────────────────────────────────────────

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, setCart, addToCart, removeFromCart, cartCount, cartTotal } = useCart();
  const { toast, showToast } = useToast();
  const scrolled = useScroll();

  const handleQuantityChange = (itemId: number, delta: number) => {
    if (delta > 0) {
      const item = Object.values(MENU)
        .flat()
        .find(x => x.id === itemId);
      if (item) addToCart(item);
    } else {
      removeFromCart(itemId);
    }
  };

  const handlePlaceOrder = () => {
    showToast("Order placed successfully! 🎉");
    setCart([]);
    setCartOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <Layout
        cartCount={cartCount}
        scrolled={scrolled}
        onCartClick={() => setCartOpen(true)}
        cartOpen={cartOpen}
        onCartClose={() => setCartOpen(false)}
        cartItems={cart}
        cartTotal={cartTotal}
        onQuantityChange={handleQuantityChange}
        onPlaceOrder={handlePlaceOrder}
        toast={toast}
      >
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route
            path="/booking"
            element={
              <Suspense fallback={<LoadingPage />}>
                <BookingPageLazy tables={TABLES} showToast={showToast} />
              </Suspense>
            }
          />
          <Route
            path="/delivery"
            element={
              <Suspense fallback={<LoadingPage />}>
                <DeliveryPageLazy
                  menu={MENU}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                  cartTotal={cartTotal}
                  showToast={showToast}
                />
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense fallback={<LoadingPage />}>
                <EventsPageLazy showToast={showToast} />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ContactPageLazy showToast={showToast} />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
