import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../utils";

interface NavLink {
  id: string;
  label: string;
  path: string;
}

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "menu", label: "Menu", path: "/menu" },
  { id: "booking", label: "Reserve Table", path: "/booking" },
  { id: "delivery", label: "Order Online", path: "/delivery" },
  { id: "events", label: "Events", path: "/events" },
  { id: "contact", label: "Contact", path: "/contact" },
];

interface NavbarProps {
  cartCount: number;
  scrolled: boolean;
  onCartClick: () => void;
}

export const Navbar = ({ cartCount, scrolled, onCartClick }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    scrollToTop();
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(250,247,242,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 30px rgba(42,26,14,0.12)" : "none",
          transition: "all 0.4s",
          padding: scrolled ? "12px 5%" : "20px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => scrollToTop()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c8912a, #f4a535)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            🍽
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: scrolled ? "#2a1a0e" : "white",
                lineHeight: 1.1,
                textShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Pariwar
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: 3,
                color: scrolled ? "#c8912a" : "#f4d090",
                fontFamily: "'Lato', sans-serif",
                textTransform: "uppercase",
              }}
            >
              Restaurant
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.path}
                onClick={() => {
                  scrollToTop();
                  setMenuOpen(false);
                }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 14px",
                fontFamily: "'Lato', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color:
                  location.pathname === link.path
                    ? "#c8912a"
                    : scrolled
                      ? "#2a1a0e"
                      : "white",
                letterSpacing: 1,
                textTransform: "uppercase",
                transition: "color 0.2s",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
                borderBottom:
                  location.pathname === link.path ? "2px solid #c8912a" : "2px solid transparent",
                textDecoration: "none",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onCartClick}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 22,
              color: scrolled ? "#2a1a0e" : "white",
              filter: scrolled ? "none" : "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
            }}
          >
            🛒
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "#c8912a",
                  color: "white",
                  borderRadius: "50%",
                  width: 18,
                  height: 18,
                  fontSize: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 24,
              color: scrolled ? "#2a1a0e" : "white",
            }}
          >
            ☰
          </button>

          <Link
            to="/booking"
              onClick={() => {
                scrollToTop();
              }}
            className="btn-gold"
            style={{
              padding: "9px 18px",
              fontSize: 11,
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Book Table
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className="mobile-nav"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(42,26,14,0.97)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              color: "white",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {NAV_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.path}
              onClick={handleNavClick}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                color: location.pathname === link.path ? "#f4a535" : "white",
                fontStyle: "italic",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
