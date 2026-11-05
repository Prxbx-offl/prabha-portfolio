"use client";

import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants/data";

// Same condition as the "NAV SWAP" media query in globals.css
const MOBILE_NAV_QUERY = "(max-width: 768px), (max-width: 1024px) and (pointer: coarse)";

export default function Navbar({ active, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const closeMenu = () => {
    // move focus out of the menu before it becomes inert
    if (menuRef.current?.contains(document.activeElement)) btnRef.current?.focus();
    setMenuOpen(false);
  };

  const go = (id) => {
    closeMenu();
    scrollTo(id);
  };

  // `inert` = closed menu can't be focused or read by screen readers
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (menuOpen) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [menuOpen]);

  // Close on Escape, and when resizing up to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const onResize = () =>
      !window.matchMedia(MOBILE_NAV_QUERY).matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <nav className="pf-nav">
        <div className="pf-wrap pf-nav-inner">
          {/* Logo */}
          <span className="pf-logo" onClick={() => go("home")}>
            Prabha<span style={{ color: "#C8A86A" }}>.</span>
          </span>

          {/* Desktop Nav Links (hidden ≤1024px via CSS) */}
          <ul className="pf-nav-links">
            {NAV_ITEMS.map((n) => (
              <li key={n}>
                <button
                  onClick={() => scrollTo(n.toLowerCase())}
                  className={`pf-nav-link${active === n.toLowerCase() ? " on" : ""}`}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>

          {/* Menu toggle (shown ≤1024px via CSS) */}
          <button
            ref={btnRef}
            className={`pf-menu-btn${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="pf-menu"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          >
            <span className="pf-menu-btn-text">{menuOpen ? "Close" : "Menu"}</span>
            <span className="pf-menu-btn-dots">
              <i /><i /><i /><i />
            </span>
          </button>
        </div>
      </nav>

      {/* Click-away layer */}
      <div
        className={`pf-menu-backdrop${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
      />

      {/* ── Compact dropdown menu (mobile + tablet) ── */}
      <div
        id="pf-menu"
        ref={menuRef}
        className={`pf-overlay${menuOpen ? " open" : ""}`}
      >
        <ul className="pf-overlay-links">
          {NAV_ITEMS.map((n, i) => {
            const id = n.toLowerCase();
            return (
              <li key={n} style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.04}s` : "0s" }}>
                <button
                  className={`pf-overlay-link${active === id ? " on" : ""}`}
                  onClick={() => go(id)}
                >
                  <span className="pf-overlay-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pf-overlay-label">{n}</span>
                  <span className="pf-overlay-arrow">→</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="pf-overlay-bottom">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="pf-overlay-social"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
