"use client";

import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "@/constants/data";

const THUMB_COLORS = ["#EEEDEA", "#EEF0EA", "#EAF0EE", "#EAEAF0"];

// A link counts as "not ready" until you replace "#" in data.js with a real URL
const isPlaceholder = (url) => !url || url.trim() === "" || url.trim() === "#";

// "Explainable DualLexiCaps: A Hybrid…" → "Explainable DualLexiCaps"
const shortTitle = (t) => t.split(":")[0].trim();

const TOAST_COPY = {
  demo: {
    icon: "🚀",
    heading: "Live demo coming soon",
    body: (name) => `${name} isn't deployed yet. Want a walkthrough? Drop me a message.`,
  },
  github: {
    icon: "🔒",
    heading: "Code is private for now",
    body: (name) => `The source for ${name} will be published soon. Ask me if you'd like access.`,
  },
};

export default function Projects() {
  const [toast, setToast] = useState(null); // { kind, name, id }
  const timer = useRef(null);

  const showToast = (kind, title) => {
    clearTimeout(timer.current);
    setToast({ kind, name: shortTitle(title), id: Date.now() });
    timer.current = setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  const onLink = (e, url, kind, title) => {
    if (isPlaceholder(url)) {
      e.preventDefault();
      showToast(kind, title);
    }
  };

  const goContact = () => {
    setToast(null);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="pf-section">
      <div className="pf-wrap">

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="pf-sec-label">My Work</p>
          <h2 className="pf-sec-title">Projects</h2>
          <div className="pf-divider pf-divider-center" />
        </div>

        {/* ── Project Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(270px, 100%), 1fr))",
            gap: 28,
          }}
        >
          {PROJECTS.map(({ image, emoji, title, tech, desc, demo, github }, i) => (
            <div key={i} className="pf-card" style={{ cursor: "pointer" }}>

              {/* Thumbnail — 2:1 so the whole illustration is visible at any width */}
              <div
                className="pf-project-thumb"
                style={{ background: THUMB_COLORS[i % THUMB_COLORS.length] }}
              >
                {image ? (
                  <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" />
                ) : (
                  <span style={{ fontSize: 44 }}>{emoji}</span>
                )}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 16.5,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                {title}
              </h3>

              <p
                style={{ fontSize: 13, color: "#777", lineHeight: 1.75, marginBottom: 18 }}
              >
                {desc}
              </p>

              {/* Tech Tags */}
              <div
                style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}
              >
                {tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 20,
                      fontSize: 11,
                      background: "#F0EEE8",
                      color: "#666",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 18 }}>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => onLink(e, demo, "demo", title)}
                  style={{ fontSize: 13, fontWeight: 500, color: "#C8A86A", textDecoration: "none" }}
                >
                  Live Demo ↗
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => onLink(e, github, "github", title)}
                  style={{ fontSize: 13, fontWeight: 500, color: "#888", textDecoration: "none" }}
                >
                  GitHub →
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ── Pop-up toast for links that aren't ready yet ── */}
      {toast && (
        <div key={toast.id} className="pf-toast" role="status" aria-live="polite">
          <span className="pf-toast-icon">{TOAST_COPY[toast.kind].icon}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="pf-toast-title">{TOAST_COPY[toast.kind].heading}</p>
            <p className="pf-toast-body">{TOAST_COPY[toast.kind].body(toast.name)}</p>
            <button className="pf-toast-action" onClick={goContact}>
              Contact me →
            </button>
          </div>
          <button className="pf-toast-close" aria-label="Close" onClick={() => setToast(null)}>
            ✕
          </button>
          <span className="pf-toast-timer" />
        </div>
      )}
    </section>
  );
}
