import { useState, useEffect, useCallback } from "react";
import type { CartItem, MenuItem, Toast } from "../types";

// ─── CART HOOK ─────────────────────────────────────────────────────────────────

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback(
    (item: MenuItem) => {
      setCart(prevCart => {
        const existing = prevCart.find(x => x.id === item.id);
        if (existing) {
          return prevCart.map(x =>
            x.id === item.id ? { ...x, qty: x.qty + 1 } : x
          );
        }
        return [...prevCart, { ...item, qty: 1 }];
      });
    },
    []
  );

  const removeFromCart = useCallback((itemId: number) => {
    setCart(prevCart =>
      prevCart
        .map(x => (x.id === itemId ? { ...x, qty: x.qty - 1 } : x))
        .filter(x => x.qty > 0)
    );
  }, []);

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);
  const cartTotal = cart.reduce((a, b) => a + b.price * b.qty, 0);

  return { cart, setCart, addToCart, removeFromCart, cartCount, cartTotal };
};

// ─── TOAST HOOK ────────────────────────────────────────────────────────────────

export const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = useCallback((msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  return { toast, showToast };
};

// ─── SCROLL HOOK ───────────────────────────────────────────────────────────────

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};
